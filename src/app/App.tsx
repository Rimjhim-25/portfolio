import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground text-sm">
          © 2026 Rimjhim Mahata. All rights reserved.
        </p>
      </footer>
    </div>
  );
}