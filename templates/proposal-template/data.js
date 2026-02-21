const proposalData = {
  cliente: {
    nombre: "Cliente Ejemplo S.A.",
    fecha: "Febrero 2026"
  },
  serviciosActivos: [
    {
      nombre: "Brand Strategy",
      descripcion:
        "Diagnóstico estratégico, definición de posicionamiento y arquitectura de marca.",
      entregables: ["Workshop inicial", "Mapa de posicionamiento", "Plan de activación"],
      precio: 2200
    },
    {
      nombre: "Editorial Content System",
      descripcion:
        "Diseño del sistema de contenidos con lineamientos editoriales y calendario operativo.",
      entregables: ["Guía editorial", "Plantillas maestras", "Calendario trimestral"],
      precio: 1800
    },
    {
      nombre: "Performance Reporting",
      descripcion:
        "Implementación de tablero de métricas y reporte de performance para seguimiento continuo.",
      entregables: ["Dashboard base", "Reporte mensual", "Recomendaciones"],
      precio: 1200
    }
  ],
  precios: {
    moneda: "USD",
    impuestos: "No incluidos"
  },
  timeline: [
    { fase: "Fase 1 · Descubrimiento", periodo: "Semana 1" },
    { fase: "Fase 2 · Estrategia", periodo: "Semana 2-3" },
    { fase: "Fase 3 · Implementación", periodo: "Semana 4-6" },
    { fase: "Fase 4 · Optimización", periodo: "Semana 7-8" }
  ]
};
