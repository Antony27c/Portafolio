import { useLanguage } from "../context/LanguageContext";
import { CV_URL } from "../data/social";
import Icon from "./Icon";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="hero">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="hero-hi anim anim-down">{t("hero.hi")}</p>
          <h1 className="hero-name anim anim-up">Antonio Chocobar.</h1>
          <h2 className="hero-role anim anim-up">{t("hero.role")}</h2>
          <p className="hero-lead anim anim-fade">{t("hero.lead")}</p>
          <div className="hero-ctas anim anim-up">
            <a className="btn-solid" href="#proyectos">
              {t("hero.ctaProjects")}
            </a>
            <a className="btn-outline" href={CV_URL} target="_blank" rel="noopener">
              <Icon name="download" /> {t("hero.ctaCv")}
            </a>
          </div>
        </div>
        <div className="hero-photo anim anim-fade">
          <div className="photo-frame">
            <img
              src="https://avatars.githubusercontent.com/u/233409500?v=4"
              alt="Antonio Chocobar"
              width="300"
              height="300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
