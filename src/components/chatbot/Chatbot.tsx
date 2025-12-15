"use client";

import { useState, useRef, useEffect, useCallback, memo } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { motion, AnimatePresence } from "framer-motion";
import { useChatbot } from "./ChatbotContext";
import { useChat } from "@ai-sdk/react";

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
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

const TypewriterText = memo(({ text, isTyping }: { text: string; isTyping: boolean }) => {
  const [displayedText, setDisplayedText] = useState("");
  const textRef = useRef(text);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isTypingRef = useRef(isTyping);
  const displayedTextRef = useRef("");

  useEffect(() => {
    textRef.current = text;
    isTypingRef.current = isTyping;
  }, [text, isTyping]);

  useEffect(() => {
    const updateText = () => {
      if (!isTypingRef.current) {
        if (displayedTextRef.current !== textRef.current) {
          displayedTextRef.current = textRef.current;
          setDisplayedText(textRef.current);
        }
        return;
      }

      const currentLength = displayedTextRef.current.length;
      const targetLength = textRef.current.length;

      if (currentLength < targetLength) {
        const nextChar = textRef.current[currentLength];
        displayedTextRef.current += nextChar;
        setDisplayedText(displayedTextRef.current);
        timeoutRef.current = setTimeout(updateText, 10);
      } else if (!isTypingRef.current) {
        displayedTextRef.current = textRef.current;
        setDisplayedText(textRef.current);
      }
    };

    updateText();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, isTyping]);

  useEffect(() => {
    if (text.length === 0) {
      displayedTextRef.current = "";
      timeoutRef.current = setTimeout(() => {
        setDisplayedText("");
      }, 0);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text]);

  return (
    <span className="whitespace-pre-wrap">
      {displayedText}
      {isTyping && displayedText.length < text.length && (
        <span className="animate-pulse">▋</span>
      )}
    </span>
  );
});

TypewriterText.displayName = "TypewriterText";

const MessageBubble = memo(({ message, isStreaming }: { message: Message; isStreaming?: boolean }) => {
  const isAssistant = message.role === "assistant";
  
  return (
    <div
      className={`flex ${
        message.role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[85%] rounded-lg px-3 py-2 text-sm sm:max-w-[80%] sm:px-4 sm:text-base ${
          message.role === "user"
            ? "bg-primary text-white"
            : "bg-bg-subtle text-text-primary"
        }`}
      >
        <p className="whitespace-pre-wrap wrap-break-word leading-relaxed">
          {isAssistant ? (
            <TypewriterText text={message.content} isTyping={isStreaming || false} />
          ) : (
            message.content
          )}
        </p>
      </div>
    </div>
  );
});

MessageBubble.displayName = "MessageBubble";

export function Chatbot() {
  const { t, locale } = useI18n();
  const { isOpen, setIsOpen } = useChatbot();
  const [isListening, setIsListening] = useState(false);
  const [isSpeechSupported] = useState(() => {
    if (globalThis.window === undefined) return false;
    return !!(globalThis.window.SpeechRecognition || globalThis.window.webkitSpeechRecognition);
  });
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const interimTranscriptRef = useRef<string>("");
  const inputRefForSpeech = useRef("");
  const sendMessageRef = useRef<((message: { text: string }) => Promise<void>) | null>(null);

  const extractMessageContent = (msg: { parts?: Array<{ type: string; text?: string }> }) => {
    const parts = Array.isArray(msg.parts) ? msg.parts : [];
    const textParts = parts.filter((part) => part.type === "text");
    return textParts.map((part) => part.text || "").join("") || "";
  };

  const processSSELine = (
    line: string,
    controller: ReadableStreamDefaultController<
      | { type: "text-start"; id: string }
      | { type: "text-delta"; delta: string; id: string }
      | { type: "text-end"; id: string }
    >
  ) => {
    const trimmed = line.trim();
    if (!trimmed.startsWith("data:")) return;

    const jsonPart = trimmed.replace(/^data:\s*/, "");
    
    if (jsonPart === "[DONE]") {
      return;
    }

    try {
      const data = JSON.parse(jsonPart);
      
      if (data.type === "text-start" && data.id) {
        controller.enqueue({
          type: "text-start" as const,
          id: data.id,
        });
      } else if (data.type === "text-delta" && data.delta !== undefined) {
        controller.enqueue({
          type: "text-delta" as const,
          delta: String(data.delta),
          id: data.id || "",
        });
      } else if (data.type === "text-end" && data.id) {
        controller.enqueue({
          type: "text-end" as const,
          id: data.id,
        });
      }
    } catch {
      // Ignore parse errors
    }
  };

  const processSSELines = (
    lines: string[],
    controller: ReadableStreamDefaultController<
      | { type: "text-start"; id: string }
      | { type: "text-delta"; delta: string; id: string }
      | { type: "text-end"; id: string }
    >
  ) => {
    for (const line of lines) {
      if (line.trim()) {
        processSSELine(line, controller);
      }
    }
  };

  const { messages, sendMessage, setMessages, status } = useChat({
    transport: {
      sendMessages: async ({ messages: chatMessages, abortSignal }) => {
        const response = await fetch("/api/chatbot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: chatMessages.map((msg) => ({
              role: msg.role,
              content: extractMessageContent(msg),
            })),
          }),
          signal: abortSignal,
        });

        if (!response.body) {
          throw new Error("No response body");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        return new ReadableStream({
          async start(controller) {
            try {
              let buffer = "";
              while (true) {
                const { done, value } = await reader.read();
                if (done) {
                  if (buffer.trim()) {
                    const remainingLines = buffer.split("\n").filter((line) => line.trim());
                    processSSELines(remainingLines, controller);
                  }
                  controller.close();
                  break;
                }
                const chunk = decoder.decode(value, { stream: true });
                buffer += chunk;
                const lines = buffer.split("\n");
                buffer = lines.pop() || "";
                const completeLines = lines.filter((line) => line.trim());
                if (completeLines.length > 0) {
                  processSSELines(completeLines, controller);
                }
              }
            } catch (error) {
              controller.error(error);
            }
          },
        });
      },
      reconnectToStream: async () => {
        throw new Error("Reconnect not implemented");
      },
    },
    messages: [
      {
        id: "welcome",
        role: "assistant" as const,
        parts: [{ type: "text" as const, text: t.sections.chatbot.welcomeMessage }],
      },
    ],
  });

  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    inputRefForSpeech.current = input;
    sendMessageRef.current = sendMessage;
  }, [input, sendMessage]);

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
    if (!isSpeechSupported) return;

    const SpeechRecognition =
      globalThis.window.SpeechRecognition || globalThis.window.webkitSpeechRecognition;
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
        const finalText = inputRefForSpeech.current.trim();
        if (finalText && finalText.length > 0 && sendMessageRef.current) {
          sendMessageRef.current({ text: finalText });
          setInput("");
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
      if (finalText && !isLoading) {
        setTimeout(() => {
          sendMessage({ text: finalText });
          setInput("");
        }, 300);
      }
    } else {
      interimTranscriptRef.current = "";
      setInput("");
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const text = input.trim();
      if (text && !isLoading) {
        sendMessage({ text });
        setInput("");
      }
    }
  };

  const handleClear = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant" as const,
        parts: [{ type: "text" as const, text: t.sections.chatbot.welcomeMessage }],
      },
    ]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 flex flex-col bg-bg-secondary sm:inset-auto sm:bottom-4 sm:right-4 sm:h-[600px] sm:w-[400px] sm:rounded-lg sm:border sm:border-border-default sm:shadow-2xl md:bottom-6 md:right-6 md:w-[450px]"
        >
            <div className="flex items-center justify-between border-b border-border-default bg-bg-primary px-3 py-2.5 sm:px-4 sm:py-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white sm:h-10 sm:w-10">
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
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-text-primary sm:text-base">
                    {t.sections.chatbot.title}
                  </h3>
                  <p className="hidden text-xs text-text-secondary sm:block">
                    {t.sections.chatbot.subtitle}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={handleClear}
                  className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-bg-subtle hover:text-text-primary active:bg-bg-subtle sm:p-1.5"
                  aria-label={t.sections.chatbot.clearChat}
                  title={t.sections.chatbot.clearChat}
                >
                  <svg
                    className="h-5 w-5 sm:h-5 sm:w-5"
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
                  className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-bg-subtle hover:text-text-primary active:bg-bg-subtle sm:p-1.5"
                  aria-label="Fechar chatbot"
                >
                  <svg
                    className="h-5 w-5 sm:h-5 sm:w-5"
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

            <div className="flex-1 overflow-y-auto p-3 scrollbar-custom sm:p-4">
              <div className="space-y-3 sm:space-y-4">
              {messages.map((message, index) => {
                const parts = Array.isArray(message.parts) ? message.parts : [];
                const textParts = parts.filter((part: { type: string }) => part.type === "text");
                const content = textParts.map((part: { text: string }) => part.text).join("") || "";
                const role = message.role as "user" | "assistant";
                const isLastMessage = index === messages.length - 1;
                const isStreaming = isLoading && isLastMessage && role === "assistant";
                return (
                  <MessageBubble
                    key={message.id}
                    message={{
                      role,
                      content,
                    }}
                    isStreaming={isStreaming}
                  />
                );
              })}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-lg bg-bg-subtle px-3 py-2 sm:px-4">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-text-secondary [animation-delay:-0.3s] sm:h-2.5 sm:w-2.5"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-text-secondary [animation-delay:-0.15s] sm:h-2.5 sm:w-2.5"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-text-secondary sm:h-2.5 sm:w-2.5"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

            <div className="border-t border-border-default p-3 sm:p-4">
              <form onSubmit={(e) => {
                e.preventDefault();
                const text = input.trim();
                if (text && !isLoading) {
                  sendMessage({ text });
                  setInput("");
                }
              }} className="flex gap-2">
                {isSpeechSupported && (
                  <button
                    type="button"
                    onClick={toggleListening}
                    disabled={isLoading}
                    className={`shrink-0 rounded-lg px-3 py-2.5 transition-colors active:scale-95 sm:px-3 sm:py-2 ${
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
                      className="h-5 w-5 sm:h-5 sm:w-5"
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
                  onKeyDown={handleKeyDown}
                  placeholder={
                    isListening
                      ? t.sections.chatbot.listeningPlaceholder
                      : t.sections.chatbot.inputPlaceholder
                  }
                  className="flex-1 resize-none rounded-lg border border-border-default bg-bg-primary px-3 py-2.5 text-base text-text-primary placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:py-2 sm:text-sm"
                  rows={1}
                  disabled={isLoading || isListening}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading || isListening}
                  className="shrink-0 rounded-lg bg-primary px-4 py-2.5 text-white transition-all active:scale-95 disabled:opacity-50 hover:bg-primary-hover disabled:hover:opacity-50 sm:py-2"
                  aria-label={t.sections.chatbot.sendButton}
                >
                  <svg
                    className="h-5 w-5 sm:h-5 sm:w-5"
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
              </form>
              <p className="mt-2 hidden text-xs text-text-secondary sm:block">
                {t.sections.chatbot.inputHint}
              </p>
            </div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}

export const ChatbotButton = memo(() => {
  const { t } = useI18n();
  const { isOpen, setIsOpen } = useChatbot();

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-border-default bg-bg-secondary px-3 py-2 text-xs font-medium text-text-secondary transition-all active:scale-95 hover:border-primary hover:text-text-primary touch-manipulation sm:px-3 sm:py-2 ${
        isOpen ? "border-primary text-text-primary bg-bg-subtle" : ""
      }`}
      aria-label={t.sections.chatbot.toggleButton}
      aria-pressed={isOpen}
    >
      <svg
        className="h-5 w-5 sm:h-5 sm:w-5"
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

