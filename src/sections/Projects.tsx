'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.project-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, rotateX: 45, y: 80 },
          {
            opacity: 1,
            rotateX: 0,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const projects = [
    {
      title: 'Multi-Agent Campaign Creator',
      description: 'Advanced multi-agent AI system for creating marketing campaigns. LangGraph manages the state machine between agents. CrewAI handles each agent\'s execution.',
      image: '/project-rag.jpg',
      tech: ['Python', 'LangGraph', 'CrewAI', 'LLM', 'AI Orchestration'],
      github: 'https://github.com/satyamshivam13/Multi_Agent_Campaign_Creator',
      featured: true,
      color: '#00ff9d',
    },
    {
      title: 'RAG Pipeline',
      description: '4-agent pipeline: Retriever, Guardrail Agent, Generator, Evaluator. RAGAS evaluation harness measuring faithfulness, context recall, context precision. OpenTelemetry observability. Retry logic via tenacity. Dockerized. GitHub Actions CI.',
      image: '/project-rag.jpg',
      tech: ['LangChain', 'FAISS', 'FastAPI', 'Docker', 'Groq', 'RAGAS'],
      github: 'https://github.com/satyamshivam13/RAG_Pipeline',
      featured: true,
      color: '#0080ff',
    },
    {
      title: 'HybridAI Syntax Error Detection',
      description: 'Intelligent tool to detect and explain syntax errors using reasoning-driven LLM prompts. Helps developers understand and fix code issues faster.',
      image: '/project-syntax.jpg',
      tech: ['Python', 'LLM APIs', 'Code Analysis', 'Jupyter'],
      github: 'https://github.com/satyamshivam13/HybridAI_Syntax_Error_Detection',
      demo: 'https://omnisyntax.streamlit.app',
      featured: true,
      color: '#00ff9d',
    },
    {
      title: 'AI Text Detector',
      description: 'Production-deployed AI-generated text detection system with three Streamlit entry points. Dockerized for reproducible deployment with 44+ commits of iterative refinement.',
      image: '/project-plagiarism.jpg',
      tech: ['Python', 'Docker', 'Streamlit', 'NLP', 'LLM', 'Text Classification'],
      github: 'https://github.com/satyamshivam13/AI_Text_Detector',
      demo: 'https://plagarismdetector.streamlit.app',
      featured: true,
      color: '#0080ff',
    },
    {
      title: 'PDF RAG Chatbot',
      description: 'Production-style RAG system for answering questions from PDF documents. Built modular ingestion, retrieval, and response-generation pipelines.',
      image: '/project-rag.jpg',
      tech: ['Python', 'FAISS', 'Embeddings', 'LLM APIs'],
      github: 'https://github.com/satyamshivam13/PDF_RAG_Chatbot',
      featured: true,
      color: '#0080ff',
    },
    {
      title: 'Customer Churn Prediction',
      description: 'ML model for predicting customer retention. Analyzes customer behavior patterns to identify at-risk customers.',
      image: '/project-churn.jpg',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
      github: 'https://github.com/satyamshivam13/Customer_Churn_Prediction',
      featured: false,
      color: '#0080ff',
    },
    {
      title: 'House Price Prediction',
      description: 'Machine learning model for predicting real estate prices. Features a robust preprocessing pipeline and ensemble modeling approach.',
      image: '/project-house.jpg',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'ML', 'Jupyter'],
      github: 'https://github.com/satyamshivam13/House_Price_Prediction',
      featured: false,
      color: '#0080ff',
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-24 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00ff9d] text-sm font-medium tracking-wider uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] text-white mb-6">
            Things I've <span className="text-gradient">Built</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some projects I'm proud of. Each one taught me something new 
            about building practical AI solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: '1000px' }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className={`project-card glass rounded-2xl overflow-hidden group relative ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
              onMouseMove={(e) => handleMouseMove(e)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#00ff9d] text-[#0a0a0a] text-xs font-bold rounded-full flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    FEATURED
                  </div>
                )}

                {/* Hover Border */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 30px ${project.color}30`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-2 group-hover:text-[#00ff9d] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 text-xs rounded bg-white/5 text-gray-400 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo ?? project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={project.demo ? 'Live Demo' : 'View on GitHub'}
                    className="flex items-center justify-center w-10 h-10 bg-white/5 rounded-lg text-gray-300 hover:bg-[#00ff9d] hover:text-[#0a0a0a] transition-all duration-300"
                  >
                    {project.demo ? <span className="text-base">🚀</span> : <ExternalLink size={16} />}
                  </a>
                </div>
              </div>

              {/* Animated Border on Hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  border: `1px solid ${project.color}`,
                  boxShadow: `0 0 20px ${project.color}20`,
                }}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/satyamshivam13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-lg text-white hover:border-[#00ff9d] hover:text-[#00ff9d] transition-all duration-300 group"
          >
            <Github size={20} />
            View All Projects
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
