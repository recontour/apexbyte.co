"use client"; // This line is important for Next.js

import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    // 1. CONFIGURATION: Your Vercel URL from the chatbot project
    const CHAT_URL = "https://apexbyte-chat-widget.vercel.app/";
    const WIDGET_ID = "apexbyte-chat-widget-iframe";

    // Prevent duplicate iframes
    if (document.getElementById(WIDGET_ID)) return;

    // 2. Create the Iframe
    const iframe = document.createElement("iframe");
    iframe.id = WIDGET_ID;
    iframe.src = CHAT_URL;

    // Apply styles directly
    Object.assign(iframe.style, {
      position: "fixed",
      bottom: "0",
      right: "0",
      border: "none",
      zIndex: "999999",
      width: "100px", // Start small
      height: "100px", // Start small
      background: "transparent", // Important!
      colorScheme: "normal",
    });

    document.body.appendChild(iframe);

    // 3. Listen for Open/Close messages
    const handleMessage = (event: MessageEvent) => {
      // Optional: Security check to ensure message comes from your chat app
      // if (event.origin !== CHAT_URL) return;

      if (event.data && event.data.type === "APEXBYTE_CHAT_TOGGLE") {
        if (event.data.isOpen) {
          // OPEN STATE
          if (window.innerWidth < 768) {
            // Mobile: Full screen
            iframe.style.width = "100%";
            iframe.style.height = "100%";
          } else {
            // Desktop: Specific size
            iframe.style.width = "450px";
            iframe.style.height = "750px";
          }
        } else {
          // CLOSED STATE
          iframe.style.width = "100px";
          iframe.style.height = "100px";
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener("message", handleMessage);
      const existingIframe = document.getElementById(WIDGET_ID);
      if (existingIframe) {
        existingIframe.remove();
      }
    };
  }, []);

  // This component doesn't render anything visible in the DOM tree itself
  // It injects the iframe manually.
  return null;
}
