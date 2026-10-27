/* =====================================================================
   blog.js — builds the blog list (blog.html) and the post page
   (blog-details.html) from the POSTS array in posts.js.
   ===================================================================== */

/* ---------- Helpers shared by both pages ---------- */

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

/* ---------- 1. BLOG LIST PAGE: search + category filter ---------- */

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

    featuredBox.innerHTML = showFeatured ? featuredHTML(matches[0]) : "";
    gridBox.innerHTML = gridPosts.map(cardHTML).join("");
    countLabel.textContent = isFiltered
      ? `${matches.length} article${matches.length === 1 ? "" : "s"} found`
      : "Latest Insights";
    emptyMessage.hidden = matches.length > 0;
  };

  /* Category buttons are built from the posts, so new categories appear alone */
  const categories = ["All", ...new Set(POSTS.map((post) => post.category))];
  filterBox.innerHTML = categories
    .map(
      (name) =>
        `<button class="filter-chip" type="button" aria-pressed="${name === "All"}">${name}</button>`,
    )
    .join("");

  filterBox.addEventListener("click", (event) => {
    const chip = event.target.closest(".filter-chip");
    if (!chip) return;
    activeCategory = chip.textContent;
    filterBox
      .querySelectorAll(".filter-chip")
      .forEach((item) => item.setAttribute("aria-pressed", item === chip));
    render();
  });

  searchBox.addEventListener("input", () => {
    searchText = searchBox.value;
    render();
  });

  render();
}

/* ---------- 2. POST PAGE: article, contents list, share, progress ---------- */

const articleBox = document.querySelector("#post-article");

if (articleBox) {
  /* Find the post from ?post=slug (falls back to the newest post) */
  const slug = new URLSearchParams(window.location.search).get("post");
  const index = Math.max(0, POSTS.findIndex((item) => item.slug === slug));
  const post = POSTS[index];

  /* Page title */
  document.title = `${post.title} | Hewad Future Consultancy`;
  document.querySelector('meta[name="description"]').content = post.excerpt;

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
