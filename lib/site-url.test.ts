import { afterEach, describe, expect, it, vi } from "vitest";

import { getSiteUrl } from "@/lib/site-url";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";

afterEach(() => vi.unstubAllEnvs());

describe("public site URLs", () => {
  it("uses the production domain when no override is configured", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "preview.vercel.app");
    expect(getSiteUrl().origin).toBe("https://damian-portfolio.com");
    expect(sitemap().map((entry) => entry.url)).toEqual([
      "https://damian-portfolio.com/",
      "https://damian-portfolio.com/about",
      "https://damian-portfolio.com/projects",
    ]);
    expect(robots().sitemap).toBe("https://damian-portfolio.com/sitemap.xml");
  });

  it("ignores a whitespace-only override", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "   ");
    expect(getSiteUrl().origin).toBe("https://damian-portfolio.com");
  });

  it("uses an explicit production domain override consistently", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", " https://portfolio.example.org ");
    expect(getSiteUrl().origin).toBe("https://portfolio.example.org");
    expect(sitemap()[1].url).toBe("https://portfolio.example.org/about");
    expect(robots().sitemap).toBe("https://portfolio.example.org/sitemap.xml");
  });
});
