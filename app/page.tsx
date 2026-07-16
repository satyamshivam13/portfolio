import Navigation from '../src/components/Navigation';
import Hero from '../src/sections/Hero';
import Projects from '../src/sections/Projects';
import Experience from '../src/sections/Experience';
import About from '../src/sections/About';
import Skills from '../src/sections/Skills';
import Contact from '../src/sections/Contact';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:border focus:border-hairline focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 -z-10 dot-grid" aria-hidden="true" />

      <Navigation />

      <main id="main" className="relative">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
