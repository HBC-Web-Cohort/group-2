/* ==========================================================================
   Hewad Future Consultancy – app.js (all page logic in one file)
   Nav, theme toggle, year, reveals, image effects, Vanta HALO, scroll motion,
   blog posts data + blog list/detail rendering.
   theme-init.js stays in <head> for FOUC-free theme.
   ========================================================================== */

const POSTS = [
  {
    slug: "grow-your-business",
    category: "Business Growth",
    date: "October 22, 2026",
    readTime: "8 min read",
    title: "How to Grow Your Business in Today’s Competitive Market",
    excerpt:
      "Growth is not about working harder, it is about working smarter. Four practical steps every company can start with.",
    image: "assets/HFC_images/03_goals_coins_charts.webp",
    intro: [
      "In today’s fast-changing business environment, growth is not just about working harder; it is about working smarter. Every successful company needs a clear strategy, strong leadership, and a deep understanding of its customers.",
      "At Hewad Future Consultancy, we help businesses identify opportunities, overcome challenges, and develop practical strategies for long-term success.",
    ],
    sections: [
      {
        title: "Set Clear Business Goals",
        text: [
          "Every successful business begins with a clear vision. Define your objectives, identify your priorities, and create a realistic plan to achieve your goals.",
          "Measuring your progress regularly helps you understand what is working and where improvements are needed.",
        ],
      },
      {
        title: "Understand Your Customers",
        text: [
          "Understanding customer needs is essential for sustainable growth. Listen to feedback, research your target market, and provide services that solve real problems.",
        ],
      },
      {
        title: "Improve Your Business Strategy",
        text: [
          "A strong strategy helps businesses use their resources effectively, respond to market changes, and discover new opportunities.",
        ],
      },
      {
        title: "Build a Strong Professional Team",
        text: [
          "Your team plays an important role in business success. Invest in professional development, encourage teamwork, and create an environment where people can share ideas.",
        ],
      },
    ],
    conclusion: [
      "Growing a successful business requires planning, customer understanding, effective leadership, and continuous improvement. With the right guidance, businesses can build a strong foundation for the future.",
      "Hewad Future Consultancy is committed to helping organizations achieve their goals through practical consulting and strategic solutions.",
    ],
  },
  {
    slug: "resilient-business",
    category: "Business Strategy",
    date: "October 20, 2026",
    readTime: "6 min read",
    title: "Building a Resilient Business in a Changing Market",
    excerpt:
      "Discover how strategic planning, innovation, and strong leadership help businesses adapt and achieve sustainable growth.",
    image: "assets/HFC_images/mision.webp",
    intro: [
      "Markets change quickly, and the organizations that last are not always the biggest, but the most prepared. Resilience is built long before a crisis arrives.",
    ],
    sections: [
      {
        title: "Plan for More Than One Future",
        text: [
          "Strong plans include alternatives. Look at the risks that could affect your income, supply, people, and reputation, and decide in advance how you would respond.",
        ],
      },
      {
        title: "Keep Innovating",
        text: [
          "Small, steady improvements to services and processes keep an organization relevant. Test new ideas on a small scale before investing heavily.",
        ],
      },
      {
        title: "Lead With Clarity",
        text: [
          "In uncertain times people look to leaders for direction. Clear priorities and honest communication keep teams focused and confident.",
        ],
      },
    ],
    conclusion: [
      "A resilient business adapts without losing its purpose. With sound planning, steady innovation, and strong leadership, change becomes an opportunity instead of a threat.",
    ],
  },
  {
    slug: "strategic-planning",
    category: "Strategic Planning",
    date: "October 18, 2026",
    readTime: "5 min read",
    title: "The Power of Strategic Planning",
    excerpt:
      "Learn how effective planning creates a clear path toward long-term business success.",
    image: "assets/HFC_images/our-work.webp",
    intro: [
      "A strategic plan turns a vision into daily decisions. Without one, even talented teams spend their energy on tasks that do not move the organization forward.",
    ],
    sections: [
      {
        title: "Start With Where You Are",
        text: [
          "Review your strengths, weaknesses, resources, and market position honestly. A plan built on facts is far more useful than one built on assumptions.",
        ],
      },
      {
        title: "Choose a Few Priorities",
        text: [
          "Trying to do everything weakens results. Select the goals that matter most and give each one an owner, a deadline, and a clear measure of success.",
        ],
      },
      {
        title: "Review and Adjust",
        text: [
          "A plan is a living document. Check progress regularly, learn from the results, and adjust before small problems become large ones.",
        ],
      },
    ],
    conclusion: [
      "Strategic planning gives an organization direction, focus, and a way to measure progress. It is one of the most valuable investments a leadership team can make.",
    ],
  },
  {
    slug: "leadership-that-inspires",
    category: "Leadership",
    date: "October 15, 2026",
    readTime: "5 min read",
    title: "Leadership That Inspires Results",
    excerpt:
      "Explore leadership practices that build stronger teams and improve business performance.",
    image: "assets/HFC_images/vision.webp",
    intro: [
      "Great leaders do more than manage tasks. They create an environment where people understand the goal, trust each other, and take responsibility for results.",
    ],
    sections: [
      {
        title: "Communicate the Vision",
        text: [
          "People work better when they know why their work matters. Explain the direction often and connect each role to the bigger picture.",
        ],
      },
      {
        title: "Develop Your People",
        text: [
          "Training, feedback, and real responsibility help employees grow, and growing teams deliver stronger performance for the organization.",
        ],
      },
      {
        title: "Lead by Example",
        text: [
          "Consistency builds trust. When leaders keep their promises and act with integrity, their teams follow.",
        ],
      },
    ],
    conclusion: [
      "Inspiring leadership is a skill that can be learned and practiced. Organizations that invest in it build stronger teams and lasting results.",
    ],
  },
  {
    slug: "challenges-into-opportunities",
    category: "Business Growth",
    date: "October 12, 2026",
    readTime: "4 min read",
    title: "Turning Challenges into Opportunities",
    excerpt:
      "Discover practical ways to overcome challenges and identify new growth opportunities.",
    image: "assets/HFC_images/intro.webp",
    intro: [
      "Every organization faces obstacles. What separates successful ones is how they respond: by looking for what the challenge can teach and where it can lead.",
    ],
    sections: [
      {
        title: "Name the Real Problem",
        text: [
          "Look beyond the symptoms. Gather facts, listen to your team, and identify the root cause before choosing a solution.",
        ],
      },
      {
        title: "Look for the Opening",
        text: [
          "A gap in the market, a customer complaint, or a failed process can point to a new service or a better way of working.",
        ],
      },
      {
        title: "Act in Small Steps",
        text: [
          "Test solutions quickly, measure the effect, and expand what works. Steady progress is safer than one large, risky change.",
        ],
      },
    ],
    conclusion: [
      "Challenges are unavoidable, but they do not have to hold a business back. With a clear method, they become the starting point for growth.",
    ],
  },
  {
    slug: "digital-transformation",
    category: "Digital Transformation",
    date: "October 8, 2026",
    readTime: "6 min read",
    title: "Digital Transformation: Where to Begin",
    excerpt:
      "A simple starting point for organizations that want to modernize their processes and technology.",
    image: "assets/HFC_images/Our Offered Services.webp",
    intro: [
      "Digital transformation is not about buying software. It is about improving how an organization works, serves its clients, and makes decisions.",
    ],
    sections: [
      {
        title: "Map Your Current Processes",
        text: [
          "Write down how work really flows today. Slow, repeated, or paper-based steps are the best places to start.",
        ],
      },
      {
        title: "Pick the Right Tools",
        text: [
          "Choose technology that fits your people and budget. A simple tool that everyone uses is better than an advanced one that nobody does.",
        ],
      },
      {
        title: "Train and Support Your Team",
        text: [
          "Change succeeds when people feel ready. Provide training, listen to feedback, and celebrate early wins.",
        ],
      },
    ],
    conclusion: [
      "Start small, learn quickly, and grow step by step. A well-planned digital transformation makes an organization faster, more transparent, and more resilient.",
    ],
  },
];

/* Link to one post page */
const postUrl = (post) => `blog-details.html?post=${post.slug}`;

/* Encode spaces in image file names (e.g. "Our Offered Services.webp") */
const imageSrc = (path) => encodeURI(path);

/* Small card used in the blog grid and in "Related articles" */
const cardHTML = (post) => `
  <article class="blog-card">
    <div class="media-fx"><img src="${imageSrc(post.image)}" alt="${post.title}" loading="lazy" /></div>
    <div class="blog-card-content">
      <div class="post-meta-row">
        <span class="category">${post.category}</span>
        <p class="blog-date">${post.date}</p>
      </div>
      <h3><a href="${postUrl(post)}">${post.title}</a></h3>
      <p>${post.excerpt}</p>
      <a class="text-link" href="${postUrl(post)}">Read More <span>→</span></a>
    </div>
  </article>`;

const gridBox = document.querySelector("#post-grid");

if (gridBox) {
  const featuredBox = document.querySelector("#post-featured");
  const filterBox = document.querySelector("#post-filters");
  const searchBox = document.querySelector("#post-search");
  const countLabel = document.querySelector("#post-count");
  const emptyMessage = document.querySelector("#post-empty");

  let activeCategory = "All";
  let searchText = "";

  /* Big card for the newest post */
  const featuredHTML = (post) => `
    <div class="featured-blog">
      <div class="featured-content">
        <span class="category">${post.category}</span>
        <p class="blog-date">${post.date} · ${post.readTime}</p>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a class="text-link" href="${postUrl(post)}">Read Article <span>→</span></a>
      </div>
      <div class="about-visual media-fx">
        <img src="${imageSrc(post.image)}" alt="${post.title}" />
        <span class="image-caption">Latest article</span>
      </div>
    </div>`;

  /* Draw the featured post and the grid for the current filter */
  const render = () => {
    const query = searchText.trim().toLowerCase();
    const matches = POSTS.filter(
      (post) =>
        (activeCategory === "All" || post.category === activeCategory) &&
        `${post.title} ${post.excerpt} ${post.category}`
          .toLowerCase()
          .includes(query),
    );

    /* The featured card only shows when nothing is filtered */
    const isFiltered = activeCategory !== "All" || query !== "";
    const showFeatured = !isFiltered && matches.length > 0;
    const gridPosts = showFeatured ? matches.slice(1) : matches;

    if (featuredBox) featuredBox.innerHTML = showFeatured ? featuredHTML(matches[0]) : "";
    gridBox.innerHTML = gridPosts.map(cardHTML).join("");
    if (countLabel) {
      countLabel.textContent = isFiltered
        ? `${matches.length} article${matches.length === 1 ? "" : "s"} found`
        : "Latest Insights";
    }
    if (emptyMessage) emptyMessage.hidden = matches.length > 0;
  };

  /* Category buttons are built from the posts, so new categories appear alone */
  const categories = ["All", ...new Set(POSTS.map((post) => post.category))];
  if (filterBox) {
    filterBox.innerHTML = categories
      .map(
        (name) =>
          `<button class="filter-chip" type="button" aria-pressed="${name === "All"}">${name}</button>`,
      )
      .join("");
  }

  if (filterBox) filterBox.addEventListener("click", (event) => {
    const chip = event.target.closest(".filter-chip");
    if (!chip) return;
    activeCategory = chip.textContent;
    filterBox
      .querySelectorAll(".filter-chip")
      .forEach((item) => item.setAttribute("aria-pressed", item === chip));
    render();
  });

  if (searchBox) searchBox.addEventListener("input", () => {
    searchText = searchBox.value;
    render();
  });

  render();
}

const articleBox = document.querySelector("#post-article");

if (articleBox) {
  /* Find the post from ?post=slug (falls back to the newest post) */
  const slug = new URLSearchParams(window.location.search).get("post");
  const index = Math.max(0, POSTS.findIndex((item) => item.slug === slug));
  const post = POSTS[index];

  /* Page title */
  document.title = `${post.title} | Hewad Future Consultancy`;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.content = post.excerpt;

  /* Top banner: breadcrumb, category, title, details */
  document.querySelector("#post-hero").innerHTML = `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="index.html">Home</a> / <a href="blog.html">Blog</a>
    </nav>
    <span class="category">${post.category}</span>
    <h1>${post.title}</h1>
    <div class="article-meta">
      <span>📅 ${post.date}</span>
      <span>⏱ ${post.readTime}</span>
      <span>✍ Business Consulting Team</span>
    </div>`;

  /* Newer / older post for the bottom buttons */
  const newer = POSTS[index - 1];
  const older = POSTS[index + 1];
  const navLink = (item, label, side) =>
    item
      ? `<a class="${side}" href="${postUrl(item)}"><small>${label}</small><strong>${item.title}</strong></a>`
      : "<span></span>";

  /* Article body */
  articleBox.innerHTML = `
    <div class="media-fx featured-frame"><img class="featured-image" src="${imageSrc(post.image)}" alt="${post.title}" /></div>

    <div class="author-box">
      <div class="author-info">
        <img class="author-avatar" src="assets/logo/hfc-logo.svg" alt="" />
        <div>
          <strong>Hewad Future Consultancy</strong>
          <p>Business Consulting Team</p>
        </div>
      </div>
      <div class="share-buttons" aria-label="Share this article">
        <a data-share="linkedin" href="#" target="_blank" rel="noopener">LinkedIn</a>
        <a data-share="whatsapp" href="#" target="_blank" rel="noopener">WhatsApp</a>
        <button type="button" data-share="copy">Copy link</button>
      </div>
    </div>

    <div class="article-body">
      ${post.intro.map((text, i) => `<p${i === 0 ? ' class="article-lead"' : ""}>${text}</p>`).join("")}
      ${post.sections
        .map(
          (section, i) => `
        <section>
          <h2 id="section-${i + 1}">${section.title}</h2>
          ${section.text.map((text) => `<p>${text}</p>`).join("")}
        </section>`,
        )
        .join("")}
      <section class="article-conclusion">
        <h2>Conclusion</h2>
        ${post.conclusion.map((text) => `<p>${text}</p>`).join("")}
      </section>
    </div>

    <div class="post-nav">
      ${navLink(newer, "← Newer article", "prev")}
      ${navLink(older, "Older article →", "next")}
    </div>
    <a class="text-link back-link" href="blog.html"><span>←</span> Back to all articles</a>`;

  /* "In this article" list in the sidebar */
  document.querySelector("#post-toc").innerHTML = post.sections
    .map(
      (section, i) =>
        `<li><a href="#section-${i + 1}">${section.title}</a></li>`,
    )
    .join("");

  /* Related articles: same category first, then the newest others */
  const related = POSTS.filter((item) => item !== post)
    .sort((a, b) => (b.category === post.category) - (a.category === post.category))
    .slice(0, 3);
  document.querySelector("#post-related").innerHTML = related
    .map(cardHTML)
    .join("");

  /* Share buttons */
  const pageUrl = encodeURIComponent(window.location.href);
  articleBox.querySelector('[data-share="linkedin"]').href =
    `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
  articleBox.querySelector('[data-share="whatsapp"]').href =
    `https://wa.me/?text=${encodeURIComponent(post.title)}%20${pageUrl}`;

  const copyButton = articleBox.querySelector('[data-share="copy"]');
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      copyButton.textContent = "Link copied ✓";
    } catch (error) {
      copyButton.textContent = "Copy failed";
    }
    setTimeout(() => (copyButton.textContent = "Copy link"), 2000);
  });

  /* Reading progress bar at the top of the screen */
  const progressBar = document.querySelector(".reading-progress span");
  const updateProgress = () => {
    const box = articleBox.getBoundingClientRect();
    const scrolled = -box.top + window.innerHeight * 0.3;
    const percent = Math.min(100, Math.max(0, (scrolled / box.height) * 100));
    progressBar.style.width = `${percent}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* Highlight the section being read in the contents list */
  if ("IntersectionObserver" in window) {
    const links = document.querySelectorAll("#post-toc a");
    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) =>
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`,
            ),
          );
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    articleBox.querySelectorAll("h2[id]").forEach((h) => headingObserver.observe(h));
  }
}

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

// Navbar stays in its original fixed position and appearance while scrolling.

/* Add a page-ready state for tasteful entrance motion. */
document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => document.body.classList.add("page-ready"));
});

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

/* Theme-aware Vanta NET background – connected network nodes.
   Professional look for consultancy: links, strategy, partnerships.
   Adapts to light/dark theme and respects reduced-motion. */
(() => {
  const host = document.getElementById('hfc-halo-background');
  if (!host) return;

  let effect;
  // Keep the ambient background active even when the OS requests reduced motion;
  // this site explicitly uses the animated background as a core visual element.
  const getTheme = () =>
    document.documentElement.getAttribute('data-theme') ||
    (document.documentElement.classList.contains('dark') ? 'dark' : 'light');

  function netOptions(dark) {
    return {
      el: host,
      THREE: window.THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 0.85,
      color: dark ? 0x4f91e8 : 0x2364d9,
      backgroundColor: dark ? 0x0b1220 : 0xf5f8fc,
      points: dark ? 11 : 10,
      maxDistance: dark ? 22 : 20,
      spacing: dark ? 16 : 18,
      showDots: true
    };
  }

  function startNet(attempt) {
    if (effect) return;
    if (!window.THREE || !window.VANTA || typeof window.VANTA.NET !== 'function') {
      // CDN scripts may still be parsing; retry a few times
      if ((attempt || 0) < 40) {
        setTimeout(() => startNet((attempt || 0) + 1), 50);
      }
      return;
    }
    const dark = getTheme() === 'dark';
    try {
      effect = window.VANTA.NET(netOptions(dark));
    } catch (error) {
      console.warn('Vanta background could not be initialized; the page will continue without it.', error);
    }
  }

  function updateTheme() {
    if (!effect) {
      startNet();
      return;
    }
    const dark = getTheme() === 'dark';
    try {
      effect.setOptions({
        color: dark ? 0x4f91e8 : 0x2364d9,
        backgroundColor: dark ? 0x0b1220 : 0xf5f8fc,
        points: dark ? 11 : 10,
        maxDistance: dark ? 22 : 20,
        spacing: dark ? 16 : 18
      });
    } catch (error) {
      console.warn('Vanta background could not update its theme.', error);
    }
  }

  window.addEventListener('DOMContentLoaded', () => startNet(), { once: true });
  if (document.readyState !== 'loading') startNet();

  new MutationObserver(updateTheme).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme', 'class']
  });

  // Do not destroy the background when the OS reduced-motion preference changes.
  // The Vanta layer is intentionally kept visible across all pages and scroll positions.
})();

/* Lightweight page-load + repeat-on-scroll motion for the home page. */
(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sections = [...document.querySelectorAll('#main > section')];
  if (!sections.length || reduced) return;

  document.documentElement.classList.add('motion-ready');
  sections.forEach((section, index) => {
    section.classList.add('section-reveal');
    section.style.setProperty('--reveal-delay', `${Math.min(index * 70, 280)}ms`);
  });

  // Hero enters on every fresh page load.
  const hero = sections[0];
  if (hero) requestAnimationFrame(() => hero.classList.add('is-visible'));

  if (!('IntersectionObserver' in window)) {
    sections.forEach(section => section.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-visible');
        // Restart the animation every time this section scrolls into view.
        void entry.target.offsetWidth;
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, { threshold: 0.18 });

  sections.slice(1).forEach(section => observer.observe(section));
})();
