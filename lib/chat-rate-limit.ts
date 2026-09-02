type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const WINDOW_MS = 10 * 60 * 1000;
const REQUEST_LIMIT = 10;
const requests = new Map<string, RateLimitEntry>();

export function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  return forwardedFor?.split(",")[0]?.trim() || "local";
}

export function checkChatRateLimit(identifier: string) {
  const now = Date.now();
  const currentEntry = requests.get(identifier);

  if (!currentEntry || now >= currentEntry.resetAt) {
    const resetAt = now + WINDOW_MS;

    requests.set(identifier, {
      count: 1,
      resetAt,
    });

    return {
      allowed: true,
      remaining: REQUEST_LIMIT - 1,
      resetAt,
    };
  }

  if (currentEntry.count >= REQUEST_LIMIT) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: currentEntry.resetAt,
    };
  }

  currentEntry.count += 1;

  return {
    allowed: true,
    remaining: REQUEST_LIMIT - currentEntry.count,
    resetAt: currentEntry.resetAt,
  };
}
