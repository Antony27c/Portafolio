import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { CV_URL } from "../data/social";
import Icon from "./Icon";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

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
    <svg className="flag" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <clipPath id="flag-uk">
        <rect width="60" height="40" rx="5" />
      </clipPath>
      <g clipPath="url(#flag-uk)">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0 0l60 40M60 0L0 40" stroke="#fff" strokeWidth="8" />
        <path d="M0 0l60 40M60 0L0 40" stroke="#C8102E" strokeWidth="3" />
        <path d="M30 0v40M0 20h60" stroke="#fff" strokeWidth="12" />
        <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="7" />
      </g>
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
      <a className="site-logo" href="#inicio" aria-label="Antonio Chocobar · Inicio" onClick={closeMenu}>
        <Logo />
      </a>
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
          href={CV_URL}
          target="_blank"
          rel="noopener"
          onClick={closeMenu}
        >
          <Icon name="download" /> {t("nav.resume")}
        </a>
        <SocialLinks className="nav-social" onClick={closeMenu} />
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
          <Icon name={theme === "light" ? "sun" : "moon"} />
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
        <Icon name={open ? "close" : "menu"} />
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
