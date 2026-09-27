import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";

const ThemeContext = createContext(null);

function initialTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function applyThemeToDom(theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {}
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "light" ? "#f6f0fc" : "#0a0814");
}

function burstOrigin(button) {
  if (button?.getBoundingClientRect) {
    const rect = button.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  }
  return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme);
  const busy = useRef(false);

  useEffect(() => {
    applyThemeToDom(theme);
  }, [theme]);

  const burstFallback = useCallback((next, button) => {
    const root = document.documentElement;
    const { x, y } = burstOrigin(button);
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
      applyThemeToDom(next);
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
    (button) => {
      if (busy.current) return;
      const next = theme === "light" ? "dark" : "light";

      const commit = () => {
        applyThemeToDom(next);
        try {
          flushSync(() => setTheme(next));
        } catch {
          setTheme(next);
        }
      };

      if (typeof document.startViewTransition !== "function" || !button) {
        burstFallback(next, button);
        return;
      }

      busy.current = true;
      const release = () => {
        busy.current = false;
      };

      let transition;
      try {
        transition = document.startViewTransition(commit);
      } catch {
        commit();
        release();
        return;
      }

      transition.finished.finally(release);
      transition.ready
        .then(() => {
          const { x, y } = burstOrigin(button);
          const radius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
          );
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${radius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 600,
              easing: "ease-in-out",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        })
        .catch(() => {});
    },
    [theme, burstFallback]
  );

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
