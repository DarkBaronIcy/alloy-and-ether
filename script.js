const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}
const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
const revealTargets = document.querySelectorAll(".project-card, .service-row, .process-grid article, .work-note, .contact-panel");
revealTargets.forEach((el) => el.classList.add("reveal"));
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
}