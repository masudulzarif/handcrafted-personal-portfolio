export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image?: string;
  tags: string[];
  category: 'all' | 'web-apps' | 'tools' | 'editorial';
  categoryLabel: string;
  featured: boolean;
  highlights: string[];
  demoUrl: string;
  githubUrl: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient"
    experience: string;
    note: string;
  }[];
}

export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string[];
  slug: string;
}

export const PERSONAL_INFO = {
  name: "Masudul Zarif",
  role: "Frontend Engineer & UI Architect",
  tagline: "Building resilient, semantic, and handcrafted digital experiences with modern web standards.",
  location: "San Francisco, CA · Available for remote work",
  bio: "I am a frontend engineer who cares deeply about web fundamentals. I specialize in crafting accessible, ultra-fast web interfaces using semantic HTML5, modern modular CSS3, and clean vanilla JavaScript before reaching for heavy dependencies.",
  secondaryBio: "When I'm not writing code, you will find me dissecting web accessibility patterns, experimenting with Web Audio and generative graphics, or writing about frontend architecture.",
  email: "masudulzarif@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  avatarUrl: "/src/assets/images/portfolio_profile_avatar_1792768932275.jpg",
  availabilityStatus: "Open for select consulting & senior roles",
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Production Apps", value: "24+" },
    { label: "Lighthouse Score", value: "99" },
    { label: "Open Source Stars", value: "1.2k" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "aether-synth",
    title: "Aether Synth",
    tagline: "Tactile Web Audio Synthesizer & Ambient Generator",
    description: "An in-browser procedural synthesizer built directly on the native Web Audio API. Features custom canvas waveform rendering, polyphonic oscillators, envelope shaping, and responsive touch-first hardware controls.",
    image: "/src/assets/images/project_audio_synth_1792768932768.jpg",
    tags: ["Web Audio API", "Canvas 2D", "Vanilla JS", "AudioWorklet"],
    category: "web-apps",
    categoryLabel: "Web Apps",
    featured: true,
    year: "2026",
    highlights: [
      "Sub-5ms audio latency with zero external audio dependencies",
      "Real-time oscilloscope visualization at 60fps",
      "Custom preset bank exportable to JSON and local storage"
    ],
    demoUrl: "#demo-synth",
    githubUrl: "https://github.com/example/aether-synth"
  },
  {
    id: "platform-journal",
    title: "Platform Journal",
    tagline: "Distraction-Free Minimalist Editorial Reader",
    description: "A digital publishing platform and typography-driven article reader designed around focus. Built with strict semantic HTML5 and CSS subgrid to deliver fluid type scaling and offline reading.",
    image: "/src/assets/images/project_editorial_reader_1792768933138.jpg",
    tags: ["Semantic HTML5", "CSS Grid", "IndexedDB", "Service Worker"],
    category: "editorial",
    categoryLabel: "Editorial",
    featured: true,
    year: "2026",
    highlights: [
      "Dynamic typography scale based on CSS clamp() and line length (65ch)",
      "Three calibrated reading themes: Crisp White, Warm Paper, Deep Charcoal",
      "Offline article bookmarking with zero server requirement"
    ],
    demoUrl: "#demo-reader",
    githubUrl: "https://github.com/example/platform-journal"
  },
  {
    id: "aura-token-studio",
    title: "Aura Token Studio",
    tagline: "Accessible Design Tokens & Color Palette Engine",
    description: "A developer tool that generates WCAG 2.1 & APCA compliant color hierarchies and fluid typography systems. Generates pure modular CSS custom properties with live component testing.",
    image: "/src/assets/images/project_design_tokens_1792768933865.jpg",
    tags: ["CSS Custom Properties", "Color Math", "Clipboard API", "TypeScript"],
    category: "tools",
    categoryLabel: "Developer Tools",
    featured: true,
    year: "2025",
    highlights: [
      "Real-time perceptual contrast checking against WCAG AA/AAA thresholds",
      "One-click export to CSS variables, Tailwind configuration, or JSON tokens",
      "Interactive button and card mockup preview pane"
    ],
    demoUrl: "#demo-tokens",
    githubUrl: "https://github.com/example/aura-tokens"
  },
  {
    id: "canvas-flow-graph",
    title: "FlowGraph Engine",
    tagline: "Lightweight Dependency Inspector & Visualizer",
    description: "A zero-dependency 2D graph visualizer built with HTML5 Canvas. Inspects module hierarchies, calculates cyclical dependencies, and handles thousands of nodes smoothly.",
    tags: ["HTML5 Canvas", "Algorithms", "Performance Optimization", "ES Modules"],
    category: "tools",
    categoryLabel: "Developer Tools",
    featured: false,
    year: "2025",
    highlights: [
      "Force-directed layout algorithm written in pure vanilla JavaScript",
      "Smooth pan/zoom transformation matrix with touch gesture support",
      "Memory overhead under 15MB for 2,000 nodes"
    ],
    demoUrl: "#demo-graph",
    githubUrl: "https://github.com/example/flow-graph"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Web Fundamentals",
    description: "The resilient foundation of the modern open web, built without framework fatigue.",
    skills: [
      { name: "Semantic HTML5", level: "Expert", experience: "6+ yrs", note: "Living standard, WAI-ARIA landmarks, SEO & accessibility" },
      { name: "Modular CSS3 & Architecture", level: "Expert", experience: "6+ yrs", note: "CSS Grid, Flexbox, Custom Properties, Cascade Layers (@layer)" },
      { name: "Vanilla JavaScript (ES6+)", level: "Expert", experience: "6+ yrs", note: "Async/Await, DOM manipulation, Web APIs, Event Delegation" },
      { name: "TypeScript", level: "Advanced", experience: "4+ yrs", note: "Strict type safety, generics, schema validation" }
    ]
  },
  {
    title: "Performance & Web Standards",
    description: "Engineering interfaces for speed, accessibility, and resilience across all screen sizes.",
    skills: [
      { name: "Web Accessibility (WCAG AA)", level: "Advanced", experience: "5+ yrs", note: "Screen reader testing, keyboard navigation, focus management" },
      { name: "Responsive & Fluid Design", level: "Expert", experience: "6+ yrs", note: "Mobile-first layouts, container queries, clamp() typography" },
      { name: "Core Web Vitals & Auditing", level: "Advanced", experience: "4+ yrs", note: "LCP, INP, CLS optimization, bundle budget enforcement" },
      { name: "Web APIs & Browser Storage", level: "Advanced", experience: "4+ yrs", note: "LocalStorage, IndexedDB, IntersectionObserver, ResizeObserver" }
    ]
  },
  {
    title: "Modern Tooling & Frameworks",
    description: "Selective application of modern libraries when project scale calls for them.",
    skills: [
      { name: "Vite & Modern Bundlers", level: "Advanced", experience: "4+ yrs", note: "Zero-config fast dev servers, code-splitting, tree-shaking" },
      { name: "React & Component Modeling", level: "Advanced", experience: "5+ yrs", note: "Hooks architecture, state management, composable design" },
      { name: "Tailwind CSS & PostCSS", level: "Advanced", experience: "4+ yrs", note: "Utility architecture, design token integration" },
      { name: "Git & Version Control", level: "Proficient", experience: "6+ yrs", note: "Trunk-based development, semantic commits, PR reviews" }
    ]
  },
  {
    title: "UI Design & Craft",
    description: "Bridging the gap between design theory and clean executable code.",
    skills: [
      { name: "Design Systems & Tokens", level: "Advanced", experience: "4+ yrs", note: "Color theory, spatial grids, reusable component specifications" },
      { name: "Typographic Hierarchy", level: "Expert", experience: "5+ yrs", note: "Measure, leading, font pairings, tabular numerals" },
      { name: "Micro-interactions & Motion", level: "Advanced", experience: "4+ yrs", note: "CSS transitions, hardware-accelerated transforms (<=200ms)" },
      { name: "Figma to Code Fidelity", level: "Expert", experience: "5+ yrs", note: "Translating mockups directly into clean, semantic markup" }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: "semantic-html-importance",
    slug: "semantic-html-importance",
    title: "The Lost Art of Semantic HTML: Why Tags Matter in Modern Web Development",
    date: "March 18, 2026",
    readTime: "6 min read",
    category: "Architecture",
    summary: "Why choosing intentional tags (<header>, <main>, <article>, <figure>) instead of infinite nested <div> wrappers delivers better accessibility, improved SEO, and code you can actually read six months later.",
    content: [
      "Over the last decade, our industry made remarkable strides in tooling, compilation pipelines, and reactive state systems. Yet, somewhere along the way, we started treating HTML as an afterthought—an indiscriminate nest of anonymous div and span elements.",
      "Semantic HTML is not merely an academic preference; it is the fundamental contract between your content and the browser. When you use an <article> tag, you are telling assistive technologies, search crawlers, and read-it-later utilities: 'This content represents an independent, self-contained piece of information.'",
      "Consider document outline landmarks. A screen reader user navigating with landmark shortcuts expects to hop directly between <header>, <nav>, <main>, and <footer>. When everything is a div, that user is forced into tedious linear scanning. By leaning into native elements, you get keyboard accessibility, semantic outlines, and touch affordances for free.",
      "Next time you reach for another wrapper element, pause and ask: What is this content fundamentally doing? If it's navigation, make it a <nav>. If it's a quote with attribution, use <blockquote> and <cite>. If it's a contact form, use <form> with explicit <label> associations. Your users—and your future self—will thank you."
    ]
  },
  {
    id: "handcrafted-css-variables",
    slug: "handcrafted-css-variables",
    title: "Handcrafted CSS Without Heavy Frameworks: The Power of Modern CSS",
    date: "January 24, 2026",
    readTime: "8 min read",
    category: "CSS",
    summary: "How to architect a resilient, modular design system using native CSS Custom Properties, CSS Grid, clamp() fluid scaling, and minimal code footprint.",
    content: [
      "For years, developers relied on heavy CSS frameworks because browsers were inconsistent and missing essential layout primitives. In 2026, the modern web platform is extraordinarily capable on its own.",
      "With CSS Custom Properties (variables), you can define a complete design token system directly in your stylesheet. Dark mode, spacing scales, and typographical rhythm can be updated in a single declaration without re-downloading kilobytes of utility classes.",
      "Fluid typography with clamp() allows your headings to smoothly scale between mobile viewports and ultra-wide desktop monitors without a single media query breakpoint. Pair that with CSS Grid auto-fit and minmax(), and your project galleries reflow naturally with zero layout shift.",
      "When you handcraft your CSS, you maintain total ownership over every byte shipped over the wire. You avoid the generic 'cookie-cutter' look, and the resulting stylesheet is simple enough for any junior developer to understand at a glance."
    ]
  },
  {
    id: "vanilla-js-event-delegation",
    slug: "vanilla-js-event-delegation",
    title: "Mastering Vanilla JavaScript: Event Delegation and State Sync",
    date: "November 12, 2025",
    readTime: "5 min read",
    category: "JavaScript",
    summary: "A practical guide to handling dynamic UI interactions with minimal event listeners, clean DOM queries, and local state persistence.",
    content: [
      "Before importing megabytes of runtime libraries for a personal site or interactive document, consider what native JavaScript offers out of the box.",
      "Event delegation is one of the most elegant patterns in web engineering. Rather than attaching individual 'click' listeners to twenty project filter buttons or article cards, you attach a single listener to their parent container and evaluate event.target.closest('[data-action]').",
      "This approach drastically reduces memory consumption, prevents memory leaks when items are dynamically added or removed, and keeps your codebase delightfully lean.",
      "When combined with data-* attributes and simple state dispatchers, vanilla JavaScript allows you to build fast, responsive, and durable interfaces that load in milliseconds and never break when a framework updates its major version."
    ]
  }
];
