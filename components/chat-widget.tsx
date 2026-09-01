"use client";

import { useState } from "react";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-widget">
      <button
        type="button"
        className="chat-toggle"
        aria-expanded={isOpen}
        aria-controls="portfolio-chat"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close chat" : "Chat with Damian"}
      </button>

      {isOpen && (
        <section
          id="portfolio-chat"
          className="chat-panel"
          aria-label="Chat with Damian Support"
        >
          <header>
            <span className="status-dot" />
            <strong>Damian Support</strong>
          </header>

          <p>Ask me about Damian&apos;s experience, projects, or skills.</p>
        </section>
      )}
    </div>
  );
}