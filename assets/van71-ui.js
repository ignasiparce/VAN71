(() => {
  const smoothLinks = document.querySelectorAll('[data-scroll]');
  smoothLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || !targetId.startsWith('#')) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const trackedSections = [...document.querySelectorAll('[data-section]')];
  const navLinks = [...document.querySelectorAll('[data-index-link]')];
  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
  };

  if (trackedSections.length && navLinks.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          .forEach((entry) => setActive(entry.target.id));
      },
      { rootMargin: '-15% 0px -60% 0px', threshold: [0.2, 0.45, 0.8] }
    );
    trackedSections.forEach((section) => observer.observe(section));
  }

  const accordions = document.querySelectorAll('[data-accordion]');
  accordions.forEach((item) => {
    const trigger = item.querySelector('.accordion__trigger');
    const panel = item.querySelector('.accordion__content');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
  });

  document.querySelectorAll('[data-print]').forEach((button) => {
    button.addEventListener('click', () => window.print());
  });
})();
