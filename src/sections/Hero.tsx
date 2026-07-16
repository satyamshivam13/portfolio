import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const results = [
  { metric: 'RAG query latency', from: '8.2s', to: '1.7s', delta: '−79%', where: 'Cloudily Scripts' },
  { metric: 'Hallucination rate', from: '18%', to: '11%', delta: '−39%', where: 'Asvix · DigiLab' },
  { metric: 'Deploy time', from: '2h', to: '15m', delta: '−87%', where: 'IPtechhub' },
  { metric: 'Uptime · 500+ daily queries', from: null, to: '99.2%', delta: 'SLA', where: 'Asvix · DigiLab' },
];

/**
 * Above-the-fold: renders immediately at full opacity. Deliberately NOT wrapped
 * in <Reveal> — gating the LCP element behind JS hydration + IntersectionObserver
 * delays first paint of the most important content on the page.
 */
const Hero = () => {
  return (
    <section className="relative mx-auto max-w-content px-6 pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: thesis */}
        <div className="lg:col-span-7">
          <p className="eyebrow">Satyam · AI/ML Engineer</p>

          <h1 className="mt-5 font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
            I turn AI demos into systems people actually use.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I build RAG pipelines, multi-agent systems, and the evaluation harnesses that keep
            them honest — end to end, from embedding pipeline to Dockerized API. Three internships
            spent closing the gap between a notebook and a 99% uptime deployment.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              View selected work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-hairline px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Résumé
              <ArrowUpRight size={15} />
            </a>

            <div className="ml-1 flex items-center gap-1">
              {[
                { Icon: Github, href: 'https://github.com/satyamshivam13', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/satyam-shivam-ai/', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:shivamsatyam35@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: results ledger — the signature */}
        <div className="lg:col-span-5">
          <figure className="overflow-hidden rounded-xl border border-hairline bg-surface">
            <figcaption className="flex items-center justify-between border-b border-hairline px-5 py-3.5">
              <span className="eyebrow !text-muted">Selected results · production</span>
              <span className="tabular text-xs text-muted">n = 3 internships</span>
            </figcaption>

            <dl className="divide-y divide-hairline">
              {results.map((r) => (
                <div key={r.metric} className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 px-5 py-4">
                  <dt className="text-sm text-ink">
                    {r.metric}
                    <span className="mt-0.5 block text-xs text-muted">{r.where}</span>
                  </dt>
                  <dd className="flex items-baseline justify-end gap-3">
                    <span className="tabular text-sm text-muted">
                      {r.from ? (
                        <>
                          {r.from} <span className="text-muted/60">→</span> {r.to}
                        </>
                      ) : (
                        r.to
                      )}
                    </span>
                    <span className="tabular w-14 text-right text-sm font-medium text-accent-strong">
                      {r.delta}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </figure>

          <p className="mt-3 px-1 text-xs text-muted">
            Real numbers from shipped work — not vanity metrics. Details in{' '}
            <a href="#experience" className="text-ink underline decoration-hairline underline-offset-4 hover:decoration-accent">
              experience
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
