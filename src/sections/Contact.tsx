'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import Reveal from '../components/Reveal';

const EMAIL = 'shivamsatyam35@gmail.com';

const socials = [
  { name: 'GitHub', handle: '@satyamshivam13', href: 'https://github.com/satyamshivam13', Icon: Github },
  { name: 'LinkedIn', handle: '/in/usersatyam', href: 'https://www.linkedin.com/in/usersatyam/', Icon: Linkedin },
  { name: 'Email', handle: EMAIL, href: `mailto:${EMAIL}`, Icon: Mail },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-content scroll-mt-24 px-6 py-24 lg:py-28">
      <Reveal>
        <div className="rounded-2xl border border-hairline bg-surface p-8 sm:p-12">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            Let&apos;s build something that survives production.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Open to full-time AI/ML roles and freelance work — remote or global. If you&apos;re
            hiring for RAG, agents, or eval-heavy systems, I&apos;d like to hear about it.
          </p>

          {/* Email row */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${EMAIL}`}
              className="tabular text-lg text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-accent sm:text-xl"
            >
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={copy}
              aria-label="Copy email address"
              className="inline-flex w-fit items-center gap-1.5 rounded-md border border-hairline px-3 py-1.5 text-xs text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          {/* Socials */}
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-3">
            {socials.map(({ name, handle, href, Icon }) => (
              <a
                key={name}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between gap-3 bg-surface px-4 py-4 transition-colors hover:bg-surface-2"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} className="text-muted transition-colors group-hover:text-ink" />
                  <span>
                    <span className="block text-sm text-ink">{name}</span>
                    <span className="tabular block text-xs text-muted">{handle}</span>
                  </span>
                </span>
                <ArrowUpRight size={16} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            <p className="text-sm text-muted">
              Currently open to opportunities — usually reply within a day.
            </p>
          </div>
        </div>
      </Reveal>

      <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-hairline pt-8 text-xs text-muted sm:flex-row">
        <p className="tabular">© {new Date().getFullYear()} Satyam Shivam</p>
        <p className="tabular">Next.js · TypeScript · Tailwind · deployed on Vercel</p>
      </footer>
    </section>
  );
};

export default Contact;
