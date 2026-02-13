// docs/javascripts/scroll-in.js
document.addEventListener("DOMContentLoaded", () => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  const targets = document.querySelectorAll(".slubi-reveal");
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        obs.unobserve(e.target);
      }
    }
  }, { threshold: 0.15 });

  targets.forEach(t => observer.observe(t));
});
