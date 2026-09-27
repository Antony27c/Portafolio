import { useLanguage } from "../context/LanguageContext";
import { featuredProjects } from "../data/projects";
import FeaturedProject from "./FeaturedProject";
import Reveal from "./Reveal";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="section">
      <Reveal>
        <h2 className="section-title">
          <span>03.</span> <em>{t("projects.title")}</em>
        </h2>
      </Reveal>
      {featuredProjects.map((project, index) => (
        <Reveal key={project.title}>
          <FeaturedProject project={project} reversed={index % 2 === 1} />
        </Reveal>
      ))}
    </section>
  );
}
