export default function SideRails() {
  return (
    <>
      <aside className="side-rail side-left" aria-label="Redes">
        <a href="https://github.com/Antony27c" target="_blank" rel="noopener" aria-label="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/antonio-chocobar-19525341b/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/antony0.0_"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="mailto:antoniochocobar.sam@gmail.com" aria-label="Email">
          <i className="fa-regular fa-envelope"></i>
        </a>
      </aside>
      <aside className="side-rail side-right" aria-hidden="true">
        <a href="mailto:antoniochocobar.sam@gmail.com">antoniochocobar.sam@gmail.com</a>
      </aside>
    </>
  );
}
