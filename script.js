const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  const revealElements = document.querySelectorAll(
    '.hero-grid > div, .hero-card, .section-head, .panel, .project, .skill-card, .cert-card'
  );
  revealElements.forEach(element => {
    element.classList.add('reveal');
    revealObserver.observe(element);
  });
  document.body.classList.add('reveal-ready');
}
