import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>
);

const MIN_LOADER_MS = 1800;
const MAX_FONT_WAIT_MS = 2500;

function hideLoader() {
  const loader = document.getElementById("loader");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const minDelay = new Promise((resolve) =>
    setTimeout(resolve, reduced ? 0 : Math.max(0, MIN_LOADER_MS - performance.now()))
  );
  const fonts = Promise.race([
    document.fonts?.ready ?? Promise.resolve(),
    new Promise((resolve) => setTimeout(resolve, MAX_FONT_WAIT_MS)),
  ]);
  Promise.all([minDelay, fonts]).then(() => {
    document.documentElement.classList.remove("is-loading");
    if (!loader) return;
    loader.classList.add("is-done");
    loader.addEventListener("transitionend", () => loader.remove(), { once: true });
    setTimeout(() => loader.remove(), 800);
  });
}

hideLoader();
