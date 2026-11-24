import { socials } from "../data/social";
import Icon from "./Icon";

export default function SocialLinks({ className, onClick }) {
  return (
    <div className={className}>
      {socials.map(({ icon, label, href }) => (
        <a
          key={icon}
          href={href}
          aria-label={label}
          onClick={onClick}
          {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
        >
          <Icon name={icon} />
        </a>
      ))}
    </div>
  );
}
