import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const links = [
  { href: "#sobre-mi", num: "01.", key: "nav.about" },
  { href: "#experiencia", num: "02.", key: "nav.experience" },
  { href: "#proyectos", num: "03.", key: "nav.projects" },
  { href: "#contacto", num: "04.", key: "nav.contact" },
];

function FlagEs() {
  return (
    <svg className="flag" viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="36" height="24" rx="3" fill="#74ACDF" />
      <rect y="8" width="36" height="8" fill="#fff" />
      <circle cx="18" cy="12" r="3.1" fill="#F6B40E" />
      <circle cx="18" cy="12" r="1.55" fill="#85340A" />
      <circle cx="18" cy="12" r="1" fill="#F6B40E" />
    </svg>
  );
}

function FlagEn() {
  return (
    <svg className="flag" viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="36" height="24" rx="3" fill="#fff" />
      <rect x="15" width="6" height="24" fill="#CE1124" />
      <rect y="9" width="36" height="6" fill="#CE1124" />
    </svg>
  );
}

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
    <header className="site-header">
      <nav className={`nav${open ? " is-open" : ""}`} id="site-nav">
        <ol>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                <span>{link.num}</span> <em>{t(link.key)}</em>
              </a>
            </li>
          ))}
        </ol>
        <a
          className="btn-outline"
          href="https://github.com/Antony27c"
          target="_blank"
          rel="noopener"
          onClick={closeMenu}
        >
          {t("nav.resume")}
        </a>
        <div className="nav-social">
          <a href="https://github.com/Antony27c" target="_blank" rel="noopener" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/antonio-chocobar-19525341b/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com/antony0.0_"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="mailto:antoniochocobar.sam@gmail.com" aria-label="Email">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </nav>
      <div className="header-tools">
        <div className="lang-switch" role="group" aria-label="Idioma">
          <button
            type="button"
            className={`lang-btn${lang === "es" ? " is-active" : ""}`}
            aria-pressed={lang === "es"}
            aria-label="Español"
            onClick={() => setLang("es")}
          >
            <FlagEs />
            ES
          </button>
          <button
            type="button"
            className={`lang-btn${lang === "en" ? " is-active" : ""}`}
            aria-pressed={lang === "en"}
            aria-label="English"
            onClick={() => setLang("en")}
          >
            <FlagEn />
            EN
          </button>
        </div>
        <button
          type="button"
          className="icon-btn"
          aria-label={theme === "dark" ? t("theme.toLight") : t("theme.toDark")}
          onClick={(e) => toggleTheme(e.currentTarget)}
        >
          <i className={theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
        </button>
      </div>
      <button
        type="button"
        className="icon-btn menu-btn"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">{t("nav.menu")}</span>
        <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </button>
    </header>
    <div
      className={`nav-backdrop${open ? " is-open" : ""}`}
      aria-hidden="true"
      onClick={closeMenu}
    ></div>
    </>
  );
}
