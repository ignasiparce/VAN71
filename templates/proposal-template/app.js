async function loadProposalData() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('No se pudo cargar data.json');
    return response.json();
  } catch {
    return {
      proposal: {
        title: 'Propuesta de servicios',
        date: '2026-01-15',
      },
      client: {
        name: 'Cliente Demo',
        contact: 'Nombre contacto',
        email: 'cliente@example.com',
      },
      vendor: {
        name: 'Tu Agencia',
        email: 'hello@tuagencia.com',
      },
      project: {
        name: 'Proyecto Demo',
        overview:
          'Resumen ejecutivo del proyecto con objetivos, contexto y oportunidad.',
        scope: ['Definición estratégica', 'Diseño', 'Implementación', 'QA'],
        deliverables: ['Research report', 'Wireframes', 'UI kit', 'Deployment checklist'],
        phases: [
          { name: 'Descubrimiento', duration: 'Semana 1', details: 'Kickoff y levantamiento.' },
          { name: 'Producción', duration: 'Semana 2-4', details: 'Ejecución principal.' },
          { name: 'Cierre', duration: 'Semana 5', details: 'Entrega y handoff.' },
        ],
      },
      pricing: {
        currency: 'USD',
        budget: 18500,
        paymentTerms: '50% anticipo / 30% mitad / 20% entrega final',
        notes: ['Validez de oferta: 30 días', 'Impuestos no incluidos'],
      },
      terms: [
        'Incluye dos rondas de feedback por entregable.',
        'Cambios fuera de alcance se cotizan por separado.',
        'Tiempo de respuesta estimado: 24-48h hábiles.',
      ],
    };
  }
}

function money(value, currency) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency }).format(value);
}

function renderList(targetId, items) {
  const el = document.getElementById(targetId);
  el.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
}

function renderProposal(data) {
  document.getElementById('proposalTitle').textContent = data.proposal.title;
  document.getElementById('proposalMeta').textContent = `Fecha: ${data.proposal.date}`;
  document.getElementById('overviewText').textContent = data.project.overview;
  document.getElementById('clientName').textContent = data.client.name;
  document.getElementById('projectName').textContent = data.project.name;

  renderList('scopeList', data.project.scope);

  document.getElementById('deliverablesGrid').innerHTML = data.project.deliverables
    .map((item) => `<article class="mini-card"><h3>${item}</h3></article>`)
    .join('');

  document.getElementById('timelineList').innerHTML = data.project.phases
    .map(
      (phase) => `
      <article class="phase">
        <strong>${phase.name}</strong>
        <div class="meta">${phase.duration}</div>
        <p>${phase.details}</p>
      </article>
    `,
    )
    .join('');

  document.getElementById('budget').textContent = money(data.pricing.budget, data.pricing.currency);
  document.getElementById('paymentTerms').textContent = data.pricing.paymentTerms;
  renderList('termsList', data.terms);
  document.getElementById('pricingNotes').innerHTML =
    '<ul class="list">' + data.pricing.notes.map((note) => `<li>${note}</li>`).join('') + '</ul>';

  document.getElementById('vendorName').textContent = data.vendor.name;
  document.getElementById('vendorEmail').textContent = data.vendor.email;
  document.getElementById('clientContact').textContent = data.client.contact;
  document.getElementById('clientEmail').textContent = data.client.email;
}

function setupActions() {
  const body = document.body;
  const modeBtn = document.getElementById('modeToggle');
  const printBtn = document.getElementById('printBtn');

  modeBtn.addEventListener('click', () => {
    const printing = body.classList.toggle('print-mode');
    body.classList.toggle('presentation-mode', !printing);
    modeBtn.textContent = printing ? 'Modo presentación' : 'Modo impresión A4';
  });

  printBtn.addEventListener('click', () => {
    window.print();
  });
}

(async function init() {
  const data = await loadProposalData();
  renderProposal(data);
  setupActions();
})();
