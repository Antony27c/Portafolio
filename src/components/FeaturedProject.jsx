import { useLanguage } from "../context/LanguageContext";

export default function FeaturedProject({ project, reversed }) {
  const { t } = useLanguage();
  const mediaHref = project.demo || project.github;

  return (
    <article className={`featured${reversed ? " featured-alt" : ""}`}>
      <a className="featured-media" href={mediaHref} target="_blank" rel="noopener">
        <img src={project.image} alt={project.imageAlt} />
      </a>
      <div className="featured-body">
        <p className="featured-label">{t("projects.featured")}</p>
        <h3>{project.title}</h3>
        <p className="featured-card">{t(project.descriptionKey)}</p>
        <ul className="featured-tech">
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="featured-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener"
              aria-label={`GitHub ${project.title}`}
            >
              <i className="fa-brands fa-github"></i>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener"
              aria-label={`Demo ${project.title}`}
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
