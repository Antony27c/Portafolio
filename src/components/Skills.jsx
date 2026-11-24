import { useLanguage } from "../context/LanguageContext";
import { skillGroups } from "../data/skills";
import { brandIcons, fallbackIcons } from "../data/techIcons";
import Icon from "./Icon";

function luminance(hex) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function TechIcon({ name }) {
  const brand = brandIcons[name];
  if (!brand) return <Icon name={fallbackIcons[name] ?? "cpu"} className="chip-icon" />;
  const lum = luminance(brand.hex);
  const tone = lum < 0.25 ? " is-dark" : lum > 0.6 ? " is-bright" : "";
  return (
    <svg
      className={`chip-icon${tone}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ "--brand": `#${brand.hex}` }}
      aria-hidden="true"
      focusable="false"
    >
      <path d={brand.path} />
    </svg>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <div className="skill-groups">
      {skillGroups.map((group) => (
        <div key={group.key} className="skill-group">
          <h3>{t(group.key)}</h3>
          <ul className="chips">
            {group.items.map((item) => (
              <li key={item}>
                <TechIcon name={item} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
