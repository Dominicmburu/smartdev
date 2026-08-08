"use client";

import { useEffect, useState } from "react";

// Dark is the default theme. This component only ever needs to flip a
// "dark" class on <html> and remember the user's choice — the initial,
// pre-hydration state is handled by the inline script in app/layout.tsx
// so there's no flash of the wrong theme on first load.
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
    >
      {isDark ? "Light mode" : "Dark mode"}
    </button>
  );
}
