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
    year: '2026',
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
    year: '2026',
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
    year: '2026',
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
    slug: 'lora-medical-finetune',
    title: 'LoRA Medical QA Fine-Tune',
    tagline: 'Parameter-efficient fine-tuning of Llama 3.2 1B for medical Q&A on a single free T4 GPU.',
    year: '2026',
    tags: ['Python', 'PyTorch', 'PEFT / LoRA', 'Transformers', 'HuggingFace'],
    github: 'https://github.com/satyamshivam13/LoRA_Medical_QA_Finetune',
    featured: true,
    caseStudy: {
      problem:
        'Full fine-tuning is out of reach on consumer hardware, and most "fine-tune" demos hide the honest before/after. This is a complete, reproducible PEFT workflow — data prep with loss masking through baseline-vs-tuned evaluation — proving a 1B model can adapt to a domain on a single free GPU.',
      approach: [
        'LoRA adapters on Llama 3.2 1B Instruct — ~11M trainable params, under 1% of the model.',
        'MedQuAD (NIH medical Q&A), with loss masking so only answer tokens contribute to the loss.',
        'T4-optimized: fp16, gradient checkpointing, and accumulation — 2 epochs in ~1h45m on one Kaggle T4.',
        'Config-driven scripts: baseline → train → eval → plot → infer, with fixed seeds and splits.',
      ],
      architecture: [
        'MedQuAD → preprocessing + loss masking',
        'Llama 3.2 1B Instruct (frozen base)',
        'LoRA adapters · ~11M params (<1%)',
        'fp16 + grad checkpointing on a T4',
        'Baseline vs. tuned evaluation',
      ],
      challenges: [
        'Fitting training into 16 GB — fp16, checkpointing, and accumulation instead of a bigger batch.',
        'Staying honest that gains are largely style/format adaptation, not clinical expertise.',
      ],
      results: [
        { label: 'Eval loss', value: '2.28 → 1.08' },
        { label: 'Δ eval loss', value: '−52.6%' },
        { label: 'Perplexity', value: '9.77 → 2.94' },
        { label: 'Trainable params', value: '~11M (<1%)' },
      ],
      features: [
        'LoRA PEFT on Llama 3.2 1B Instruct',
        'MedQuAD with answer-only loss masking',
        'Config-driven, reproducible seeds and splits',
        'Unit + smoke tests',
        'Before/after side-by-side sample comparisons',
      ],
      note: 'The README is explicit that improvement reflects style/format adaptation, not clinical expertise — included here because honest evaluation is the point.',
    },
  },
  {
    slug: 'ai-text-detector',
    title: 'AI Text Detector',
    tagline: 'Explainable AI-text detection on Binoculars cross-perplexity — 100% AUROC on HC3, with a fairness audit.',
    year: '2026',
    tags: ['Python', 'PyTorch', 'Transformers', 'Streamlit', 'Docker'],
    github: 'https://github.com/satyamshivam13/AI_Text_Detector',
    demo: 'https://plagarismdetector.streamlit.app',
    featured: true,
    caseStudy: {
      problem:
        'Single-model perplexity detectors are both inaccurate and unfair — GPT-2 alone flags ~50% of human text as AI and penalizes non-native English writers at up to 26× the rate of native speakers. This tool uses multiple signals, shows its reasoning, and measures fairness explicitly.',
      approach: [
        'Binoculars cross-perplexity (gpt2 + distilgpt2) cancels topic bias for the primary verdict.',
        'GPT-2 perplexity and NLTK n-gram signals provide transparent secondary evidence.',
        'Ensemble mode returns a structured verdict: confidence, per-signal metrics, and narrative reasoning.',
        'Local-first — no required external APIs; Dockerized for reproducibility.',
      ],
      architecture: [
        'Text input',
        'Binoculars · gpt2 + distilgpt2 cross-perplexity',
        'GPT-2 perplexity + NLTK n-gram signals',
        'Ensemble verdict + reasoning',
        'Streamlit UI · Dockerized',
      ],
      challenges: [
        'Fairness: measuring and reporting false-positive rates by population, not just headline accuracy.',
        'Explaining a probabilistic verdict instead of emitting an opaque score.',
      ],
      results: [
        { label: 'Binoculars accuracy', value: '100%' },
        { label: 'AUROC', value: '1.000' },
        { label: 'Non-native FPR', value: '5.5%' },
        { label: 'vs. GPT-2 alone', value: '75% acc' },
      ],
      features: [
        'Binoculars cross-perplexity detection',
        'Per-population fairness evaluation',
        'Structured verdict + narrative reasoning',
        'Local-first, no external APIs required',
        'HC3 reproducibility as a test gate',
      ],
      note: 'Metrics are on the HC3 benchmark (n=200 balanced); the README documents its limits and ethical constraints.',
    },
  },
  {
    slug: 'customer-churn',
    title: 'Customer Churn MLOps',
    tagline: 'End-to-end MLOps: a 3-model benchmark served via FastAPI with data-drift monitoring.',
    year: '2025',
    tags: ['XGBoost', 'FastAPI', 'Docker', 'scikit-learn', 'Monitoring'],
    github: 'https://github.com/satyamshivam13/Customer_Churn_Prediction',
    featured: true,
    caseStudy: {
      problem:
        'Banks lose revenue to churn they could pre-empt. This predicts which of 10,000 customers are likely to leave, with confidence scores, and ships it as a monitored, containerized service — not a notebook.',
      approach: [
        'Feature engineering: tenure/age grouping, balance-to-salary ratio, and engagement scoring.',
        'Benchmarked Logistic Regression, Random Forest, and XGBoost; all serialized and switchable via the API.',
        'FastAPI single + batch endpoints with preprocessing baked in.',
        'Custom drift detection logs predictions (JSONL) and compares live data to the training distribution.',
      ],
      architecture: [
        'Raw CSV → clean → feature engineering → scale',
        'Train LR / RF / XGBoost (benchmarked)',
        'FastAPI single + batch inference',
        'Drift monitor vs. training distribution',
        'Docker Compose deployment',
      ],
      challenges: [
        'Serving three switchable models behind one API with consistent preprocessing.',
        'Detecting drift without a heavyweight platform — comparing live distributions to training.',
      ],
      results: [
        { label: 'XGBoost ROC-AUC', value: '0.855' },
        { label: 'Random Forest ROC-AUC', value: '0.858' },
        { label: 'XGBoost accuracy', value: '0.868' },
        { label: 'Dataset', value: '10,000 rows' },
      ],
      features: [
        '3-model benchmark, switchable via API',
        'Single + batch inference endpoints',
        'Custom data-drift monitoring (JSONL logs)',
        'Feature-engineering pipeline',
        'Docker Compose + GitHub Actions CI',
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
