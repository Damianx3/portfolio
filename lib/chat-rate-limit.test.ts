import { describe, expect, it } from "vitest";

import { checkChatRateLimit } from "@/lib/chat-rate-limit";

describe("checkChatRateLimit", () => {
  it("allows the first ten requests and blocks the eleventh", () => {
    const identifier = `rate-limit-test-${crypto.randomUUID()}`;

    for (let requestNumber = 1; requestNumber <= 10; requestNumber += 1) {
      const result = checkChatRateLimit(identifier);

      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(10 - requestNumber);
    }

    const blockedResult = checkChatRateLimit(identifier);

    expect(blockedResult.allowed).toBe(false);
    expect(blockedResult.remaining).toBe(0);
  });

  it("tracks different visitors separately", () => {
    const firstVisitor = `visitor-one-${crypto.randomUUID()}`;
    const secondVisitor = `visitor-two-${crypto.randomUUID()}`;

    expect(checkChatRateLimit(firstVisitor).remaining).toBe(9);
    expect(checkChatRateLimit(firstVisitor).remaining).toBe(8);
    expect(checkChatRateLimit(secondVisitor).remaining).toBe(9);
  });
});
