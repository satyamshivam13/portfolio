import Reveal from '../components/Reveal';

const stack: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL'] },
  {
    group: 'AI & LLM',
    items: ['RAG', 'Agentic AI', 'LangChain', 'LangGraph', 'CrewAI', 'Embeddings', 'RAGAS', 'LLM Evaluation', 'Prompt Engineering'],
  },
  { group: 'Backend', items: ['FastAPI', 'REST APIs', 'Node.js', 'Microservices'] },
  { group: 'Data & ML', items: ['scikit-learn', 'Pandas', 'NumPy', 'XGBoost', 'NLP'] },
  { group: 'Vector & DB', items: ['FAISS', 'Pinecone', 'PostgreSQL', 'MongoDB', 'Neo4j'] },
  { group: 'DevOps & Cloud', items: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'OpenTelemetry', 'Linux'] },
];

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-content scroll-mt-24 px-6 py-24 lg:py-28">
      <Reveal>
        <p className="eyebrow">Stack</p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            What I work with.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Tools I&apos;ve shipped to production — not a wishlist. Depth in the AI/LLM and backend
            rows.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 overflow-hidden rounded-xl border border-hairline bg-surface">
        {stack.map((row, i) => (
          <Reveal key={row.group} delay={(i % 3) * 50}>
            <div
              className={`grid gap-4 px-5 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:px-7 ${
                i !== 0 ? 'border-t border-hairline' : ''
              }`}
            >
              <p className="eyebrow !text-accent-strong sm:pt-1">{row.group}</p>
              <ul className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <li
                    key={item}
                    className="tabular rounded-md border border-hairline px-2.5 py-1 text-xs text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
