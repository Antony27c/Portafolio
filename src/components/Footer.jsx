import { useLanguage } from "../context/LanguageContext";
import { EMAIL } from "../data/social";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <SocialLinks className="footer-social" />
      <a className="footer-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <p>{t("footer.built")} &copy; 2026</p>
    </footer>
  );
}
