(() => {
  const links = [...document.querySelectorAll('[data-scroll]')];
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const printButtons = document.querySelectorAll('[data-print]');
  printButtons.forEach((button) => {
    button.addEventListener('click', () => window.print());
  });

  const sections = [...document.querySelectorAll('[data-section]')];
  const indexLinks = [...document.querySelectorAll('[data-index-link]')];
  if (sections.length && indexLinks.length && 'IntersectionObserver' in window) {
    const setActive = (id) => {
      indexLinks.forEach((item) => {
        const active = item.getAttribute('href') === `#${id}`;
        item.classList.toggle('is-active', active);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          .forEach((entry) => setActive(entry.target.id));
      },
      { rootMargin: '-15% 0px -60% 0px', threshold: [0.2, 0.5, 0.8] }
    );

    sections.forEach((section) => observer.observe(section));
  }
})();
