import { afterEach, describe, expect, it, vi } from "vitest";

import { readStoredTheme, storeTheme } from "@/lib/theme";

afterEach(() => vi.unstubAllGlobals());

describe("theme preferences", () => {
  it("restores a saved light theme", () => {
    vi.stubGlobal("window", { localStorage: { getItem: () => "light" } });
    expect(readStoredTheme()).toBe("light");
  });

  it.each([null, "dark", "unknown"])("defaults to dark for %s", (value) => {
    vi.stubGlobal("window", { localStorage: { getItem: () => value } });
    expect(readStoredTheme()).toBe("dark");
  });

  it("handles browsers that block access to localStorage", () => {
    vi.stubGlobal("window", {
      get localStorage() { throw new Error("Storage access denied"); },
    });
    expect(readStoredTheme()).toBe("dark");
    expect(() => storeTheme("light")).not.toThrow();
  });

  it("handles storage read and write failures", () => {
    vi.stubGlobal("window", { localStorage: {
      getItem: () => { throw new Error("Storage unavailable"); },
      setItem: () => { throw new Error("Quota exceeded"); },
    } });
    expect(readStoredTheme()).toBe("dark");
    expect(() => storeTheme("light")).not.toThrow();
  });

  it("saves the selected theme", () => {
    const setItem = vi.fn();
    vi.stubGlobal("window", { localStorage: { setItem } });
    storeTheme("light");
    expect(setItem).toHaveBeenCalledWith("portfolio-theme", "light");
  });
});
