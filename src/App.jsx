import { useEffect } from "react";
import AOS from "aos";
import { useLanguage } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import SideRails from "./components/SideRails";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import OtherProjects from "./components/OtherProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { t } = useLanguage();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
      disable: reduceMotion,
    });
  }, []);

  return (
    <>
      <a className="skip-link" href="#inicio">
        {t("skip")}
      </a>
      <Navbar />
      <SideRails />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <OtherProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
