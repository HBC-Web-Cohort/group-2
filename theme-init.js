/* Theme bootstrap – runs before CSS so the correct theme appears immediately. */
(() => {
  const root = document.documentElement;
  const valid = new Set(["dark", "light"]);

  try {
    const saved = localStorage.getItem("hfc-theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    root.dataset.theme = valid.has(saved) ? saved : system;
  } catch (error) {
    root.dataset.theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
})();
