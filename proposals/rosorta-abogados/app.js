const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const printButtons = [document.getElementById('printBtn'), document.getElementById('printBtnSecondary')].filter(Boolean);
printButtons.forEach((btn) => btn.addEventListener('click', () => window.print()));

const mobileDrawer = document.getElementById('mobileDrawer');
const openNavBtn = document.getElementById('openNav');
const closeNavBtn = document.getElementById('closeNav');
const railNav = document.querySelector('.rail__nav');
const drawerNav = document.querySelector('.drawer__nav');

if (railNav && drawerNav) {
  drawerNav.innerHTML = railNav.innerHTML;
}

function setDrawerState(isOpen) {
  if (!mobileDrawer) return;
  mobileDrawer.classList.toggle('is-open', isOpen);
  mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
}

openNavBtn?.addEventListener('click', () => setDrawerState(true));
closeNavBtn?.addEventListener('click', () => setDrawerState(false));
mobileDrawer?.addEventListener('click', (event) => {
  if (event.target === mobileDrawer) setDrawerState(false);
});

const navAnchors = [...document.querySelectorAll('.rail__nav a, .drawer__nav a')];
navAnchors.forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const href = anchor.getAttribute('href');
    if (!href?.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    setDrawerState(false);
  });
});

const sections = [...document.querySelectorAll('[data-section]')];
function setActiveLink(id) {
  navAnchors.forEach((anchor) => {
    const active = anchor.getAttribute('href') === id;
    anchor.classList.toggle('is-active', active);
  });
}

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        .forEach((entry) => setActiveLink(`#${entry.target.id}`));
    },
    { rootMargin: '-20% 0px -60% 0px', threshold: [0.2, 0.5, 0.8] }
  );
  sections.forEach((section) => observer.observe(section));
} else {
  window.addEventListener('scroll', () => {
    let current = sections[0]?.id;
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 180) current = section.id;
    });
    if (current) setActiveLink(`#${current}`);
  });
}

const progressBar = document.getElementById('progressBar');
const updateProgress = () => {
  if (!progressBar) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

const accordionTriggers = [...document.querySelectorAll('.accordion-trigger')];
const toggleAllButton = document.getElementById('toggleAll');

function setAccordionState(trigger, shouldOpen) {
  const panelId = trigger.getAttribute('aria-controls');
  const panel = panelId ? document.getElementById(panelId) : null;
  trigger.setAttribute('aria-expanded', String(shouldOpen));
  panel?.classList.toggle('is-open', shouldOpen);
}

accordionTriggers.forEach((trigger) => {
  const onToggle = () => {
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    setAccordionState(trigger, !isOpen);
  };
  trigger.addEventListener('click', onToggle);
  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle();
    }
  });
});

toggleAllButton?.addEventListener('click', () => {
  const shouldOpenAll = toggleAllButton.getAttribute('aria-pressed') !== 'true';
  accordionTriggers.forEach((trigger) => setAccordionState(trigger, shouldOpenAll));
  toggleAllButton.setAttribute('aria-pressed', String(shouldOpenAll));
  toggleAllButton.textContent = shouldOpenAll ? 'Collapse all' : 'Expand all';
});

const tabs = [...document.querySelectorAll('.timeline-tab')];
const panels = [...document.querySelectorAll('.timeline-panel')];
function activateTab(targetTab) {
  tabs.forEach((tab) => {
    const active = tab === targetTab;
    tab.setAttribute('aria-selected', String(active));
  });

  panels.forEach((panel) => {
    const active = panel.id === targetTab.getAttribute('aria-controls');
    panel.hidden = !active;
    panel.classList.toggle('is-active', active);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => activateTab(tab));
});

const pricingButtons = [...document.querySelectorAll('[data-pricing-view]')];
const pricingCards = [...document.querySelectorAll('.pricing-card')];
pricingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const view = button.getAttribute('data-pricing-view');
    pricingButtons.forEach((btn) => btn.classList.toggle('is-active', btn === button));
    pricingCards.forEach((card) => {
      const shouldDim = view === 'oneoff' ? card.dataset.type === 'monthly' : card.dataset.type === 'oneoff';
      card.classList.toggle('is-dim', shouldDim);
    });
  });
});

const params = new URLSearchParams(window.location.search);
if (params.get('print') === '1') {
  window.addEventListener('load', () => window.print());
}
