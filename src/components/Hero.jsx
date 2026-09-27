import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="hero">
      <div className="hero-copy">
        <p className="hero-hi animate__animated animate__fadeInDown">{t("hero.hi")}</p>
        <h1 className="hero-name animate__animated animate__fadeInUp">Antonio Chocobar.</h1>
        <h2 className="hero-role animate__animated animate__fadeInUp">{t("hero.role")}</h2>
        <p className="hero-lead animate__animated animate__fadeIn">{t("hero.lead")}</p>
        <a className="btn-outline hero-cta animate__animated animate__fadeInUp" href="#contacto">
          {t("hero.ctaContact")}
        </a>
      </div>
      <div className="hero-photo animate__animated animate__fadeIn">
        <div className="photo-frame">
          <img
            src="https://avatars.githubusercontent.com/u/233409500?v=4"
            alt="Antonio Chocobar"
            width="300"
            height="300"
          />
        </div>
      </div>
    </section>
  );
}
