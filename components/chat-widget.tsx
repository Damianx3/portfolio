"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  includeInContext?: boolean;
};

type ChatResponse = {
  reply?: string;
  error?: string;
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! Ask me about Damian's experience, projects, or skills.",
      includeInContext: false,
    },
  ]);

  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages, isSending]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const content = input.trim();

    if (!content || isSending) {
      return;
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content,
    };

    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);

    setInput("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages
            .filter((message) => message.includeInContext !== false)
            .slice(-10)
            .map(({ role, content: messageContent }) => ({
              role,
              content: messageContent,
            })),
        }),
      });

      const data = (await response.json()) as ChatResponse;

      if (!response.ok || !data.reply) {
        throw new Error(data.error ?? "The chat request failed.");
      }

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply,
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        assistantMessage,
      ]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          error instanceof Error
            ? error.message
            : "Sorry, I couldn't answer that. Please try again.",
        includeInContext: false,
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        errorMessage,
      ]);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="chat-widget">
      {!isOpen && (
        <button
          type="button"
          className="chat-toggle"
          aria-expanded="false"
          aria-controls="portfolio-chat"
          onClick={() => setIsOpen(true)}
        >
          <span className="chat-toggle-copy">
            <span>Chat with</span>
            <strong>
              <i className="chat-status-dot" aria-hidden="true" />
              Damian Support
            </strong>
          </span>

          <span className="chat-toggle-chevron" aria-hidden="true" />
        </button>
      )}

      {isOpen && (
        <section
          id="portfolio-chat"
          className="chat-panel"
          aria-label="Portfolio assistant"
        >
          <header className="chat-header">
            <strong>Damian Support</strong>
            <button
              type="button"
              className="chat-close"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </header>

          <div className="chat-messages" aria-live="polite">
            {messages.map((message) => (
              <div
                className={`chat-message ${message.role}`}
                key={message.id}
              >
                <strong>
                  {message.role === "assistant"
                    ? "Damian Support"
                    : "You"}
                </strong>

                <p>{message.content}</p>
              </div>
            ))}
            <div ref={messagesEndRef} aria-hidden="true" />
          </div>

          <form className="chat-form" onSubmit={handleSubmit}>
            <label htmlFor="chat-input">Message</label>

            <input
              id="chat-input"
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about Damian..."
              disabled={isSending}
            />

            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send"}
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
