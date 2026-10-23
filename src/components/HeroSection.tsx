import React from 'react';
import { ArrowUpRight, Github, Linkedin, Twitter, Mail, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-12 sm:pt-16 pb-16 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy (col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center flex-wrap gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
              <span>{PERSONAL_INFO.role}</span>
              <span aria-hidden="true">·</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-stone-900 dark:text-stone-50 tracking-tight leading-[1.15] text-wrap-balance">
              Crafting resilient, semantic, and handcrafted digital experiences.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl font-sans">
              {PERSONAL_INFO.bio}
            </p>

            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.secondaryBio}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex items-center flex-wrap gap-4">
              <button
                onClick={() => handleScrollTo('projects')}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <span>Explore Featured Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
              >
                Send a Message
              </button>
            </div>

            {/* Social Links & Resume */}
            <div className="pt-4 flex items-center flex-wrap gap-4 text-xs font-mono text-stone-500 dark:text-stone-400">
              <span className="text-stone-400 dark:text-stone-500">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors inline-flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true">/</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors inline-flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true">/</span>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors inline-flex items-center gap-1"
              >
                <Twitter className="w-3.5 h-3.5" />
                <span>X / Twitter</span>
              </a>
              <span aria-hidden="true">/</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors inline-flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Code & Architecture Blueprint Card (No Photo) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[380px] bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-5">
              {/* Card Window Header */}
              <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800/80 pb-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700" />
                </div>
                <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500">
                  developer.config.json
                </span>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs leading-relaxed space-y-1 text-stone-700 dark:text-stone-300">
                <p><span className="text-amber-600 dark:text-amber-400">const</span> developer = &#123;</p>
                <p className="pl-4">name: <span className="text-emerald-600 dark:text-emerald-400">"{PERSONAL_INFO.name}"</span>,</p>
                <p className="pl-4">craft: <span className="text-emerald-600 dark:text-emerald-400">"Semantic HTML5 & Modern CSS3"</span>,</p>
                <p className="pl-4">engine: <span className="text-emerald-600 dark:text-emerald-400">"Vanilla JavaScript (Zero Bloat)"</span>,</p>
                <p className="pl-4">standards: [<span className="text-sky-600 dark:text-sky-400">"WCAG-AA"</span>, <span className="text-sky-600 dark:text-sky-400">"W3C"</span>],</p>
                <p className="pl-4">availability: <span className="text-amber-600 dark:text-amber-400">true</span></p>
                <p>&#125;;</p>
              </div>

              {/* Card Footer Info */}
              <div className="pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between text-xs font-mono text-stone-500 dark:text-stone-400">
                <span>⚡ 100% Handcrafted</span>
                <span>{PERSONAL_INFO.availabilityStatus}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Stats Strip Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-stone-200 dark:border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider font-mono text-stone-500 dark:text-stone-400 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
