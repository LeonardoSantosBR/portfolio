import "./App.css";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { AiManifesto } from "@/components/sections/AiManifesto";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Experience />
        <Projects />
        <AiManifesto />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
