export interface Metric {
  label: string;
  value: string;
}

export interface CaseStudy {
  problem: string;
  approach: string[];
  architecture: string[];
  challenges: string[];
  results: Metric[];
  features: string[];
  note?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  tags: string[];
  github: string;
  demo?: string;
  /** Featured projects get a dedicated /work/[slug] case study. */
  featured: boolean;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    slug: 'rag-pipeline',
    title: 'RAG Pipeline',
    tagline: 'Production RAG with a guardrail gate, an evaluator agent, and a reproducible RAGAS harness.',
    year: '2025',
    tags: ['Python', 'FastAPI', 'FAISS', 'RAGAS', 'OpenTelemetry', 'Docker'],
    github: 'https://github.com/satyamshivam13/RAG_Pipeline',
    featured: true,
    caseStudy: {
      problem:
        'LLMs hallucinate when they answer from parametric memory. This pipeline grounds every answer in retrieved evidence and makes quality measurable instead of asserted — quality gates, not vibes.',
      approach: [
        'Token-aware overlapping chunking → bge-large-en-v1.5 embeddings → FAISS index with MMR diversity re-ranking.',
        'A guardrail gate screens retrieved context before generation; an evaluator agent scores answer consistency after.',
        'A RAGAS harness runs against a fixed 22-sample grounded dataset so faithfulness/recall checks are reproducible.',
        'OpenTelemetry traces, metrics, and logs cover the whole request path.',
      ],
      architecture: [
        'Documents → token-aware chunker',
        'Embedder · bge-large-en-v1.5',
        'FAISS index + MMR re-ranking',
        'Guardrail gate',
        'Generator · Groq llama-3.3-70b',
        'Evaluator agent → scored answer',
      ],
      challenges: [
        'Keeping evaluation honest — the RAGAS run is a fixed, reproducible harness rather than a cherry-picked number.',
        'Containerizing a heavy embedding stack with multi-stage builds and non-root execution.',
      ],
      results: [
        { label: 'Mean latency · n=22', value: '~9.3s' },
        { label: 'p95 latency', value: '~12.5s' },
        { label: 'Docker /health', value: 'passing' },
        { label: 'Eval dataset', value: '22 grounded' },
      ],
      features: [
        'Guardrail + evaluator agent gates around generation',
        'MMR diversity re-ranking over FAISS',
        'OpenTelemetry structured observability',
        'FastAPI service: /health, /query, streaming',
        'Docker multi-stage, non-root deployment',
      ],
      note: 'Latency reflects sync-evaluator mode on a free Groq tier — the evaluator gate deliberately trades speed for a consistency score.',
    },
  },
  {
    slug: 'hybridai-syntax',
    title: 'OmniSyntax — Hybrid Syntax Detection',
    tagline: 'Dual-mode syntax error detection across 5 languages: AST rules first, gradient boosting for the rest.',
    year: '2025',
    tags: ['Python', 'scikit-learn', 'AST', 'FastAPI', 'Streamlit'],
    github: 'https://github.com/satyamshivam13/HybridAI_Syntax_Error_Detection',
    demo: 'https://omnisyntax.streamlit.app',
    featured: true,
    caseStudy: {
      problem:
        'Rule-based linters miss fuzzy errors; pure ML is opaque and fails silently. OmniSyntax runs deterministic AST checks first, falls back to a trained classifier for the rest, and degrades gracefully to rules-only when the model can’t load.',
      approach: [
        'Deterministic static analysis + AST parsing as the first pass.',
        'TF-IDF features → gradient boosting classifier for cases the rules miss.',
        'Metadata-aware compatibility control with an explicit "degraded mode" when the ML artifact is missing or incompatible.',
        'Auto-fix suggestions with tutor-style explanations.',
      ],
      architecture: [
        'Source → AST / rule layer',
        'TF-IDF + Gradient Boosting classifier',
        'Compatibility / degradation guard',
        'FastAPI · Streamlit · CLI entry points',
      ],
      challenges: [
        'Graceful degradation: the service stays useful (rules-only) if the ML model is absent or incompatible.',
        'Validating across five language grammars with 193 tests plus adversarial cases.',
      ],
      results: [
        { label: 'Accuracy · 61,580 samples', value: '94.18%' },
        { label: "Cohen's κ", value: '0.79' },
        { label: 'Median inference', value: '0.99 ms' },
        { label: 'Tests', value: '193 passing' },
      ],
      features: [
        'Per-language: JS 97.1% · C 94.4% · Java 94.2% · Py 93.6% · C++ 91.7%',
        '0.0% false-positive rate on clean code',
        'Graceful "degraded mode" fallback to rules-only',
        'Auto-fix suggestions with explanations',
        'FastAPI REST + Streamlit UI + CLI',
      ],
      note: 'Co-authored research; being prepared for IEEE submission.',
    },
  },
  {
    slug: 'multi-agent-campaign',
    title: 'Multi-Agent Campaign Creator',
    tagline: 'Four specialized agents turn one product brief into a full campaign — CrewAI execution, LangGraph control flow.',
    year: '2025',
    tags: ['Python', 'CrewAI', 'LangGraph', 'Groq', 'Pydantic'],
    github: 'https://github.com/satyamshivam13/Multi_Agent_Campaign_Creator',
    featured: true,
    caseStudy: {
      problem:
        'Campaign creation is manual and serial — research, copy, art direction, strategy. This automates the whole chain from a single product description, with clean failure routing between stages.',
      approach: [
        'Agent pipeline: Research → Copywriter → Art Director → Manager, each passing context forward.',
        'CrewAI runs the agents; LangGraph optionally owns control flow with conditional success/failure edges.',
        'Role-specific temperature per agent; multi-format Markdown + JSON output.',
        'Free-tier Groq routing with auto-retry for rate limits.',
      ],
      architecture: [
        'Product brief → Research agent',
        'Copywriter agent',
        'Art Director agent',
        'Manager → synthesized campaign (MD / JSON)',
      ],
      challenges: [
        'Clean failure routing via LangGraph conditional edges instead of a brittle linear chain.',
        'Staying inside free-tier rate limits with auto-retry and backoff.',
      ],
      results: [
        { label: 'Agents', value: '4 sequential' },
        { label: 'Test coverage', value: '74% · 25 tests' },
        { label: 'Output', value: 'research → copy → visuals → KPIs' },
        { label: 'Plan horizon', value: '30-day' },
      ],
      features: [
        'CrewAI + optional LangGraph orchestration',
        'Conditional success/failure edge routing',
        'Multi-format Markdown + JSON briefs',
        'Interactive and demo modes',
        'GitHub Actions CI',
      ],
    },
  },
  {
    slug: 'llm-judge',
    title: 'LLM Judge Evaluation',
    tagline: 'LLM-as-judge that treats position, verbosity, and self-enhancement bias as first-class problems.',
    year: '2025',
    tags: ['Python', 'FastAPI', 'SQLAlchemy', 'OpenAI', 'Anthropic', 'Docker'],
    github: 'https://github.com/satyamshivam13/LLM_Judge_Evaluation',
    featured: true,
    caseStudy: {
      problem:
        'Naive LLM judges are unreliable: they favor the first answer, reward verbosity, and prefer their own model family. This framework measures and mitigates those biases instead of ignoring them.',
      approach: [
        'Four modes: pointwise scoring, pairwise A/B, reference-based, and concurrent batch.',
        'Bias mitigation: position swapping, verbosity detection, self-enhancement warnings.',
        'YAML-driven weighted multi-dimensional rubrics; dual-provider routing across OpenAI + Anthropic.',
        'SQLAlchemy storage persists token/USD/latency/confidence for real cost analytics.',
      ],
      architecture: [
        'Prompt → judge_engine orchestration',
        'Bias pass · swap / verbosity / self-enh',
        'Rubric manager · YAML weighted',
        'SQLite analytics store',
      ],
      challenges: [
        'Making bias measurable — position-swap agreement as a signal, not a vibe.',
        'Accurate per-call cost accounting across two providers.',
      ],
      results: [
        { label: 'Methods', value: 'MT-Bench · G-Eval · Prometheus' },
        { label: 'Bias checks', value: '3 systematic' },
        { label: 'Interfaces', value: 'REST · Streamlit · SDK' },
        { label: 'Rubric templates', value: '4 ready-made' },
      ],
      features: [
        'Research-backed methods (MT-Bench, G-Eval, Prometheus)',
        'Position / verbosity / self-enhancement bias mitigation',
        'Dual-provider routing (OpenAI + Anthropic)',
        'YAML weighted rubrics',
        'Cost + latency tracking persisted for analytics',
      ],
    },
  },
  {
    slug: 'ai-text-detector',
    title: 'AI Text Detector',
    tagline: 'Production-deployed AI-generated text detection with three Streamlit entry points, Dockerized.',
    year: '2025',
    tags: ['Python', 'Docker', 'Streamlit', 'NLP', 'Text Classification'],
    github: 'https://github.com/satyamshivam13/AI_Text_Detector',
    demo: 'https://plagarismdetector.streamlit.app',
    featured: false,
  },
  {
    slug: 'pdf-rag-chatbot',
    title: 'PDF RAG Chatbot',
    tagline: 'Modular RAG over PDF documents — separate ingestion, retrieval, and response pipelines.',
    year: '2025',
    tags: ['Python', 'FAISS', 'Embeddings', 'LLM APIs'],
    github: 'https://github.com/satyamshivam13/PDF_RAG_Chatbot',
    demo: 'https://pdfragchatbot-01.streamlit.app',
    featured: false,
  },
  {
    slug: 'customer-churn',
    title: 'Customer Churn MLOps',
    tagline: 'End-to-end MLOps: a 3-model benchmark served via FastAPI with data-drift monitoring.',
    year: '2024',
    tags: ['XGBoost', 'FastAPI', 'Docker', 'scikit-learn', 'Monitoring'],
    github: 'https://github.com/satyamshivam13/Customer_Churn_Prediction',
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
