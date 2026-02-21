(function () {
  const progress = document.querySelector('[data-progress]');
  const progressFill = progress?.querySelector('span');

  function updateProgress() {
    if (!progressFill) return;
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const value = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressFill.style.width = `${Math.min(100, Math.max(0, value))}%`;
  }

  const spyLinks = Array.from(document.querySelectorAll('[data-spy-link]'));
  const spySections = spyLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (spySections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = `#${entry.target.id}`;
          spyLinks.forEach((link) => {
            const active = link.getAttribute('href') === id;
            link.classList.toggle('active', active);
            if (active) link.setAttribute('aria-current', 'true');
            else link.removeAttribute('aria-current');
          });
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    spySections.forEach((section) => observer.observe(section));
  }

  const rail = document.querySelector('[data-rail]');
  const toggleButtons = document.querySelectorAll('[data-rail-toggle]');
  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const isOpen = rail?.classList.toggle('open');
      if (rail) rail.setAttribute('aria-hidden', String(!isOpen));
    });
  });
  spyLinks.forEach((link) => {
    link.addEventListener('click', () => rail?.classList.remove('open'));
  });

  const accordionTriggers = Array.from(document.querySelectorAll('[data-accordion-trigger]'));
  function setAccordion(trigger, expand) {
    const controls = trigger.getAttribute('aria-controls');
    const panel = controls ? document.getElementById(controls) : null;
    if (!panel) return;
    trigger.setAttribute('aria-expanded', String(expand));
    panel.hidden = false;
    panel.style.maxHeight = expand ? `${panel.scrollHeight}px` : '0px';
    if (!expand) {
      window.setTimeout(() => {
        if (trigger.getAttribute('aria-expanded') === 'false') panel.hidden = true;
      }, 200);
    }
  }

  accordionTriggers.forEach((trigger) => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    setAccordion(trigger, expanded);
    trigger.addEventListener('click', () => {
      const expand = trigger.getAttribute('aria-expanded') !== 'true';
      setAccordion(trigger, expand);
    });
  });

  const expandAll = document.querySelector('[data-expand-all]');
  const collapseAll = document.querySelector('[data-collapse-all]');
  expandAll?.addEventListener('click', () => accordionTriggers.forEach((trigger) => setAccordion(trigger, true)));
  collapseAll?.addEventListener('click', () => accordionTriggers.forEach((trigger) => setAccordion(trigger, false)));

  const timelineButtons = Array.from(document.querySelectorAll('[data-timeline-btn]'));
  const timelinePanels = Array.from(document.querySelectorAll('[data-timeline-panel]'));
  timelineButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      timelineButtons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      timelinePanels.forEach((panel) => panel.classList.toggle('active', panel.id === target));
    });
  });

  const pricingToggle = document.querySelector('[data-pricing-toggle]');
  if (pricingToggle) {
    pricingToggle.addEventListener('change', () => {
      const yearly = pricingToggle.checked;
      document.querySelectorAll('[data-price-monthly]').forEach((el) => {
        const value = yearly ? el.getAttribute('data-price-yearly') : el.getAttribute('data-price-monthly');
        if (value) el.textContent = value;
      });
      document.querySelectorAll('[data-price-period]').forEach((el) => {
        el.textContent = yearly ? '/trimestre' : '/mes';
      });
    });
  }

  document.querySelectorAll('[data-print]').forEach((button) => {
    button.addEventListener('click', () => window.print());
  });

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', () => accordionTriggers.forEach((t) => setAccordion(t, t.getAttribute('aria-expanded') === 'true')));
})();
