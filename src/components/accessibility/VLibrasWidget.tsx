"use client";

import { useEffect, useRef } from "react";

const VLIBRAS_SCRIPT_URL = "https://vlibras.gov.br/app/vlibras-plugin.js";

interface VLibrasWidgetProps {
  enabled: boolean;
}

export function VLibrasWidget({ enabled }: VLibrasWidgetProps) {
  const widgetInitialized = useRef(false);
  const scriptLoaded = useRef(false);
  const containerCreated = useRef(false);

  useEffect(() => {
    if (globalThis.window === undefined) return;

    const createContainer = () => {
      if (containerCreated.current) return;
      
      let container = document.querySelector('div[vw]');
      
      if (!container) {
        container = document.createElement("div");
        container.setAttribute("vw", "");
        container.className = "enabled";
        container.setAttribute("aria-label", "VLibras Widget");
        (container as HTMLDivElement).style.position = "relative";
        document.body.appendChild(container);
        containerCreated.current = true;
      }
      
      const bodyPosition = globalThis.window.getComputedStyle(document.body).position;
      if (bodyPosition === "static") {
        document.body.style.position = "relative";
      }
    };

    const removeContainer = () => {
      const container = document.querySelector('div[vw]');
      if (container) {
        container.remove();
        containerCreated.current = false;
      }
    };

    if (enabled) {
      createContainer();

      const initializeWidget = () => {
        if (!globalThis.window.VLibras?.Widget || widgetInitialized.current) {
          return;
        }

        try {
          createContainer();
          
          new globalThis.window.VLibras.Widget("https://vlibras.gov.br/app");
          widgetInitialized.current = true;
        } catch (error) {
          console.error("Erro ao inicializar VLibras:", error);
          widgetInitialized.current = false;
        }
      };

      const handleScriptLoad = (script: HTMLScriptElement) => {
        scriptLoaded.current = true;
        script.dataset.loaded = "true";
        
        let attempts = 0;
        const maxAttempts = 30;
        
        const tryInitialize = setInterval(() => {
          attempts++;
          
          if (globalThis.window.VLibras?.Widget) {
            clearInterval(tryInitialize);
            setTimeout(initializeWidget, 500);
          } else if (attempts >= maxAttempts) {
            clearInterval(tryInitialize);
            console.error("VLibras não disponível após múltiplas tentativas");
          }
        }, 200);
      };

      const handleExistingScript = (existingScript: HTMLScriptElement) => {
        if (scriptLoaded.current && globalThis.window.VLibras) {
          initializeWidget();
        } else if (existingScript.dataset.loaded === "true") {
          scriptLoaded.current = true;
          initializeWidget();
        } else {
          existingScript.addEventListener("load", () => {
            scriptLoaded.current = true;
            existingScript.dataset.loaded = "true";
            setTimeout(initializeWidget, 500);
          });
        }
      };

      const createScript = () => {
        const script = document.createElement("script");
        script.src = VLIBRAS_SCRIPT_URL;
        script.async = true;
        script.defer = true;
        script.id = "vlibras-plugin";
        script.type = "text/javascript";
        script.onload = () => handleScriptLoad(script);
        script.onerror = () => {
          console.error("Erro ao carregar script do VLibras");
          scriptLoaded.current = false;
        };
        document.head.appendChild(script);
      };

      const loadVLibras = () => {
        const existingScript = document.getElementById("vlibras-plugin") as HTMLScriptElement | null;
        
        if (existingScript) {
          handleExistingScript(existingScript);
          return;
        }

        createScript();
      };

      loadVLibras();
    } else {
      widgetInitialized.current = false;
      scriptLoaded.current = false;
      
      const script = document.getElementById("vlibras-plugin");
      if (script) {
        script.remove();
      }
      
      removeContainer();
      
      const vlibrasElements = [
        document.querySelector('#vlibras-widget'),
        document.querySelector('[id^="vlibras"]:not([vw])'),
        document.querySelector('[vw-access-button]'),
        document.querySelector('[vw-plugin-wrapper]'),
        document.querySelector('iframe[src*="vlibras"]'),
      ];
      
      vlibrasElements.forEach(el => {
        if (el) el.remove();
      });
      
      const vlibrasDivs = document.querySelectorAll('div[id*="vlibras"], div[class*="vlibras"]');
      vlibrasDivs.forEach(el => {
        if (el.getAttribute('vw') === null) {
          el.remove();
        }
      });
    }

    return () => {
      if (!enabled) {
        widgetInitialized.current = false;
        scriptLoaded.current = false;
        containerCreated.current = false;
      }
    };
  }, [enabled]);

  return null;
}

interface VLibrasWidgetInstance {
  readonly [key: string]: unknown;
}

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => VLibrasWidgetInstance;
    };
  }
}

