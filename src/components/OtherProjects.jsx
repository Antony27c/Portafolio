import { useLanguage } from "../context/LanguageContext";
import { otherProjects } from "../data/projects";
import { GITHUB } from "../data/social";
import Icon from "./Icon";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function OtherProjects() {
  const { t } = useLanguage();

  return (
    <section id="mas-proyectos" className="section">
      <Reveal>
        <h2 className="section-title center">
          <em>{t("other.title")}</em>
        </h2>
      </Reveal>
      <div className="other-grid">
        {otherProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      <Reveal className="other-more">
        <a className="btn-outline" href={`${GITHUB}?tab=repositories`} target="_blank" rel="noopener">
          <Icon name="github" /> {t("other.more")}
        </a>
      </Reveal>
    </section>
  );
}
