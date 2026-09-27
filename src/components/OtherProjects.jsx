import { useLanguage } from "../context/LanguageContext";
import { otherProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function OtherProjects() {
  const { t } = useLanguage();

  return (
    <section id="mas-proyectos" className="section">
      <Reveal>
        <h2 className="section-title center">
          <span>04.</span> <em>{t("other.title")}</em>
        </h2>
      </Reveal>
      <div className="other-grid">
        {otherProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
