"use client";

import { useState, useRef, useEffect, useCallback, useMemo, memo } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { motion, AnimatePresence } from "framer-motion";
import { useChatbot } from "./ChatbotContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  onend: () => void;
}

interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionErrorEvent {
  error: string;
  message: string;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  isFinal: boolean;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

declare global {
  interface Window {
    SpeechRecognition: {
      new (): SpeechRecognition;
    };
    webkitSpeechRecognition: {
      new (): SpeechRecognition;
    };
  }
}

const MessageBubble = memo(({ message }: { message: Message }) => {
  return (
    <div
      className={`flex ${
        message.role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          message.role === "user"
            ? "bg-primary text-white"
            : "bg-bg-subtle text-text-primary"
        }`}
      >
        <p className="whitespace-pre-wrap text-sm break-words">
          {message.content}
        </p>
      </div>
    </div>
  );
});

MessageBubble.displayName = "MessageBubble";

export function Chatbot() {
  const { t, locale } = useI18n();
  const { isOpen, setIsOpen } = useChatbot();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: t.sections.chatbot.welcomeMessage,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const interimTranscriptRef = useRef<string>("");
  const handleSendRef = useRef<((textToSend?: string) => Promise<void>) | null>(null);

  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      scrollToBottom();
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    setIsSpeechSupported(!!SpeechRecognition);
  }, []);

  useEffect(() => {
    if (!isSpeechSupported) return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    const langMap: Record<string, string> = {
      pt: "pt-BR",
      en: "en-US",
      es: "es-ES",
    };
    recognition.lang = langMap[locale] || "pt-BR";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + " ";
        } else {
          interimTranscript += transcript;
        }
      }

      if (finalTranscript) {
        setInput((prev) => (prev + finalTranscript).trim());
        interimTranscriptRef.current = "";
      } else if (interimTranscript) {
        interimTranscriptRef.current = interimTranscript;
        setInput((prev) => {
          const base = prev.replace(interimTranscriptRef.current, "");
          return base + interimTranscript;
        });
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
      if (event.error === "no-speech") {
        return;
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      setTimeout(() => {
        if (handleSendRef.current) {
          setInput((current) => {
            const finalText = current.trim();
            if (finalText && finalText.length > 0) {
              handleSendRef.current?.(finalText);
            }
            return current;
          });
        }
      }, 800);
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
        recognitionRef.current.abort();
      }
    };
  }, [isSpeechSupported, locale]);

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      const finalText = input.trim();
      if (finalText && !isLoading && handleSendRef.current) {
        setTimeout(() => {
          handleSendRef.current?.(finalText);
        }, 300);
      }
    } else {
      interimTranscriptRef.current = "";
      setInput("");
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleSend = useCallback(async (textToSend?: string) => {
    const messageToSend = (textToSend || input).trim();
    if (!messageToSend || isLoading) return;

    const userMessage: Message = { role: "user", content: messageToSend };
    
    setInput("");
    setIsLoading(true);
    
    setMessages((prev) => {
      const updatedMessages = [...prev, userMessage];
      
      fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao processar mensagem");
          }
          return response.json();
        })
        .then((data) => {
          setMessages((prevMsgs) => [
            ...prevMsgs,
            { role: "assistant", content: data.message },
          ]);
        })
        .catch((error) => {
          console.error("Chatbot error:", error);
          setMessages((prevMsgs) => [
            ...prevMsgs,
            {
              role: "assistant",
              content: t.sections.chatbot.errorMessage,
            },
          ]);
        })
        .finally(() => {
          setIsLoading(false);
        });

      return updatedMessages;
    });
  }, [input, isLoading, t]);

  useEffect(() => {
    handleSendRef.current = handleSend;
  }, [handleSend]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    setMessages([
      {
        role: "assistant",
        content: t.sections.chatbot.welcomeMessage,
      },
    ]);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex h-[600px] w-[400px] flex-col rounded-lg border border-border-default bg-bg-secondary shadow-2xl md:w-[450px]"
          >
            <div className="flex items-center justify-between border-b border-border-default bg-bg-primary px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">
                    {t.sections.chatbot.title}
                  </h3>
                  <p className="text-xs text-text-secondary">
                    {t.sections.chatbot.subtitle}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClear}
                  className="rounded-lg p-1.5 text-text-secondary transition-colors hover:bg-bg-subtle hover:text-text-primary"
                  aria-label={t.sections.chatbot.clearChat}
                  title={t.sections.chatbot.clearChat}
                >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-text-secondary transition-colors hover:bg-bg-subtle hover:text-text-primary"
              aria-label="Fechar chatbot"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 scrollbar-custom">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <MessageBubble
                  key={`${message.role}-${index}-${message.content.slice(0, 20)}`}
                  message={message}
                />
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-lg bg-bg-subtle px-4 py-2">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-text-secondary [animation-delay:-0.3s]"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-text-secondary [animation-delay:-0.15s]"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-text-secondary"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

            <div className="border-t border-border-default p-4">
              <div className="flex gap-2">
                {isSpeechSupported && (
                  <button
                    onClick={toggleListening}
                    disabled={isLoading}
                    className={`rounded-lg px-3 py-2 transition-colors ${
                      isListening
                        ? "bg-error text-white animate-pulse"
                        : "bg-bg-subtle text-text-secondary hover:bg-bg-primary hover:text-text-primary"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                    aria-label={
                      isListening
                        ? t.sections.chatbot.stopRecording
                        : t.sections.chatbot.startRecording
                    }
                    title={
                      isListening
                        ? t.sections.chatbot.stopRecording
                        : t.sections.chatbot.startRecording
                    }
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {isListening ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      )}
                    </svg>
                  </button>
                )}
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    isListening
                      ? t.sections.chatbot.listeningPlaceholder
                      : t.sections.chatbot.inputPlaceholder
                  }
                  className="flex-1 resize-none rounded-lg border border-border-default bg-bg-primary px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  rows={1}
                  disabled={isLoading || isListening}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading || isListening}
                  className="rounded-lg bg-primary px-4 py-2 text-white transition-opacity disabled:opacity-50 hover:bg-primary-hover disabled:hover:opacity-50"
                  aria-label={t.sections.chatbot.sendButton}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            <p className="mt-2 text-xs text-text-secondary">
              {t.sections.chatbot.inputHint}
            </p>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export const ChatbotButton = memo(() => {
  const { t } = useI18n();
  const { isOpen, setIsOpen } = useChatbot();

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-border-default bg-bg-secondary px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs font-medium text-text-secondary transition-colors hover:border-primary hover:text-text-primary touch-manipulation ${
        isOpen ? "border-primary text-text-primary bg-bg-subtle" : ""
      }`}
      aria-label={t.sections.chatbot.toggleButton}
      aria-pressed={isOpen}
    >
      <svg
        className="h-4 w-4 sm:h-5 sm:w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
      <span className="hidden sm:inline">
        {t.sections.chatbot.title}
      </span>
    </button>
  );
});

ChatbotButton.displayName = "ChatbotButton";

