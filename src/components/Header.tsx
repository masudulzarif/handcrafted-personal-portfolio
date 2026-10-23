import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenCodeGuide: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  onToggleTheme,
  onOpenCodeGuide,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Writing', href: '#writing' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-[1140px] mx-auto px-6 h-[70px] flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-lg font-bold font-display tracking-tight text-stone-900 dark:text-stone-100 whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          Masudul Zarif
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600 dark:text-stone-400">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'text-stone-950 dark:text-stone-50 font-semibold'
                    : 'hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-stone-900 dark:bg-stone-100 transition-all" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Theme Toggle, Code Blueprint, Primary CTA) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenCodeGuide}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
            title="Inspect HTML5, CSS3, & JS Code"
          >
            <Code2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span className="hidden sm:inline">Code Guide</span>
          </button>

          <button
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 flex items-center justify-center transition-colors"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-950 rounded-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors whitespace-nowrap shrink-0"
          >
            Get in Touch
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium py-1.5 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-stone-50"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
            <span className="text-xs font-mono text-stone-500">Theme Preference</span>
            <button
              onClick={onToggleTheme}
              className="px-3 py-1 text-xs font-mono border border-stone-300 dark:border-stone-700 rounded-md"
            >
              {isDarkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
