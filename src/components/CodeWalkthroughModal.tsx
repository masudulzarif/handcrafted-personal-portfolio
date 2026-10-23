import React, { useState } from 'react';
import { X, Copy, Check, Download, BookOpen, Code2, Palette, Terminal } from 'lucide-react';

interface CodeWalkthroughModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeWalkthroughModal: React.FC<CodeWalkthroughModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'html' | 'css' | 'js'>('overview');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch (e) {
      console.warn("Copy failed", e);
    }
  };

  const downloadAllFiles = () => {
    const files = [
      { name: 'index.html', url: '/vanilla/index.html' },
      { name: 'style.css', url: '/vanilla/style.css' },
      { name: 'script.js', url: '/vanilla/script.js' },
      { name: 'README.md', url: '/vanilla/README.md' }
    ];

    files.forEach(file => {
      const link = document.createElement('a');
      link.href = file.url;
      link.download = file.name;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="code-modal-title"
    >
      <div className="relative w-full max-w-5xl h-[88vh] bg-stone-900 text-stone-100 border border-stone-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-stone-800 border border-stone-700 flex items-center justify-center text-amber-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h2 id="code-modal-title" className="text-base font-semibold tracking-tight text-white">
                Step-by-Step Code Blueprint & Architecture
              </h2>
              <p className="text-xs text-stone-400 font-mono">
                Clean Semantic HTML5 · Modular CSS3 · Vanilla JavaScript (Zero Frameworks)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadAllFiles}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors"
              title="Download standalone HTML, CSS, and JS files"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get Standalone Files</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
              aria-label="Close code guide"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-2.5 border-b border-stone-800 bg-stone-950/60 shrink-0 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-stone-800 text-white font-medium border border-stone-700'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>0. Build Guide</span>
          </button>
          <button
            onClick={() => setActiveTab('html')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'html'
                ? 'bg-amber-950/60 text-amber-300 font-medium border border-amber-800/60'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>1. Semantic HTML5 (index.html)</span>
          </button>
          <button
            onClick={() => setActiveTab('css')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'css'
                ? 'bg-sky-950/60 text-sky-300 font-medium border border-sky-800/60'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>2. Modular CSS3 (style.css)</span>
          </button>
          <button
            onClick={() => setActiveTab('js')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'js'
                ? 'bg-emerald-950/60 text-emerald-300 font-medium border border-emerald-800/60'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>3. Vanilla JS (script.js)</span>
          </button>
        </div>

        {/* Tab Content Panes */}
        <div className="flex-1 overflow-y-auto p-6 font-mono text-xs leading-relaxed text-stone-300">
          {activeTab === 'overview' && (
            <div className="max-w-3xl space-y-6 font-sans">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">How to Build This Handcrafted Portfolio Step-by-Step</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  This portfolio was designed from the ground up to be completely free of heavy UI libraries like Bootstrap or bulky JS runtimes. Every section uses semantic markup, native CSS Custom Properties, and vanilla DOM manipulation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-stone-800 bg-stone-900/60">
                  <div className="text-amber-400 font-mono text-xs font-semibold mb-1">STEP 1</div>
                  <h4 className="text-white font-semibold text-sm mb-2">Semantic Structure</h4>
                  <p className="text-stone-400 text-xs">
                    Uses landmarks like <code className="text-amber-300">&lt;header&gt;</code>, <code className="text-amber-300">&lt;main&gt;</code>, <code className="text-amber-300">&lt;section&gt;</code>, and <code className="text-amber-300">&lt;article&gt;</code> for accessibility and SEO.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-800 bg-stone-900/60">
                  <div className="text-sky-400 font-mono text-xs font-semibold mb-1">STEP 2</div>
                  <h4 className="text-white font-semibold text-sm mb-2">Modular CSS Tokens</h4>
                  <p className="text-stone-400 text-xs">
                    Variables in <code className="text-sky-300">:root</code> control colors, typography scales, single-elevation shadows, and dark mode reflows seamlessly.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-800 bg-stone-900/60">
                  <div className="text-emerald-400 font-mono text-xs font-semibold mb-1">STEP 3</div>
                  <h4 className="text-white font-semibold text-sm mb-2">Vanilla Interactions</h4>
                  <p className="text-stone-400 text-xs">
                    Event delegation for project filters, theme toggle saved in <code className="text-emerald-300">localStorage</code>, and native form validation.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-stone-800 bg-stone-950/60 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-stone-400">Standalone Project Files Available</span>
                  <a
                    href="/vanilla/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-amber-400 hover:underline inline-flex items-center gap-1"
                  >
                    Open Standalone HTML In New Tab ↗
                  </a>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  We have generated the complete standalone code in <code className="text-stone-200">/public/vanilla/</code>. You can copy the code directly from the tabs above, or drag and drop the folder into any browser or GitHub Pages repository without installing Node, npm, or any build tools!
                </p>
              </div>
            </div>
          )}

          {activeTab === 'html' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-stone-400 text-xs">Full Semantic HTML5 Blueprint (index.html)</span>
                <button
                  onClick={() => copyToClipboard(HTML_CODE_SNIPPET, 'html')}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                >
                  {copiedKey === 'html' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'html' ? 'Copied HTML!' : 'Copy HTML'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 overflow-x-auto text-[11px] leading-relaxed">
                <code>{HTML_CODE_SNIPPET}</code>
              </pre>
            </div>
          )}

          {activeTab === 'css' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-stone-400 text-xs">Handcrafted Modular CSS3 Blueprint (style.css)</span>
                <button
                  onClick={() => copyToClipboard(CSS_CODE_SNIPPET, 'css')}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                >
                  {copiedKey === 'css' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'css' ? 'Copied CSS!' : 'Copy CSS'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 overflow-x-auto text-[11px] leading-relaxed">
                <code>{CSS_CODE_SNIPPET}</code>
              </pre>
            </div>
          )}

          {activeTab === 'js' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-stone-400 text-xs">Vanilla JavaScript Blueprint (script.js)</span>
                <button
                  onClick={() => copyToClipboard(JS_CODE_SNIPPET, 'js')}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                >
                  {copiedKey === 'js' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'js' ? 'Copied JS!' : 'Copy JavaScript'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 overflow-x-auto text-[11px] leading-relaxed">
                <code>{JS_CODE_SNIPPET}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const HTML_CODE_SNIPPET = `<!-- index.html - Semantic HTML5 Personal Portfolio -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Masudul Zarif - Personal Portfolio & UI Architect</title>
  <meta name="description" content="Personal portfolio of Masudul Zarif: Frontend Engineer & UI Architect.">
  <link rel="stylesheet" href="./style.css">
</head>
<body>

  <!-- 1. SITE HEADER (3-Zone Top Bar Contract) -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="#hero" class="brand-wordmark">Masudul Zarif</a>
      <nav aria-label="Primary site navigation">
        <ul class="nav-links">
          <li><a href="#hero" class="nav-link active">About</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#writing" class="nav-link">Writing</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>
      <div class="header-actions">
        <button id="theme-toggle-btn" class="theme-toggle-btn" aria-label="Toggle theme">🌙</button>
        <a href="#contact" class="btn-primary">Get in Touch</a>
      </div>
    </div>
  </header>

  <main id="main-content">
    <!-- SECTION 1: HERO -->
    <section id="hero" class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy-col">
            <div class="hero-kicker">Frontend Engineer & UI Architect · San Francisco & Remote</div>
            <h1 class="hero-title">Crafting resilient, semantic, and handcrafted digital experiences.</h1>
            <p class="hero-bio">Building accessible, ultra-fast web interfaces using semantic HTML5, modern modular CSS3, and clean vanilla JavaScript.</p>
            <div class="hero-actions">
              <a href="#projects" class="btn-primary">Explore Featured Work</a>
              <a href="#contact" class="btn-secondary">Send a Message</a>
            </div>
          </div>
          <figure class="hero-visual-frame">
            <img src="./avatar.jpg" alt="Masudul Zarif portrait" class="hero-portrait-img">
          </figure>
        </div>
      </div>
    </section>

    <!-- SECTION 2: FEATURED PROJECTS (with filter bar) -->
    <section id="projects" class="section">
      <div class="container">
        <header class="section-header">
          <p class="section-kicker">Portfolio & Case Studies</p>
          <h2 class="section-title">Selected Projects</h2>
        </header>
        <div id="project-filters" class="filter-bar">
          <button class="filter-btn active" data-category="all">All Works</button>
          <button class="filter-btn" data-category="web-apps">Web Apps</button>
          <button class="filter-btn" data-category="tools">Developer Tools</button>
        </div>
        <div class="projects-grid">
          <article class="project-card" data-category="web-apps">
            <!-- Project content & unboxed tags -->
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION 3: SKILLS & TOOLS -->
    <section id="skills" class="section">
      <!-- Categorized toolkit breakdown -->
    </section>

    <!-- SECTION 4: WRITING & ARTICLES -->
    <section id="writing" class="section">
      <!-- Essays & reading trigger -->
    </section>

    <!-- SECTION 5: CONTACT FORM -->
    <section id="contact" class="section">
      <div class="container">
        <form id="contact-form" class="contact-form" novalidate>
          <div id="form-feedback" class="form-feedback" role="alert"></div>
          <div class="form-group">
            <label for="contact-name" class="form-label">Your Name</label>
            <input type="text" id="contact-name" name="name" class="form-input" required>
          </div>
          <div class="form-group">
            <label for="contact-email" class="form-label">Email Address</label>
            <input type="email" id="contact-email" name="email" class="form-input" required>
          </div>
          <div class="form-group">
            <label for="contact-message" class="form-label">Message</label>
            <textarea id="contact-message" name="message" class="form-textarea" required></textarea>
          </div>
          <button type="submit" class="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <p>© 2026 Masudul Zarif. Handcrafted with semantic HTML5, CSS3, & vanilla JavaScript.</p>
    </div>
  </footer>

  <script src="./script.js"></script>
</body>
</html>`;

const CSS_CODE_SNIPPET = `/* style.css - Handcrafted Modular CSS3 */
:root {
  --bg-primary: #faf9f6;
  --bg-surface: #ffffff;
  --bg-subtle: #f3f2ee;
  --border-subtle: #e5e4de;
  --border-focus: #1c1917;
  --text-primary: #1c1917;
  --text-secondary: #57534e;
  --text-muted: #78716c;
  --accent-primary: #1c1917;
  --accent-text: #ffffff;
  
  --font-display: "Outfit", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --container-max: 1140px;
}

[data-theme="dark"] {
  --bg-primary: #0c0a09;
  --bg-surface: #171513;
  --bg-subtle: #201d1a;
  --border-subtle: #292524;
  --border-focus: #f5f5f4;
  --text-primary: #f5f5f4;
  --text-secondary: #a8a29e;
  --text-muted: #78716c;
  --accent-primary: #f5f5f4;
  --accent-text: #0c0a09;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-body);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.65;
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section {
  padding: 5rem 0;
  border-bottom: 1px solid var(--border-subtle);
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
}

.projects-grid, .skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (max-width: 768px) {
  .projects-grid, .skills-grid {
    grid-template-columns: 1fr;
  }
}`;

const JS_CODE_SNIPPET = `// script.js - Vanilla JavaScript Interactivity
document.addEventListener("DOMContentLoaded", () => {
  // 1. Theme Toggle & LocalStorage
  const themeToggle = document.getElementById("theme-toggle-btn");
  const root = document.documentElement;
  
  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      if (themeToggle) themeToggle.textContent = "☀️";
    } else {
      root.removeAttribute("data-theme");
      if (themeToggle) themeToggle.textContent = "🌙";
    }
    localStorage.setItem("theme_pref", theme);
  }

  themeToggle?.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    applyTheme(isDark ? "light" : "dark");
  });

  // 2. Project Filtering via Event Delegation
  const filterBar = document.getElementById("project-filters");
  filterBar?.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    
    filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    const cat = btn.dataset.category;
    document.querySelectorAll(".project-card").forEach(card => {
      card.style.display = (cat === "all" || card.dataset.category === cat) ? "flex" : "none";
    });
  });

  // 3. Contact Form Submission
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    feedback.className = "form-feedback success";
    feedback.textContent = "Thank you! Your message has been received.";
    form.reset();
  });
});`;
