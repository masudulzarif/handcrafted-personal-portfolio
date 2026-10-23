# Handcrafted Personal Portfolio (HTML5 · CSS3 · Vanilla JS)

A clean, responsive, personal portfolio website built with semantic HTML5, modular CSS3, and vanilla JavaScript without heavy frameworks.

## 📁 File Structure

```text
├── index.html        # Semantic HTML5 document with structured sections
├── style.css         # Handcrafted modular CSS3 with design tokens
├── script.js         # Vanilla JavaScript (ES6+) for interactivity
└── README.md         # Documentation and step-by-step learning guide
```

---

## 🚀 Step-by-Step Build Guide

### Step 1: Semantic HTML5 Structure (`index.html`)
The page is organized into clear landmarks:
1. `<header class="site-header">` – Adheres to the 3-zone top bar contract: Brand Wordmark, clean text navigation links with hover states, and primary actions.
2. `<main id="main-content">` – Contains all primary sections:
   - `<section id="hero">` – Typographic hierarchy, short bio, social links, stats strip.
   - `<section id="projects">` – Category filter buttons and responsive grid of `<article>` cards.
   - `<section id="skills">` – Categorized technical toolkit breakdown.
   - `<section id="writing">` – Editorial essays list with read buttons.
   - `<section id="contact">` – Semantic `<form>` with `<label>` bindings and validation.
3. `<footer class="site-footer">` – Copyright, back-to-top button, and unboxed metadata.
4. `<div id="article-modal">` – Accessible modal dialog for distraction-free essay reading.

### Step 2: Handcrafted Modular CSS3 (`style.css`)
- **CSS Custom Properties (`:root`)**: Centrally defined design tokens for colors, typography scales, spacing math, nested border-radii (`r_inner = r_outer - padding`), and transitions.
- **Dark Mode Support**: `[data-theme="dark"]` overrides custom properties dynamically without redownloading stylesheets.
- **Zero-Pill Metadata**: Metadata uses unboxed typography with subtle `·` separators.
- **Modern Layouts**: Built exclusively with CSS Grid and Flexbox for rock-solid responsive reflow.
- **Typography**: Fluid headlines using `clamp()` and balanced text wrapping (`text-wrap: balance`).

### Step 3: Vanilla JavaScript (`script.js`)
- **Theme Persistence**: Dark/light theme switcher with `localStorage` and OS `prefers-color-scheme` fallback.
- **Event Delegation**: Single event listener on parent containers for fast project filtering.
- **IntersectionObserver**: Automatically highlights active navigation links as you scroll.
- **Modal Lightbox**: Traps scroll and supports `ESC` key and backdrop dismissal.
- **Form Validation**: Friendly client-side feedback and simulation without page reload.
- **Clipboard API**: One-click "Copy Email" with instant visual feedback.

---

## 🌐 How to Run Locally

You do not need Node.js, npm, or any build tools to run this:
1. Double click `index.html` to open directly in Chrome, Firefox, Safari, or Edge.
2. Or run a simple local web server:
   ```bash
   # Using Python 3:
   python3 -m http.server 8000
   
   # Or using npx:
   npx serve .
   ```
3. Open `http://localhost:8000` in your browser.

## 🚀 Free Hosting Options
- **GitHub Pages**: Push this folder to a GitHub repository, enable Pages in repository settings.
- **Cloudflare Pages / Vercel / Netlify**: Drag and drop the folder for instant global HTTPS deployment.
