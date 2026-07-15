import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import ThemeToggle from '../../../src/components/ThemeToggle';
import { featuredProjects, getProject } from '../../../src/data/projects';

export function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Not found' };
  const title = `${project.title} — Case Study | Satyam Shivam`;
  return {
    title,
    description: project.tagline,
    openGraph: {
      title,
      description: project.tagline,
      url: `https://usersatyam.vercel.app/work/${project.slug}`,
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title, description: project.tagline },
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.caseStudy) notFound();
  const cs = project.caseStudy;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.tagline,
    codeRepository: project.github,
    programmingLanguage: project.tags.join(', '),
    author: { '@type': 'Person', name: 'Satyam Shivam' },
    ...(project.demo ? { url: project.demo } : {}),
  };

  return (
    <div className="relative min-h-screen bg-bg">
      <div className="pointer-events-none fixed inset-0 -z-10 dot-grid" aria-hidden="true" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="mx-auto flex max-w-content items-center justify-between px-6 py-5">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={15} />
          All work
        </Link>
        <ThemeToggle />
      </header>

      <article className="mx-auto max-w-3xl px-6 pb-24 pt-8">
        {/* Title block */}
        <p className="eyebrow">
          {project.year} · {project.tags.slice(0, 3).join(' · ')}
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-hairline px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink/40"
          >
            <Github size={15} /> Source
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-ink px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent"
            >
              Live demo <ArrowUpRight size={15} />
            </a>
          )}
        </div>

        {/* Results ledger */}
        <figure className="mt-12 overflow-hidden rounded-xl border border-hairline bg-surface">
          <figcaption className="border-b border-hairline px-5 py-3">
            <span className="eyebrow !text-muted">Results</span>
          </figcaption>
          <dl className="grid grid-cols-2 divide-hairline sm:grid-cols-4 sm:divide-x">
            {cs.results.map((r) => (
              <div key={r.label} className="border-b border-hairline px-5 py-4 sm:border-b-0">
                <dd className="tabular text-xl font-medium text-ink">{r.value}</dd>
                <dt className="mt-1 text-xs leading-snug text-muted">{r.label}</dt>
              </div>
            ))}
          </dl>
        </figure>

        {/* Problem */}
        <Section label="Problem">
          <p className="text-base leading-relaxed text-muted">{cs.problem}</p>
        </Section>

        {/* Approach */}
        <Section label="Approach">
          <ul className="space-y-3">
            {cs.approach.map((a, i) => (
              <li key={i} className="flex gap-3 text-base leading-relaxed text-muted">
                <span className="tabular mt-0.5 shrink-0 text-sm text-accent-strong">{String(i + 1).padStart(2, '0')}</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Architecture */}
        <Section label="Architecture">
          <ol className="relative ml-2 space-y-0 border-l border-hairline">
            {cs.architecture.map((step, i) => (
              <li key={i} className="relative py-2.5 pl-6">
                <span className="absolute -left-[5px] top-4 h-2.5 w-2.5 rounded-full border border-accent bg-bg" />
                <span className="tabular text-sm text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </Section>

        {/* Challenges */}
        <Section label="Challenges">
          <ul className="space-y-3">
            {cs.challenges.map((c, i) => (
              <li key={i} className="flex gap-3 text-base leading-relaxed text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Features */}
        <Section label="Key features">
          <ul className="grid gap-2 sm:grid-cols-2">
            {cs.features.map((f, i) => (
              <li key={i} className="rounded-md border border-hairline bg-surface px-3 py-2.5 text-sm text-ink">
                {f}
              </li>
            ))}
          </ul>
        </Section>

        {cs.note && (
          <p className="mt-10 rounded-md border border-hairline bg-surface-2 px-4 py-3 text-sm italic text-muted">
            {cs.note}
          </p>
        )}

        <div className="mt-14 border-t border-hairline pt-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent">
            <ArrowLeft size={15} /> Back to all work
          </Link>
        </div>
      </article>
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="eyebrow !text-accent-strong">{label}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
