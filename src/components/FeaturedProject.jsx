import { useLanguage } from "../context/LanguageContext";
import Icon from "./Icon";
import ProjectLinks from "./ProjectLinks";

export default function FeaturedProject({ project, reversed }) {
  const { t } = useLanguage();
  const mediaHref = project.demo || project.github;

  return (
    <article className={`featured${reversed ? " featured-alt" : ""}`}>
      <a className="featured-media" href={mediaHref} target="_blank" rel="noopener" tabIndex={-1}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      </a>
      <div className="featured-body">
        {project.awardKey ? (
          <p className="award-badge">
            <Icon name="award" /> {t(project.awardKey)}
          </p>
        ) : (
          <p className="featured-label">{t("projects.featured")}</p>
        )}
        <h3>{project.title}</h3>
        <p className="featured-card">{t(project.descriptionKey)}</p>
        <ul className="featured-tech">
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ProjectLinks project={project} className="featured-links" />
      </div>
    </article>
  );
}
