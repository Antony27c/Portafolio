import { useLanguage } from "../context/LanguageContext";
import { otherProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function OtherProjects() {
  const { t } = useLanguage();

  return (
    <section id="mas-proyectos" className="section" data-aos="fade-up">
      <h2 className="section-title center">
        <span>04.</span> <em>{t("other.title")}</em>
      </h2>
      <div className="other-grid">
        {otherProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
