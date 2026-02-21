const proposals = [
  {
    title: "Rosorta Abogados",
    client: "Rosorta Abogados",
    sector: "Legal",
    status: "Published",
    services: ["Web Proposal", "UX Direction", "A4 Print"],
    lastUpdated: "2026-02-20",
    href: "/proposals/rosorta-abogados/",
  },
];

const proposalsGrid = document.getElementById("proposals-grid");
const clientsGrid = document.getElementById("clients-grid");
const filterInput = document.getElementById("client-filter");
const proposalsCount = document.getElementById("proposals-count");
const clientsCount = document.getElementById("clients-count");

function formatDate(dateValue) {
  const date = new Date(`${dateValue}T00:00:00`);
  return Number.isNaN(date.getTime())
    ? dateValue
    : date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
}

function createCard(item) {
  const services = item.services
    .map((service) => `<span class="chip">${service}</span>`)
    .join("");

  return `
    <article class="card">
      <h3 class="card-title">${item.title}</h3>
      <dl class="card-meta">
        <div class="meta-row"><dt class="meta-label">Client</dt><dd>${item.client}</dd></div>
        <div class="meta-row"><dt class="meta-label">Sector</dt><dd>${item.sector}</dd></div>
        <div class="meta-row"><dt class="meta-label">Status</dt><dd>${item.status}</dd></div>
        <div class="meta-row"><dt class="meta-label">Services</dt><dd class="chips">${services}</dd></div>
        <div class="meta-row"><dt class="meta-label">Last Updated</dt><dd>${formatDate(item.lastUpdated)}</dd></div>
      </dl>
      <div class="card-actions">
        <a class="button" href="${item.href}">Open Proposal</a>
        <a class="button secondary" href="${item.href}?print=1" data-print-link="${item.href}">Print A4</a>
      </div>
    </article>
  `;
}

function renderCards(items) {
  const markup = items.map(createCard).join("");
  proposalsGrid.innerHTML = markup;
  clientsGrid.innerHTML = markup;

  const quantity = `${items.length} item${items.length === 1 ? "" : "s"}`;
  proposalsCount.textContent = quantity;
  clientsCount.textContent = quantity;

  document.querySelectorAll("[data-print-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = event.currentTarget.getAttribute("data-print-link");
      const printUrl = `${target}${target.includes("?") ? "&" : "?"}print=1`;
      window.open(printUrl, "_blank", "noopener");
    });
  });
}

function filterItems(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    renderCards(proposals);
    return;
  }

  const filtered = proposals.filter((item) =>
    item.client.toLowerCase().includes(normalized),
  );
  renderCards(filtered);
}

filterInput.addEventListener("input", (event) => {
  filterItems(event.target.value);
});

renderCards(proposals);
