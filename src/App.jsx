import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import BackgroundShapes from "./components/BackgroundShapes";
import { useTheme } from "./hooks/useTheme";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <BackgroundShapes />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Resume />
      </main>
      <Footer />
    </>
  );
}

export default App;
