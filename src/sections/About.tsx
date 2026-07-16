import Reveal from '../components/Reveal';

const facts: { k: string; v: string }[] = [
  { k: 'Education', v: 'B.Tech, AI & ML — United Institute of Technology (2026)' },
  { k: 'Focus', v: 'RAG · multi-agent systems · LLM evaluation' },
  { k: 'Research', v: 'Hybrid syntax detection — IEEE submission in prep' },
  { k: 'Based', v: 'India · open to remote / global' },
  { k: 'Languages', v: 'Python, SQL · English, Hindi' },
];

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-content scroll-mt-24 px-6 py-24 lg:py-28">
      <Reveal>
        <p className="eyebrow">About</p>
        <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          The short version.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted">
          <p>
            I build AI systems that ship. Three internships taught me what the gap between a working
            demo and a real deployment actually looks like — retrieval that grounds answers, evals
            that catch regressions, and Docker images small enough to deploy.
          </p>
          <p>
            At <span className="text-ink">Asvix</span> I built the RAG pipeline behind DigiLab, an
            educational chatbot handling 500+ daily queries. At{' '}
            <span className="text-ink">Cloudily Scripts</span> I cut query latency from 8.2s to 1.7s
            on a live PDF RAG system. At <span className="text-ink">IPtechhub</span> I automated
            deployments from two hours to fifteen minutes.
          </p>
          <p>
            I also co-authored research on hybrid syntax detection — AST parsing plus a
            gradient-boosting classifier across five languages, now being prepared for IEEE
            submission.
          </p>
          <p className="text-ink">
            My approach is boring on purpose: make it simple, make it work, then make it better.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <dl className="overflow-hidden rounded-xl border border-hairline bg-surface">
            {facts.map((f, i) => (
              <div
                key={f.k}
                className={`px-5 py-4 ${i !== 0 ? 'border-t border-hairline' : ''}`}
              >
                <dt className="eyebrow !text-muted">{f.k}</dt>
                <dd className="mt-1.5 text-sm leading-snug text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
