import { EMAIL } from "../data/social";
import SocialLinks from "./SocialLinks";

export default function SideRails() {
  return (
    <>
      <aside className="side-rail side-left" aria-label="Redes">
        <SocialLinks className="side-rail-links" />
      </aside>
      <aside className="side-rail side-right" aria-hidden="true">
        <a href={`mailto:${EMAIL}`} tabIndex={-1}>{EMAIL}</a>
      </aside>
    </>
  );
}
