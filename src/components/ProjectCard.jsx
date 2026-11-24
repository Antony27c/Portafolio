import { useLanguage } from "../context/LanguageContext";
import Icon from "./Icon";
import ProjectLinks from "./ProjectLinks";

export default function ProjectCard({ project }) {
  const { t } = useLanguage();

  return (
    <article className="other-card">
      <div className="other-top">
        <Icon name="folder" className="other-folder" />
        <ProjectLinks project={project} className="other-links" />
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
