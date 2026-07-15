'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-hairline bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4" aria-label="Primary">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-mono text-sm font-medium tracking-tight text-ink transition-colors hover:text-accent"
        >
          satyam<span className="text-accent-strong">.</span>shivam
        </a>

        <div className="flex items-center gap-1">
          <ul className="mr-1 hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => go(item.href)}
                  className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-hairline text-ink md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-hairline bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto flex max-w-content flex-col px-6 py-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => go(item.href)}
                  className="w-full rounded-md px-2 py-3 text-left text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
