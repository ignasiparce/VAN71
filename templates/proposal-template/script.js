(function renderProposal(data) {
  const title = document.getElementById("cover-title");
  const subtitle = document.getElementById("cover-subtitle");
  const coreServiceName = document.getElementById("core-service-name");
  const accordion = document.getElementById("services-accordion");
  const timelineList = document.getElementById("timeline-list");
  const investmentGrid = document.getElementById("investment-grid");
  const investmentTotal = document.getElementById("investment-total");

  title.textContent = `Propuesta para ${data.cliente.nombre}`;
  subtitle.textContent = `Fecha: ${data.cliente.fecha}`;
  coreServiceName.textContent = data.serviciosActivos[0]?.nombre || "Por definir";

  data.serviciosActivos.forEach((servicio, index) => {
    const details = document.createElement("details");
    details.className = "accordion-item";
    if (index === 0) details.open = true;

    const summary = document.createElement("summary");
    summary.innerHTML = `<span>${servicio.nombre}</span><span>${data.precios.moneda} ${servicio.precio}</span>`;

    const body = document.createElement("div");
    body.className = "accordion-body";

    const description = document.createElement("p");
    description.textContent = servicio.descripcion;

    const deliverablesTitle = document.createElement("h4");
    deliverablesTitle.textContent = "Entregables";

    const deliverablesList = document.createElement("ul");
    servicio.entregables.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      deliverablesList.appendChild(li);
    });

    body.append(description, deliverablesTitle, deliverablesList);
    details.append(summary, body);
    accordion.appendChild(details);

    const priceCard = document.createElement("article");
    priceCard.className = "mini-card";
    priceCard.innerHTML = `<h3>${servicio.nombre}</h3><p>${data.precios.moneda} ${servicio.precio}</p>`;
    investmentGrid.appendChild(priceCard);
  });

  data.timeline.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.fase}</strong><span>${item.periodo}</span>`;
    timelineList.appendChild(li);
  });

  const total = data.serviciosActivos.reduce((acc, service) => acc + service.precio, 0);
  investmentTotal.textContent = `Total estimado: ${data.precios.moneda} ${total} · ${data.precios.impuestos}`;
})(proposalData);
