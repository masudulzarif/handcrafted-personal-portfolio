/**
 * ==========================================================================
 * HANDCRAFTED VANILLA JAVASCRIPT (script.js)
 * Clean, modular, beginner-friendly DOM script.
 * No external libraries or runtime frameworks required.
 *
 * Table of Contents:
 * 1. State & Constants
 * 2. Theme Toggle (Dark / Light mode + LocalStorage)
 * 3. Mobile Navigation Menu Toggle
 * 4. Active Navigation Link on Scroll (Intersection Observer)
 * 5. Project Category Filtering
 * 6. Article Reading Lightbox Modal
 * 7. Quick Copy Email to Clipboard
 * 8. Contact Form Handling & Validation
 * 9. Smooth Scroll & Back-to-Top Button
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* ------------------------------------------------------------------------
     1. STATE & CONSTANTS
     ------------------------------------------------------------------------ */
  const THEME_STORAGE_KEY = "aurafolio_theme_preference";

  /* ------------------------------------------------------------------------
     2. THEME TOGGLE (Dark / Light Mode)
     ------------------------------------------------------------------------ */
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const htmlRoot = document.documentElement;

  // Function to apply theme
  function setTheme(theme) {
    if (theme === "dark") {
      htmlRoot.setAttribute("data-theme", "dark");
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute("aria-label", "Switch to light mode");
        themeToggleBtn.innerHTML = "☀️"; // Sun icon
      }
    } else {
      htmlRoot.removeAttribute("data-theme");
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute("aria-label", "Switch to dark mode");
        themeToggleBtn.innerHTML = "🌙"; // Moon icon
      }
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }

  // Detect user preference on page load: stored preference > OS prefers-color-scheme
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    setTheme(savedTheme);
  } else if (systemPrefersDark) {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  // Toggle button event listener
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = htmlRoot.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }

  /* ------------------------------------------------------------------------
     3. MOBILE NAVIGATION MENU TOGGLE
     ------------------------------------------------------------------------ */
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNavDrawer = document.getElementById("mobile-nav-drawer");

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      mobileMenuBtn.setAttribute("aria-expanded", String(!isExpanded));
      
      if (isExpanded) {
        mobileNavDrawer.style.display = "none";
      } else {
        mobileNavDrawer.style.display = "flex";
      }
    });

    // Close mobile drawer when clicking any link
    const mobileLinks = mobileNavDrawer.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNavDrawer.style.display = "none";
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ------------------------------------------------------------------------
     4. ACTIVE NAVIGATION LINK ON SCROLL (Intersection Observer)
     ------------------------------------------------------------------------ */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if ("IntersectionObserver" in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${currentId}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  /* ------------------------------------------------------------------------
     5. PROJECT CATEGORY FILTERING (Event Delegation)
     ------------------------------------------------------------------------ */
  const filterContainer = document.getElementById("project-filters");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterContainer && projectCards.length > 0) {
    filterContainer.addEventListener("click", (event) => {
      const button = event.target.closest(".filter-btn");
      if (!button) return;

      // Update active button state
      filterContainer.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      const selectedCategory = button.getAttribute("data-category");

      // Filter project cards
      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "flex";
          card.style.opacity = "1";
        } else {
          card.style.display = "none";
          card.style.opacity = "0";
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. ARTICLE READING LIGHTBOX MODAL
     ------------------------------------------------------------------------ */
  const articleModal = document.getElementById("article-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalTitle = document.getElementById("modal-article-title");
  const modalMeta = document.getElementById("modal-article-meta");
  const modalBody = document.getElementById("modal-article-body");

  // Open modal function
  function openArticleModal(title, date, readTime, category, paragraphs) {
    if (!articleModal) return;

    if (modalTitle) modalTitle.textContent = title;
    if (modalMeta) {
      modalMeta.innerHTML = `<span>${category}</span><span class="meta-dot">·</span><span>${date}</span><span class="meta-dot">·</span><span>${readTime}</span>`;
    }
    if (modalBody) {
      modalBody.innerHTML = paragraphs.map((p) => `<p>${p}</p>`).join("");
    }

    articleModal.classList.add("open");
    articleModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent body scroll
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  // Close modal function
  function closeArticleModal() {
    if (!articleModal) return;
    articleModal.classList.remove("open");
    articleModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Restore body scroll
  }

  // Event listener for reading triggers
  document.querySelectorAll("[data-read-article]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const parentArticle = trigger.closest(".article-entry");
      if (!parentArticle) return;

      const title = parentArticle.querySelector(".article-title")?.textContent || "Article";
      const date = parentArticle.getAttribute("data-date") || "";
      const readTime = parentArticle.getAttribute("data-readtime") || "";
      const category = parentArticle.getAttribute("data-category") || "";
      
      // Extract paragraphs from hidden content template
      const template = parentArticle.querySelector(".article-full-content");
      const paragraphs = template 
        ? Array.from(template.querySelectorAll("p")).map((p) => p.textContent)
        : ["No content available."];

      openArticleModal(title, date, readTime, category, paragraphs);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeArticleModal);
  }

  // Close on outside backdrop click
  if (articleModal) {
    articleModal.addEventListener("click", (e) => {
      if (e.target === articleModal) {
        closeArticleModal();
      }
    });
  }

  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && articleModal && articleModal.classList.contains("open")) {
      closeArticleModal();
    }
  });

  /* ------------------------------------------------------------------------
     7. QUICK COPY EMAIL TO CLIPBOARD
     ------------------------------------------------------------------------ */
  const copyEmailBtn = document.getElementById("copy-email-btn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      const emailToCopy = copyEmailBtn.getAttribute("data-email") || "masudulzarif@gmail.com";
      try {
        await navigator.clipboard.writeText(emailToCopy);
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = "✓ Copied to clipboard!";
        copyEmailBtn.style.color = "var(--accent-success)";
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
          copyEmailBtn.style.color = "";
        }, 2200);
      } catch (err) {
        console.warn("Failed to copy clipboard, fallback:", err);
      }
    });
  }

  /* ------------------------------------------------------------------------
     8. CONTACT FORM HANDLING & VALIDATION
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");

  if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("contact-name");
      const emailInput = document.getElementById("contact-email");
      const subjectInput = document.getElementById("contact-subject");
      const messageInput = document.getElementById("contact-message");

      // Simple validation checks
      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const subject = subjectInput ? subjectInput.value.trim() : "";
      const message = messageInput ? messageInput.value.trim() : "";

      if (!name || !email || !message) {
        formFeedback.className = "form-feedback error";
        formFeedback.textContent = "Please fill in all required fields (Name, Email, Message).";
        return;
      }

      // Basic email pattern check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formFeedback.className = "form-feedback error";
        formFeedback.textContent = "Please provide a valid email address.";
        return;
      }

      // Simulate successful submission (client-side demonstration)
      const submitBtn = contactForm.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending message...";
      }

      setTimeout(() => {
        formFeedback.className = "form-feedback success";
        formFeedback.textContent = `Thank you, ${name}! Your message has been received. I will reply to ${email} promptly.`;
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Message";
        }
      }, 700);
    });
  }

  /* ------------------------------------------------------------------------
     9. BACK TO TOP BUTTON
     ------------------------------------------------------------------------ */
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
