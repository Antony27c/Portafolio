import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="hero">
      <p className="hero-hi animate__animated animate__fadeInDown">{t("hero.hi")}</p>
      <h1 className="hero-name animate__animated animate__fadeInUp">Antonio Chocobar.</h1>
      <h2 className="hero-role animate__animated animate__fadeInUp">{t("hero.role")}</h2>
      <p className="hero-lead animate__animated animate__fadeIn">{t("hero.lead")}</p>
      <a className="btn-outline hero-cta animate__animated animate__fadeInUp" href="#contacto">
        {t("hero.ctaContact")}
      </a>
    </section>
  );
}
