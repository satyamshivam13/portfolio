export interface Role {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export const experience: Role[] = [
  {
    company: 'Asvix',
    role: 'AI Developer Intern',
    location: 'Remote',
    period: 'Jan 2026 — Apr 2026',
    bullets: [
      'Built the embedding pipeline for DigiLab, an AI chatbot on a LangChain + FAISS + Neo4j hybrid RAG stack — 500+ daily queries at 99.2% uptime.',
      'Cut hallucination rate from 18% to 11% with context-aware response modules and iterative prompt refinement.',
      'Lifted medical-query relevance 23% using tuned FAISS retrieval plus BM25 hybrid search.',
      'Wired in LLM evaluation metrics (faithfulness, context recall) to drive prompt iteration with data, not guesses.',
    ],
    tags: ['LangChain', 'FAISS', 'Neo4j', 'Hybrid RAG', 'LLM Eval'],
  },
  {
    company: 'Cloudily Scripts',
    role: 'AI Chatbot Development Intern',
    location: 'On-site',
    period: 'Jun 2025 — Jul 2025',
    bullets: [
      'Built a production RAG pipeline (FAISS IVF128, cross-encoder reranking, BM25 dense retrieval) over 100+ page PDFs at 91% accuracy — cut support tickets 35%.',
      'Cut query latency 79% (8.2s → 1.7s) with parallel embedding and semantic chunking.',
      'Dockerized the stack and shrank the image 60% (2.1 GB → 840 MB) for faster deploys.',
    ],
    tags: ['Python', 'RAG', 'FAISS', 'Docker', 'BM25'],
  },
  {
    company: 'IPtechhub',
    role: 'Cloud Engineering Intern',
    location: 'Remote',
    period: 'May 2024 — Jul 2024',
    bullets: [
      'Deployed containerized ML inference on AWS EC2 with auto-scaling — 500+ daily requests at 99.5% uptime, infra cost down 32%.',
      'Automated CI/CD with GitHub Actions: deploy time down 87.5% (2h → 15m), cold start from 45s to 8s.',
    ],
    tags: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions'],
  },
];
