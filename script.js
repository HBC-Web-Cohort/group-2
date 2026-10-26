/* ==========================================================================
   Hewad Future Consultancy – shared JavaScript
   Handles navigation, theme, copyright year and scroll reveal across all pages.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* 1. Highlight the current page in the navigation */
  const currentFile = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".primary-nav a[data-page]").forEach((link) => {
    if (link.dataset.page === currentFile) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  /* 2. Mobile menu open / close */
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-nav");

  if (menuButton && navigation) {
    const closeMenu = () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰";
    };

    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation",
      );
      menuButton.textContent = isOpen ? "×" : "☰";
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButton.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        !event.target.closest(".site-header") &&
        navigation.classList.contains("open")
      ) {
        closeMenu();
      }
    });
  }

  /* 3. Light / dark theme toggle */
  const themeButton = document.querySelector(".theme-toggle");
  const themeIcon = document.querySelector(".theme-icon");
  const root = document.documentElement;

  function updateThemeButton() {
    const isDark = root.dataset.theme !== "light";
    if (themeIcon) themeIcon.textContent = isDark ? "☼" : "☾";
    if (themeButton) {
      const label = isDark ? "Switch to light mode" : "Switch to dark mode";
      themeButton.setAttribute("aria-label", label);
      themeButton.setAttribute("title", label);
    }
  }

  updateThemeButton();

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = nextTheme;
      try {
        localStorage.setItem("hfc-theme", nextTheme);
      } catch (error) {
        /* Storage may be blocked; theme still changes for this page. */
      }
      updateThemeButton();
      themeButton.classList.remove("is-switching");
      void themeButton.offsetWidth; /* restart the one-shot spin */
      themeButton.classList.add("is-switching");
    });
  }

  /* 4. Automatic copyright year */
  const yearLabel = document.querySelector("#current-year");
  if (yearLabel) {
    yearLabel.textContent = new Date().getFullYear();
  }

  /* 5. Reveal cards when they enter the viewport */
  const motionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );
  const revealItems = document.querySelectorAll(
    ".service-card, .service-detail, .sector-card, .value-card, .benefit-card",
  );

  if ("IntersectionObserver" in window && !motionPreference.matches) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    revealItems.forEach((item) => {
      item.classList.add("reveal-on-scroll");
      revealObserver.observe(item);
    });
  }
});

// Header responds to page scroll for a polished browsing experience.
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
}, { passive: true });


/* Add a page-ready state for tasteful entrance motion. */
document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => document.body.classList.add("page-ready"));
});


/* ==========================================================================
   Navbar sheen + image effects (spotlight, parallax, tilt, reveal)
   ========================================================================== */
(() => {
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const frameSelector = ".media-fx, .feature-card";

  /* Glass sheen follows the pointer across the navbar */
  const header = document.querySelector(".site-header");
  if (header && !calm) {
    header.addEventListener("pointermove", (event) => {
      const box = header.getBoundingClientRect();
      header.style.setProperty("--nx", `${((event.clientX - box.left) / box.width) * 100}%`);
    }, { passive: true });
  }

  if (calm) return;

  /* Image frames: pass the pointer position to CSS */
  let activeFrame = null;
  let frameTick = 0;

  const resetFrame = (frame) => {
    ["--rx", "--ry", "--px", "--py"].forEach((name) => frame.style.removeProperty(name));
  };

  document.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;
    const frame = event.target.closest(frameSelector);
    if (activeFrame && activeFrame !== frame) resetFrame(activeFrame);
    activeFrame = frame;
    if (!frame) return;

    cancelAnimationFrame(frameTick);
    frameTick = requestAnimationFrame(() => {
      const box = frame.getBoundingClientRect();
      const x = Math.min(1, Math.max(0, (event.clientX - box.left) / box.width));
      const y = Math.min(1, Math.max(0, (event.clientY - box.top) / box.height));
      frame.style.setProperty("--mx", `${x * 100}%`);
      frame.style.setProperty("--my", `${y * 100}%`);
      frame.style.setProperty("--px", ((x - 0.5) * 2).toFixed(3));
      frame.style.setProperty("--py", ((y - 0.5) * 2).toFixed(3));

      /* Tilt only the large frames; cards stay calm */
      if (frame.matches(".media-fx") && !frame.closest(".blog-card, .team-card")) {
        frame.style.setProperty("--ry", `${((x - 0.5) * 6).toFixed(2)}deg`);
        frame.style.setProperty("--rx", `${((0.5 - y) * 6).toFixed(2)}deg`);
      }
    });
  }, { passive: true });

  document.addEventListener("pointerout", (event) => {
    if (activeFrame && !activeFrame.contains(event.relatedTarget)) {
      resetFrame(activeFrame);
      activeFrame = null;
    }
  });

  /* Images below the fold are revealed as they scroll into view */
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("fx-pending");
        entry.target.classList.add("fx-in");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    const arm = (frame) => {
      if (frame.dataset.fx) return;
      frame.dataset.fx = "1";
      if (frame.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      frame.classList.add("fx-pending");
      observer.observe(frame);
    };

    const scan = () => document.querySelectorAll(".media-fx").forEach(arm);
    scan();
    /* blog.js builds its cards after load, so keep watching for new frames */
    new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
  }
})();
