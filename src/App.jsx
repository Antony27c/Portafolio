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
  return (
    <>
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
