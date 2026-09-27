import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

const ThemeContext = createContext(null);

function initialTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme);
  const busy = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#f6f0fc" : "#0a0814");
  }, [theme]);

  const revealTheme = useCallback((next, event) => {
    if (busy.current) return;

    const root = document.documentElement;
    const source = event?.currentTarget;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    if (source?.getBoundingClientRect) {
      const rect = source.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    } else if (event?.clientX != null) {
      x = event.clientX;
      y = event.clientY;
    }

    const endRadius =
      Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      ) + 24;

    busy.current = true;
    root.style.setProperty("--vt-x", `${x}px`);
    root.style.setProperty("--vt-y", `${y}px`);
    root.style.setProperty("--vt-r", `${Math.ceil(endRadius)}px`);

    const burst = document.createElement("span");
    burst.className = "theme-burst";
    burst.setAttribute("aria-hidden", "true");
    burst.style.setProperty("--burst-bg", next === "light" ? "#f6f0fc" : "#0a0814");
    document.body.appendChild(burst);

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setTheme(next);
      burst.remove();
      busy.current = false;
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        burst.classList.add("is-on");
      });
    });

    burst.addEventListener("transitionend", (ev) => {
      if (ev.propertyName === "clip-path") finish();
    });
    window.setTimeout(finish, 850);
  }, []);

  const toggleTheme = useCallback(
    (event) => {
      revealTheme(theme === "light" ? "dark" : "light", event);
    },
    [theme, revealTheme]
  );

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
