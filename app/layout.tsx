import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '../src/components/ThemeProvider';
import '../src/index.css';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://usersatyam.vercel.app'),
  title: 'Satyam Shivam - AI/ML Engineer | Portfolio',
  description:
    'AI/ML Engineer specializing in LLM systems, RAG pipelines, and backend architecture. Explore my projects in multi-agent systems, machine learning, and AI applications.',
  keywords: ['AI Engineer', 'Machine Learning', 'LLM', 'RAG', 'Python', 'Multi-Agent Systems', 'Satyam Shivam'],
  authors: [{ name: 'Satyam Shivam' }],
  robots: 'index, follow',
  verification: {
    google: 'PA6O9rx25GJKqBxQPfG4FsOanshkS4UTPiXCMP19eJY',
  },
  openGraph: {
    type: 'website',
    url: 'https://usersatyam.vercel.app/',
    title: 'Satyam Shivam - AI/ML Engineer | Portfolio',
    description:
      'AI/ML Engineer specializing in LLM systems, RAG pipelines, and backend architecture. Check out my latest projects in multi-agent systems and AI applications.',
    images: [{ url: 'https://usersatyam.vercel.app/profile.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satyam Shivam - AI/ML Engineer | Portfolio',
    description:
      'AI/ML Engineer specializing in LLM systems, RAG pipelines, and backend architecture. Explore my projects and experience.',
    images: ['https://usersatyam.vercel.app/profile.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF7' },
    { media: '(prefers-color-scheme: dark)', color: '#0C0C0D' },
  ],
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Satyam Shivam',
  jobTitle: 'AI Engineer',
  url: 'https://usersatyam.vercel.app',
  sameAs: ['https://github.com/satyamshivam13', 'https://www.linkedin.com/in/satyam-shivam-ai/'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-screen bg-bg font-sans text-ink antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
