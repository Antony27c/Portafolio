import { skills } from "../data/skills";

export default function Skills() {
  return (
    <ul className="tech-list">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
