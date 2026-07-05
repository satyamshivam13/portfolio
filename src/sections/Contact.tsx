'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Copy,
  Check,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading typewriter effect
      gsap.fromTo(
        headingRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Form slide up
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Social links dock pop
      const socials = socialsRef.current?.querySelectorAll('.social-link');
      if (socials) {
        gsap.fromTo(
          socials,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: socialsRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shivamsatyam35@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/satyamshivam13',
      color: '#ffffff',
      bgColor: '#333333',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/usersatyam/',
      color: '#0a66c2',
      bgColor: '#0a66c220',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:shivamsatyam35@gmail.com',
      color: '#00ff9d',
      bgColor: '#00ff9d20',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen py-24 px-6 relative flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00ff9d] text-sm font-medium tracking-wider uppercase mb-4">
            Get In Touch
          </p>
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] text-white mb-6 typewriter-cursor"
          >
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Got an interesting project or just want to chat about AI? 
            I'm always up for a conversation. Drop me a message!
          </p>
        </div>

        {/* Contact Card */}
        <div className="glass rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ff9d] to-[#0080ff]" />
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00ff9d]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#0080ff]/10 rounded-full blur-3xl" />

          <div className="relative">
            {/* Email Display */}
            <div className="text-center mb-10">
              <p className="text-gray-500 text-sm mb-2">Primary Contact</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="mailto:shivamsatyam35@gmail.com"
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white hover:text-[#00ff9d] transition-colors font-['Space_Grotesk'] break-all px-4"
                >
                  shivamsatyam35@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-[#00ff9d] transition-all duration-300 shrink-0"
                  title="Copy email"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </button>
              </div>
              {copied && (
                <p className="text-[#00ff9d] text-sm mt-2 animate-pulse">
                  Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Social Links Dock */}
            <div ref={socialsRef} className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link group relative p-3 sm:p-4 rounded-xl glass hover:scale-110 transition-all duration-300"
                  style={{
                    '--hover-color': social.color,
                  } as React.CSSProperties}
                >
                  <social.icon
                    size={24}
                    className="sm:w-7 sm:h-7 text-gray-400 group-hover:text-[var(--hover-color)] transition-colors"
                  />
                  
                  {/* Tooltip */}
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/10 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.name}
                  </span>

                  {/* Glow */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      boxShadow: `0 0 30px ${social.color}40`,
                    }}
                  />
                </a>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/satyamshivam13"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 glass rounded-xl hover:border-[#00ff9d]/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Github size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                  <div>
                    <p className="text-white font-medium">View GitHub</p>
                    <p className="text-gray-500 text-sm">@satyamshivam13</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-gray-500 group-hover:text-[#00ff9d] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/usersatyam/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 glass rounded-xl hover:border-[#0080ff]/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                  <div>
                    <p className="text-white font-medium">Connect on LinkedIn</p>
                    <p className="text-gray-500 text-sm">/in/usersatyam</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-gray-500 group-hover:text-[#0080ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </a>
            </div>

            {/* Availability Badge */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-[#00ff9d]" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#00ff9d] animate-ping" />
              </div>
              <p className="text-gray-400 text-sm">
                Open to <span className="text-[#00ff9d]">freelance work</span> and{' '}
                <span className="text-[#0080ff]">full-time roles</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-4">
            <span>Built with</span>
            <span className="text-[#00ff9d]">Next.js 15</span>
            <span>+</span>
            <span className="text-[#0080ff]">TypeScript</span>
            <span>+</span>
            <span className="text-[#00ff9d]">Tailwind</span>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Satyam. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Made with curiosity and lots of coffee ☕
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
