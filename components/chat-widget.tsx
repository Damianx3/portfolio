"use client";

import { useState, type FormEvent } from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const content = input.trim();

    if (!content) {
      return;
    }

    const newMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content,
    };

    setMessages([...messages, newMessage]);
    setInput("");

    setTimeout(() => {
  const assistantMessage: ChatMessage = {
    id: crypto.randomUUID(),
    role: "assistant",
    content: `I received your question: "${content}"`,
  };

    setMessages((currentMessages) => [
        ...currentMessages,
        assistantMessage,
    ]);
    }, 500);
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
            <span>Online</span>
          </header>

          <div className="chat-messages">
            {messages.map((message) => (
              <div
                className={`chat-message ${message.role}`}
                key={message.id}
              >
                <strong>
                  {message.role === "assistant" ? "Damian Support" : "You"}
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
            />

            <button type="submit">Send</button>
          </form>
        </section>
      )}
    </div>
  );
}