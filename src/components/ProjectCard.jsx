import { useLanguage } from "../context/LanguageContext";

export default function ProjectCard({ project }) {
  const { t } = useLanguage();

  return (
    <article className="other-card">
      <div className="other-top">
        <i className="fa-regular fa-folder other-folder"></i>
        <div className="other-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener"
              aria-label={project.title}
            >
              <i className="fa-brands fa-github"></i>
            </a>
          )}
        </div>
      </div>
      <h3>{project.title}</h3>
      <p>{t(project.descriptionKey)}</p>
      <ul>
        {project.tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
