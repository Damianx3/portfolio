"use client";

import { useState, type FormEvent } from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
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
    },
  ]);

  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

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

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
    ]);

    setInput("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
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
          aria-label="Portfolio assistant"
        >
          <header className="chat-header">
            <strong>Damian Support</strong>
            <span>{isSending ? "Responding..." : "Online"}</span>
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
