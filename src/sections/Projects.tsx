'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import Reveal from '../components/Reveal';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-content scroll-mt-24 px-6 py-24 lg:py-28">
      <Reveal>
        <p className="eyebrow">Selected work</p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Things I&apos;ve shipped.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Seven public repos — RAG, agents, ML, and the eval harnesses that keep them honest.
            The first four have full case studies.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 60} className="flex">
            <article className="group relative flex w-full flex-col bg-surface p-6 transition-colors hover:bg-surface-2 sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl font-medium text-ink">
                  {p.featured ? (
                    <Link
                      href={`/work/${p.slug}`}
                      className="transition-colors after:absolute after:inset-0 group-hover:text-accent focus-visible:outline-none focus-visible:text-accent"
                    >
                      {p.title}
                    </Link>
                  ) : (
                    p.title
                  )}
                </h3>
                <span className="tabular shrink-0 text-xs text-muted">{p.year}</span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.tagline}</p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 5).map((t) => (
                  <li key={t} className="tabular rounded border border-hairline px-2 py-0.5 text-[11px] text-muted">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="relative z-10 mt-5 flex items-center gap-4 border-t border-hairline pt-4 text-sm">
                {p.featured && (
                  <Link
                    href={`/work/${p.slug}`}
                    className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-accent"
                  >
                    Case study
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
                <div className="ml-auto flex items-center gap-1">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} source on GitHub`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Github size={16} />
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} live demo`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={80}>
        <div className="mt-10 text-center">
          <a
            href="https://github.com/satyamshivam13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <Github size={16} />
            More on GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default Projects;
