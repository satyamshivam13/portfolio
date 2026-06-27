import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../src/index.css';

export const metadata: Metadata = {
  title: 'Satyam Shivam - AI/ML Engineer | Portfolio',
  description:
    'AI/ML Engineer specializing in LLM systems, RAG pipelines, and backend architecture. Explore my projects in multi-agent systems, machine learning, and AI applications.',
  keywords: ['AI Engineer', 'Machine Learning', 'LLM', 'RAG', 'Python', 'Multi-Agent Systems', 'Satyam Shivam'],
  authors: [{ name: 'Satyam Shivam' }],
  robots: 'index, follow',
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

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Satyam Shivam',
  jobTitle: 'AI Engineer',
  url: 'https://usersatyam.vercel.app',
  sameAs: ['https://github.com/satyamshivam13', 'https://www.linkedin.com/in/usersatyam/'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#00ff9d" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
