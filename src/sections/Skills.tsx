'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  Brain,
  Server,
  Database,
  BarChart3,
  Cloud,
  GitBranch,
  Terminal,
  Layers,
  Cpu,
  Box,
  Workflow,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Skill cloud implosion
      gsap.fromTo(
        cloudRef.current,
        { opacity: 0, scale: 1.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: cloudRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Individual skill tags
      const tags = cloudRef.current?.querySelectorAll('.skill-tag');
      if (tags) {
        gsap.fromTo(
          tags,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: cloudRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: '#00ff9d',
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
    },
    {
      title: 'AI & LLM',
      icon: Brain,
      color: '#0080ff',
      skills: ['RAG', 'Agentic AI', 'CrewAI', 'LangGraph', 'Embeddings', 'Prompt Engineering', 'LangChain', 'RAGAS', 'LLM Evaluation'],
    },
    {
      title: 'Backend',
      icon: Server,
      color: '#00ff9d',
      skills: ['FastAPI', 'REST APIs', 'Node.js', 'Microservices', 'Express'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: '#0080ff',
      skills: ['FAISS', 'Vector DBs', 'PostgreSQL', 'MongoDB', 'Pinecone'],
    },
    {
      title: 'ML & Data',
      icon: BarChart3,
      color: '#00ff9d',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Data Analysis', 'NLP'],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: '#0080ff',
      skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux'],
    },
  ];

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({
      name: skill,
      category: cat.title,
      color: cat.color,
    }))
  );

  // Generate random positions for floating effect
  const getRandomDelay = () => Math.random() * 6;
  const getRandomDuration = () => 4 + Math.random() * 4;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-24 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00ff9d] text-sm font-medium tracking-wider uppercase mb-4">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] text-white mb-6">
            What I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These are the tools and technologies I use to bring ideas to life. 
            Always learning, always experimenting.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="glass rounded-xl p-6 hover:translate-y-[-5px] transition-all duration-300 group"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                style={{ backgroundColor: `${category.color}15` }}
              >
                <category.icon
                  size={24}
                  style={{ color: category.color }}
                  className="group-hover:scale-110 transition-transform"
                />
              </div>

              <h3 className="text-lg font-semibold text-white mb-4 font-['Space_Grotesk']">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:border-[#00ff9d] hover:text-[#00ff9d] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Skill Cloud */}
        <div className="relative">
          <h3 className="text-center text-xl font-semibold text-white mb-8 font-['Space_Grotesk']">
            Skill <span className="text-[#00ff9d]">Constellation</span>
          </h3>

          <div
            ref={cloudRef}
            className="relative h-64 md:h-80 glass rounded-2xl overflow-hidden"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 255, 157, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 157, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            {/* Floating Skills */}
            <div className="relative w-full h-full">
              {allSkills.map((skill, i) => {
                // Simple scattered positioning
                const row = Math.floor(i / 5);
                const col = i % 5;
                const x = 15 + col * 18 + (Math.random() - 0.5) * 8;
                const y = 20 + row * 30 + (Math.random() - 0.5) * 10;

                return (
                  <div
                    key={i}
                    className="skill-tag absolute px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:scale-125 hover:z-10"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      backgroundColor: `${skill.color}20`,
                      border: `1px solid ${skill.color}40`,
                      color: skill.color,
                      animation: `skill-float ${getRandomDuration()}s ease-in-out infinite alternate`,
                      animationDelay: `${getRandomDelay()}s`,
                    }}
                  >
                    {skill.name}
                  </div>
                );
              })}
            </div>

            {/* Center Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00ff9d]/10 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-white mb-8 font-['Space_Grotesk']">
            Daily <span className="text-[#0080ff]">Tools</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Terminal, label: 'VS Code' },
              { icon: GitBranch, label: 'Git' },
              { icon: Box, label: 'Docker' },
              { icon: Cloud, label: 'AWS' },
              { icon: Database, label: 'MongoDB' },
              { icon: Layers, label: 'Postman' },
              { icon: Cpu, label: 'Jupyter' },
              { icon: Workflow, label: 'Linux' },
              { icon: Brain, label: 'OpenAI' },
              { icon: Server, label: 'FastAPI' },
            ].map((tool, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-4 glass rounded-xl hover:border-[#00ff9d]/30 transition-all duration-300 group"
              >
                <tool.icon
                  size={28}
                  className="text-gray-400 group-hover:text-[#00ff9d] transition-colors"
                />
                <span className="text-xs text-gray-500">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
