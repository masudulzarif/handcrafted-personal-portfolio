/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CodeWalkthroughModal } from './components/CodeWalkthroughModal';
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { Project, Article } from './data/portfolioData';
import { Code2, Sparkles, BookOpen } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('aurafolio_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isCodeGuideOpen, setIsCodeGuideOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Sync theme with documentElement
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('aurafolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('aurafolio_theme', 'light');
    }
  }, [isDarkMode]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'writing', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleContactClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors font-sans selection:bg-stone-900 selection:text-white dark:selection:bg-stone-100 dark:selection:text-stone-950">
      {/* 3-Zone Top Bar Navigation */}
      <Header
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onOpenCodeGuide={() => setIsCodeGuideOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Semantic Content */}
      <main id="main-content">
        <HeroSection onContactClick={handleContactClick} />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <SkillsSection />
        <ArticlesSection onSelectArticle={setSelectedArticle} />
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer onOpenCodeGuide={() => setIsCodeGuideOpen(true)} />

      {/* Floating Blueprint Quick-Action Trigger */}
      <aside aria-label="Educational tools" className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setIsCodeGuideOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 shadow-xl hover:scale-105 active:scale-95 transition-all text-xs font-mono font-medium border border-stone-800 dark:border-stone-200"
          title="Open step-by-step code walkthrough & download files"
        >
          <Code2 className="w-4 h-4 text-amber-400 dark:text-amber-600 transition-transform group-hover:rotate-12" />
          <span className="hidden sm:inline">HTML/CSS/JS Code Blueprint</span>
          <span className="sm:hidden">Code</span>
        </button>
      </aside>

      {/* Interactive Modals */}
      <CodeWalkthroughModal
        isOpen={isCodeGuideOpen}
        onClose={() => setIsCodeGuideOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
