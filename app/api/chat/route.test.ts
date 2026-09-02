import { afterAll, afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { POST } from "@/app/api/chat/route";

const originalApiKey = process.env.OPENAI_API_KEY;

function createRequest(body: string, address = crypto.randomUUID()) {
  return new Request("http://localhost/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": address,
    },
    body,
  });
}

describe("POST /api/chat", () => {
  beforeEach(() => {
    process.env.OPENAI_API_KEY = "test-key";
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  afterAll(() => {
    if (originalApiKey === undefined) {
      delete process.env.OPENAI_API_KEY;
    } else {
      process.env.OPENAI_API_KEY = originalApiKey;
    }
  });

  it("rejects invalid JSON", async () => {
    const response = await POST(createRequest("{"));

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      error: "The request must contain valid JSON.",
    });
  });

  it("rejects a history that does not end with a user message", async () => {
    const request = createRequest(
      JSON.stringify({
        messages: [{ role: "assistant", content: "Previous answer" }],
      }),
    );

    const response = await POST(request);

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      error: "The message history is invalid.",
    });
  });

  it("rejects user messages longer than 500 characters", async () => {
    const request = createRequest(
      JSON.stringify({
        messages: [{ role: "user", content: "a".repeat(501) }],
      }),
    );

    const response = await POST(request);

    expect(response.status).toBe(400);
  });

  it("allows assistant history longer than the user message limit", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({
            output: [
              {
                content: [
                  { type: "output_text", text: "A valid follow-up." },
                ],
              },
            ],
          }),
          { status: 200 },
        ),
      ),
    );

    const request = createRequest(
      JSON.stringify({
        messages: [
          { role: "assistant", content: "a".repeat(700) },
          { role: "user", content: "Can you summarize that?" },
        ],
      }),
    );

    const response = await POST(request);

    expect(response.status).toBe(200);
  });

  it("sends recent conversation history and returns output text", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          output: [
            {
              content: [
                {
                  type: "output_text",
                  text: "Damian built an internal manufacturing platform.",
                },
              ],
            },
          ],
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      ),
    );

    vi.stubGlobal("fetch", fetchMock);

    const messages = [
      { role: "user", content: "Where did Damian intern?" },
      { role: "assistant", content: "At TMAC." },
      { role: "user", content: "What did he build there?" },
    ];

    const response = await POST(
      createRequest(JSON.stringify({ messages })),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      reply: "Damian built an internal manufacturing platform.",
    });

    expect(fetchMock).toHaveBeenCalledOnce();

    const requestOptions = fetchMock.mock.calls[0]?.[1] as RequestInit;
    const payload = JSON.parse(requestOptions.body as string) as {
      input: typeof messages;
      store: boolean;
    };

    expect(payload.input).toEqual(messages);
    expect(payload.store).toBe(false);
  });
});
