import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Languages, Cpu, Code2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading glitch reveal
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Summary word stagger
      gsap.fromTo(
        summaryRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: summaryRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards 3D flip in
      const cards = cardsRef.current?.querySelectorAll('.info-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, rotateX: 45, y: 50 },
          {
            opacity: 1,
            rotateX: 0,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const infoCards = [
    {
      icon: GraduationCap,
      title: 'Education',
      content: 'B.Tech AI & ML',
      subcontent: 'United Institute of Technology',
      detail: 'Graduating 2026',
      color: '#00ff9d',
    },
    {
      icon: Languages,
      title: 'Languages',
      content: 'Python, SQL',
      subcontent: 'English, Hindi',
      detail: 'Fluent in all',
      color: '#0080ff',
    },
    {
      icon: Cpu,
      title: 'Focus',
      content: 'LLM Systems',
      subcontent: 'RAG Pipelines',
      detail: 'Backend Architecture',
      color: '#00ff9d',
    },
    {
      icon: Code2,
      title: 'Approach',
      content: 'Full Lifecycle',
      subcontent: 'Scalable Solutions',
      detail: 'Production Ready',
      color: '#0080ff',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-24 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[#00ff9d] text-sm font-medium tracking-wider uppercase mb-4">
            About Me
          </p>
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] text-white"
          >
            Who I <span className="text-gradient">Am</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Summary */}
          <div ref={summaryRef}>
            <div className="glass rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              {/* Decorative Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ff9d] to-[#0080ff]" />
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm currently studying <span className="text-[#00ff9d] font-medium">AI and ML</span>, but most of my learning 
                happens outside the classroom—building real projects. I love working with LLMs, 
                creating RAG systems, and figuring out how to make AI actually useful.
              </p>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                My approach? Keep it simple, make it work, then make it better. Whether it's a chatbot 
                or a full backend pipeline, I focus on building things people can actually use.
              </p>

              <div className="flex flex-wrap gap-3">
                {['LLMs', 'RAG', 'FastAPI', 'Docker', 'AWS'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-[#00ff9d] hover:text-[#00ff9d] transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { value: '6+', label: 'Projects' },
                { value: '2', label: 'Internships' },
                { value: '3+', label: 'Years Exp' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-6 glass rounded-xl hover:border-[#00ff9d]/30 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#00ff9d] font-['Space_Grotesk']">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6">
            {infoCards.map((card, i) => (
              <div
                key={i}
                className="info-card glass rounded-xl p-6 hover:translate-y-[-5px] transition-all duration-300 group"
                style={{ perspective: '1000px' }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                  style={{ backgroundColor: `${card.color}15` }}
                >
                  <card.icon
                    size={24}
                    style={{ color: card.color }}
                    className="group-hover:scale-110 transition-transform"
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 font-['Space_Grotesk']">
                  {card.title}
                </h3>
                
                <p className="text-[#00ff9d] font-medium">{card.content}</p>
                <p className="text-gray-400 text-sm">{card.subcontent}</p>
                <p className="text-gray-500 text-xs mt-2">{card.detail}</p>

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 30px ${card.color}10`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
