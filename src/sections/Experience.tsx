'use client';

import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-content scroll-mt-24 px-6 py-24 lg:py-28">
      <Reveal>
        <p className="eyebrow">Experience</p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Three internships, one throughline.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Cloud infra → production RAG → hybrid retrieval at scale. Each role pushed a real
            system closer to reliable.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 border-l border-hairline">
        {experience.map((role, i) => (
          <Reveal key={role.company} delay={i * 60}>
            <div className="relative grid gap-x-10 gap-y-4 pb-14 pl-6 last:pb-0 md:grid-cols-[9rem_1fr] md:pl-8">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-bg" />

              <div className="md:pt-0.5">
                <p className="tabular text-xs text-muted">{role.period}</p>
                <p className="tabular mt-1 text-xs text-muted">{role.location}</p>
              </div>

              <div>
                <h3 className="font-display text-xl font-medium text-ink">{role.role}</h3>
                <p className="mt-0.5 text-sm text-accent-strong">{role.company}</p>

                <ul className="mt-4 space-y-2.5">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <ArrowUpRight size={15} className="mt-0.5 shrink-0 text-accent-strong" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {role.tags.map((t) => (
                    <li key={t} className="tabular rounded border border-hairline px-2 py-0.5 text-[11px] text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
