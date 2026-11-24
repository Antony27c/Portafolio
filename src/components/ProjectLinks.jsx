import Icon from "./Icon";

export default function ProjectLinks({ project, className }) {
  return (
    <div className={className}>
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener" aria-label={`GitHub ${project.title}`}>
          <Icon name="github" />
        </a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener" aria-label={`Demo ${project.title}`}>
          <Icon name="external" />
        </a>
      )}
    </div>
  );
}
