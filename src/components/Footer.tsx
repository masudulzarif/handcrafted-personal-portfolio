import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCodeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCodeGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright & Info */}
          <div className="text-center sm:text-left space-y-1">
            <p className="text-xs font-mono text-stone-600 dark:text-stone-400">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. Handcrafted with semantic HTML5, CSS3, & vanilla JavaScript.
            </p>
            <p className="text-[11px] font-mono text-stone-400 dark:text-stone-500">
              Zero heavy UI frameworks · 100% accessible · WCAG AA compliant
            </p>
          </div>

          {/* Links & Actions */}
          <div className="flex items-center flex-wrap justify-center gap-6 text-xs font-mono text-stone-600 dark:text-stone-400">
            <button
              onClick={onOpenCodeGuide}
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors inline-flex items-center gap-1.5"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Inspect Source</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              GitHub
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              LinkedIn
            </a>

            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              Twitter
            </a>

            <button
              onClick={scrollToTop}
              className="px-2.5 py-1 rounded-md border border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 hover:text-stone-950 dark:hover:text-stone-50 transition-colors inline-flex items-center gap-1"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
