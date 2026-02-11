import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline grow down
      gsap.fromTo(
        timelineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Experience cards
      const cards = sectionRef.current?.querySelectorAll('.experience-card');
      if (cards) {
        cards.forEach((card, i) => {
          const direction = i % 2 === 0 ? -100 : 100;
          
          gsap.fromTo(
            card,
            { opacity: 0, x: direction },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }

      // Nodes pop in
      const nodes = sectionRef.current?.querySelectorAll('.timeline-node');
      if (nodes) {
        gsap.fromTo(
          nodes,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.4,
            stagger: 0.5,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: 'AI Chatbot Development Intern',
      company: 'Cloudily Scripts',
      location: 'Remote',
      period: 'Jun 2025 - Jul 2025',
      description: [
        'Built document-based AI chatbots using LLMs and NLP pipelines',
        'Implemented end-to-end RAG workflows (PDF ingestion → embeddings → vector search → LLM responses)',
        'Improved answer accuracy by grounding responses in retrieved context',
        'Dockerized chatbot services for reproducible deployment',
      ],
      tech: ['Python', 'LLMs', 'RAG', 'Docker', 'NLP'],
      color: '#00ff9d',
    },
    {
      title: 'Cloud Engineering Intern',
      company: 'IPtechhub',
      location: 'Remote',
      period: 'May 2024 - Jul 2024',
      description: [
        'Assisted in deploying containerized ML-backed services using AWS and Docker',
        'Automated deployment and testing workflows to support scalable inference',
        'Gained hands-on experience with cloud infrastructure and CI/CD pipelines',
      ],
      tech: ['AWS', 'Docker', 'CI/CD', 'ML Deployment'],
      color: '#0080ff',
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen py-24 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#00ff9d] text-sm font-medium tracking-wider uppercase mb-4">
            Work History
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] text-white">
            My <span className="text-gradient">Journey</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00ff9d] via-[#0080ff] to-[#00ff9d] origin-top hidden lg:block"
          >
            {/* Data Pulse */}
            <div
              ref={pulseRef}
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00ff9d] shadow-[0_0_20px_rgba(0,255,157,0.8)] timeline-pulse"
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  i % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Timeline Node */}
                <div className="timeline-node absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-[#00ff9d] hidden lg:block z-10">
                  <div className="absolute inset-0 rounded-full bg-[#00ff9d] animate-ping opacity-30" />
                </div>

                {/* Card */}
                <div
                  className={`experience-card glass rounded-2xl p-8 relative overflow-hidden group ${
                    i % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'
                  }`}
                >
                  {/* Accent Border */}
                  <div
                    className="absolute top-0 left-0 w-1 h-full"
                    style={{ backgroundColor: exp.color }}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-400">
                        <span className="flex items-center gap-1">
                          <Briefcase size={14} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-300">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: exp.color }}
                        />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-400 hover:border-[#00ff9d] hover:text-[#00ff9d] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${exp.color}10, transparent 70%)`,
                    }}
                  />
                </div>

                {/* Empty space for alternating layout */}
                {i % 2 === 0 ? (
                  <div className="hidden lg:block" />
                ) : (
                  <div className="hidden lg:block lg:col-start-1 lg:row-start-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
