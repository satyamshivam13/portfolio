import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for entrance animations with smoother easing
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Name character decode animation
      if (nameRef.current) {
        const chars = nameRef.current.querySelectorAll('.char');
        tl.fromTo(
          chars,
          { opacity: 0, y: 80, rotateX: -90, scale: 0.8 },
          { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 1.2, stagger: 0.05 },
          0.2
        );
      }

      // Title slide up with a slight blur effect revealing
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 40, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 },
        0.8
      );

      // Description fade in
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        1.0
      );

      // CTA buttons
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.3
      );

      // Social links
      tl.fromTo(
        socialsRef.current?.children || [],
        { opacity: 0, y: 20, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 },
        1.5
      );

      // Add a subtle floating animation to the entire content block after entrance
      tl.add(() => {
        const target = containerRef.current?.querySelector('.max-w-4xl');
        if (target) {
          gsap.to(target, {
            y: -10,
            duration: 3,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
          });
        }
      }, '+=0.5');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Split name into characters
  const name = 'Satyam';
  const nameChars = name.split('').map((char, i) => (
    <span
      key={i}
      className="char inline-block"
      style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex justify-center">
          {/* Content */}
          <div className="max-w-4xl text-center">
            {/* Greeting */}
            <p className="text-[#00ff9d] text-sm font-medium tracking-wider uppercase mb-4">
              Hello, I'm
            </p>

            {/* Name */}
            <h1
              ref={nameRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Space_Grotesk'] text-white mb-6"
              style={{ perspective: '1000px' }}
            >
              {nameChars}
            </h1>

            {/* Title */}
            <p
              ref={titleRef}
              className="text-xl sm:text-2xl md:text-3xl text-gradient font-['Space_Grotesk'] font-medium mb-6"
            >
              AI/ML Engineer & Agentic AI Specialist
            </p>

            {/* Description */}
            <p
              ref={descRef}
              className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 px-4"
            >
              I bridge the gap between complex ML models and production servers. From creating context-aware RAG pipelines to orchestrating multi-agent AI campaigns, I turn data into scalable, practical software. 
              <span className="block mt-2 text-[#00ff9d]">Let's build systems that actually work.</span>
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center mb-10 px-4">
              <button
                onClick={scrollToProjects}
                className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-[#00ff9d] text-[#0a0a0a] font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,157,0.4)] text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore My Work
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 sm:px-8 sm:py-4 border border-white/20 text-white font-semibold rounded-lg hover:border-[#00ff9d] hover:text-[#00ff9d] transition-all duration-300 text-sm sm:text-base"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div ref={socialsRef} className="flex gap-4 justify-center">
              <a
                href="https://github.com/satyamshivam13"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00ff9d] hover:border-[#00ff9d] hover:bg-[#00ff9d]/10 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/usersatyam/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0080ff] hover:border-[#0080ff] hover:bg-[#0080ff]/10 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:shivamsatyam35@gmail.com"
                className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00ff9d] hover:border-[#00ff9d] hover:bg-[#00ff9d]/10 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Recruiter Quick-Scan Block */}
            <div className="mt-12 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-3xl mx-auto text-left hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 animate-in fade-in duration-1000 delay-500">
              <div>
                <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider font-semibold">Role</p>
                <p className="text-white text-sm font-medium">AI/ML Engineer</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider font-semibold">Internships</p>
                <p className="text-white text-sm font-medium">3</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider font-semibold">Stack</p>
                <p className="text-[#00ff9d] text-sm font-medium">Python · LangChain · FastAPI</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider font-semibold">Availability</p>
                <p className="text-white text-sm font-medium">Remote / Global</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-wider">SCROLL</span>
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#00ff9d] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
