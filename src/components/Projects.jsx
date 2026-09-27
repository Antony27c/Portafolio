import { useLanguage } from "../context/LanguageContext";
import { featuredProjects } from "../data/projects";
import FeaturedProject from "./FeaturedProject";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="section" data-aos="fade-up">
      <h2 className="section-title">
        <span>03.</span> <em>{t("projects.title")}</em>
      </h2>
      {featuredProjects.map((project, index) => (
        <FeaturedProject key={project.title} project={project} reversed={index % 2 === 1} />
      ))}
    </section>
  );
}
