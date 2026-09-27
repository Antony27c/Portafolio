import { useLanguage } from "../context/LanguageContext";
import Skills from "./Skills";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="section" data-aos="fade-up">
      <h2 className="section-title">
        <span>01.</span> <em>{t("about.title")}</em>
      </h2>
      <div className="about-grid">
        <div className="about-copy">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <Skills />
        </div>
        <div className="about-photo">
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
