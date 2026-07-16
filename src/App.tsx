import { Background } from './components/Background';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { OpenSource } from './components/OpenSource';
import { Blog } from './components/Blog';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';

function SectionDivider() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Nav />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <OpenSource />
        <SectionDivider />
        <Blog />
        <SectionDivider />
        <Credentials />
        <SectionDivider />
        <Contact />
      </main>
    </div>
  );
}

export default App;
