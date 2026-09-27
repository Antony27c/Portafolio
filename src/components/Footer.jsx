import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <p>&copy; 2026 Antonio Chocobar</p>
      <p className="credit">
        <span>{t("footer.credit")}</span>{" "}
        <a href="https://github.com/bchiang7/v4" target="_blank" rel="noopener">
          Brittany Chiang
        </a>{" "}
        ·{" "}
        <a
          href="https://github.com/andresjosehr/andresjosehr-portfolio"
          target="_blank"
          rel="noopener"
        >
          José Andrés
        </a>
      </p>
    </footer>
  );
}
