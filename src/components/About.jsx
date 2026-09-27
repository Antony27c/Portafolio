import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import Skills from "./Skills";

export default function About() {
  const { t } = useLanguage();

  return (
    <Reveal as="section" id="sobre-mi" className="section">
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
      </div>
    </Reveal>
  );
}
