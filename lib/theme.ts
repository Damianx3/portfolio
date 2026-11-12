export type Theme = "dark" | "light";

export function readStoredTheme(): Theme {
  try {
    return window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export function storeTheme(theme: Theme) {
  try {
    window.localStorage.setItem("portfolio-theme", theme);
  } catch {
    // Theme switching still works when the browser blocks persistent storage.
  }
}
