export const siteContent = {
  business: {
    name: "Gents Club",
    subtitle: "Barberia clasica para caballeros",
    owner: "Charly",
    city: "Lerdo, Durango",
    address: "Blvd. Miguel Aleman 356, Lerdo, Durango",
    phone: "+52 871 449 4965",
    whatsapp: "5218714494965",
    specialty: "Cortes clásicos y modernos para caballero",
    socials: [
      { id: "instagram", label: "Instagram", handle: "studio_gentsclub", url: "https://instagram.com/studio_gentsclub" },
      { id: "facebook", label: "Facebook", handle: "Gent's Club Studio", url: "https://www.facebook.com/profile.php?id=100063451667987" },
      { id: "tiktok", label: "TikTok", handle: "studiogentsclub", url: "https://www.tiktok.com/@studiogentsclub" }
    ],
    weekdays: "Lunes a Sabado",
    hours: "11:00 AM - 8:00 PM",
    sunday: "Cerrado",
    founded: "2011",
    heroTagline: "Corte directo con tu barbero. Solo WhatsApp. Sin espera.",
    heroDescription:
      "Barbería clásica en Lerdo para hombres que quieren llegar, sentarse y salir bien cortados. Agenda directo por WhatsApp con el equipo de Gent's Club.",
    mapQuery: "Blvd. Miguel Aleman 356 Lerdo Durango Mexico",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Blvd.%20Miguel%20Aleman%20356%20Lerdo%20Durango%20Mexico"
  },
  booking: {
    badge: "Cómo agendar",
    title: "Tu próxima cita en",
    titleAccent: "cuatro pasos",
    subtitle: "Sin llamadas, sin formularios. Solo un chat con nuestro asistente y la agenda del equipo a la mano.",
    steps: [
      {
        id: "escribe",
        icon: "whatsapp",
        eyebrow: "Inicio",
        title: "Escribe por WhatsApp",
        description: "Mándanos un mensaje y dinos qué servicio te interesa. Sin llamadas ni formularios.",
        meta: "30 segundos"
      },
      {
        id: "respuesta",
        icon: "bolt",
        eyebrow: "Asistente 24/7",
        title: "Respuesta inmediata",
        description: "Nuestro asistente contesta al instante, todos los días, a la hora que sea.",
        meta: "Al instante"
      },
      {
        id: "horario",
        icon: "calendar",
        eyebrow: "Agenda en vivo",
        title: "Horario real",
        description: "Revisa la agenda del equipo y elige el bloque que mejor te acomode.",
        meta: "1 minuto"
      },
      {
        id: "confirmada",
        icon: "check",
        eyebrow: "Listo",
        title: "Cita confirmada",
        description: "Recibes la confirmación con fecha, hora y dirección. Te esperamos.",
        meta: "Inmediata"
      }
    ],
    rulesTitle: "Para que tu cita salga perfecta",
    rules: [
      "Confirma tu asistencia si te lo pedimos el día anterior.",
      "Llega entre 5 y 10 minutos antes para empezar puntual.",
      "Con más de 15 minutos de retraso, la cita se cancela automáticamente.",
      "Si necesitas cancelar o mover tu cita, avísanos con al menos 4 horas de anticipación."
    ]
  },
  amenities: [
    {
      id: "estaciones",
      title: "Estaciones profesionales",
      description: "Sillas y herramientas de barbería profesional para un trabajo limpio y preciso."
    },
    {
      id: "espera",
      title: "Espera cómoda",
      description: "Espacio sobrio para esperar tu turno sin prisa y con buen ambiente."
    },
    {
      id: "bebida",
      title: "Cortesía de la casa",
      description: "Café o bebida fría para acompañar tu visita mientras te atendemos."
    },
    {
      id: "productos",
      title: "Productos premium",
      description: "Ceras, aceites y lociones de calidad para acabados duraderos."
    },
    {
      id: "ambiente",
      title: "Ambiente sobrio",
      description: "Música, iluminación y decoración pensadas para una experiencia masculina y relajada."
    },
    {
      id: "estacionamiento",
      title: "Llegada sencilla",
      description: "Ubicación accesible sobre Blvd. Miguel Alemán con lugar para estacionarte sin complicaciones."
    }
  ],
  about: {
    badge: "La barbería",
    title: "Barbería clásica, trato directo y agenda simple.",
    paragraphs: [
      "En Gent's Club te atiende un equipo de seis barberos, cada uno con su especialidad y el mismo cuidado en el detalle.",
      "Aquí no hay vueltas: revisas horario por WhatsApp, confirmas tu cita y llegas a un espacio sobrio y bien cuidado."
    ],
    stats: [
      { label: "Años de oficio", value: "13+" },
      { label: "Barberos en el equipo", value: "6" }
    ]
  },
  services: [
    {
      id: "corte-clasico",
      name: "Corte clasico y moderno",
      price: 200,
      duration: "45 min",
      description: "Corte adaptado a tu rutina y tipo de cabello, con acabado limpio y proporción precisa."
    },
    {
      id: "barba",
      name: "Arreglo de barba",
      price: 200,
      duration: "30 min",
      description: "Perfilado y definición para que la barba se vea pareja y con mejor estructura."
    },
    {
      id: "afeitado",
      name: "Afeitado clasico",
      price: 150,
      duration: "30 min",
      description: "Afeitado al ras con preparación cuidadosa y acabado fresco."
    },
    {
      id: "ceja",
      name: "Limpieza de ceja",
      price: 50,
      duration: "10 min",
      description: "Ajuste sutil para ordenar la mirada sin endurecer la expresión."
    }
  ],
  gallery: [
    {
      id: "fade-barba",
      title: "Fade y barba",
      category: "Corte",
      caption: "Degradado limpio, nuca cerrada y transición pareja.",
      image: "/images/charly/corte-fade-barba.jpg"
    },
    {
      id: "fade-disenio",
      title: "Fade con diseño",
      category: "Corte",
      caption: "Línea marcada, fade alto y acabado parejo.",
      image: "/images/charly/corte-fade-disenio.jpg"
    },
    {
      id: "barba-volumen",
      title: "Barba con fade",
      category: "Barba",
      caption: "Skin fade y barba con cuerpo. Definición sin perder presencia.",
      image: "/images/charly/barba-volumen.jpg"
    },
    {
      id: "clasico-fade",
      title: "Clásico con fade",
      category: "Corte",
      caption: "Peinado clásico hacia atrás con fade marcado.",
      image: "/images/charly/corte-clasico-fade.jpg"
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Carlos M.",
      rating: 5,
      text: "Le escribí por WhatsApp, me dio horario ese mismo día y el corte quedó como lo quería.",
      service: "Corte + barba"
    },
    {
      id: 2,
      name: "Roberto S.",
      rating: 5,
      text: "Charly trabaja con calma, entiende lo que le pides y no te despacha con prisa.",
      service: "Corte clasico"
    },
    {
      id: 3,
      name: "Luis T.",
      rating: 5,
      text: "La cita fue directa, sin llamadas ni vueltas. Llegué a mi hora y me atendió sin retraso.",
      service: "Agenda por WhatsApp"
    }
  ],
  team: {
    badge: "Nuestro equipo",
    title: "Seis barberos. Un mismo estándar.",
    subtitle:
      "Cada quien con su especialidad, todos con el mismo cuidado en el detalle. Agenda tu cita por WhatsApp.",
    members: [
      {
        id: "charly",
        name: "Charly",
        role: "Fundador · Barbero principal",
        specialty: "Cortes clásicos, fades y asesoría de estilo",
        image: "/images/charly/charly.jpg",
        instagram: "https://instagram.com/studio_gentsclub"
      },
      {
        id: "ale",
        name: "Ale",
        role: "Barbero",
        specialty: "Fades y diseños con línea",
        image: "/images/stock/barbero-ale.jpg"
      },
      {
        id: "ricky",
        name: "Ricky",
        role: "Barbero",
        specialty: "Barba y afeitado clásico",
        image: "/images/stock/barbero-ricky.jpg"
      },
      {
        id: "diego",
        name: "Diego",
        role: "Barbero",
        specialty: "Cortes modernos y texturizados",
        image: "/images/stock/barbero-diego.jpg"
      },
      {
        id: "carlos",
        name: "Carlos",
        role: "Barbero",
        specialty: "Corte de caballero y niño"
      },
      {
        id: "jesus",
        name: "Jesús",
        role: "Barbero",
        specialty: "Degradados y perfilado de barba"
      }
    ]
  },
  facilities: {
    badge: "El lugar",
    title: "Un espacio pensado para sentirte cómodo.",
    subtitle:
      "Estaciones profesionales, ambiente sobrio y la atención directa que hizo de Gent's Club un clásico en Lerdo.",
    note: "Fotos reales del local en Lerdo, Durango.",
    images: [
      { src: "/images/stock/instalaciones-1.jpg", alt: "Sala de espera de Gent's Club", caption: "Sala de espera", span: "wide" },
      { src: "/images/stock/instalaciones-2.jpg", alt: "Mesa de futbolito en la sala de espera", caption: "Zona de juegos", span: "tall" },
      { src: "/images/stock/instalaciones-3.jpg", alt: "Pantalla con deportes en vivo", caption: "Pantalla en vivo", span: "tall" },
      { src: "/images/stock/instalaciones-4.jpg", alt: "Sala con el lema de la casa", caption: "Nuestro espacio", span: "" },
      { src: "/images/stock/instalaciones-5.jpg", alt: "Vista amplia de la barbería", caption: "El local", span: "wide" }
    ]
  },
  products: {
    badge: "Productos premium",
    title: "Lleva el acabado a casa.",
    subtitle:
      "Los mismos productos que usamos en la silla, disponibles para que mantengas tu estilo entre cita y cita.",
    note: "Consulta disponibilidad y precios directamente en el local.",
    items: [
      {
        id: "linea-completa",
        name: "Línea profesional 4X4",
        description: "La línea completa de productos que usamos en la silla, en exhibición y a la venta en el local.",
        image: "/images/stock/producto-1.jpg"
      },
      {
        id: "pomadas-ceras",
        name: "Pomadas y ceras",
        description: "Pomadas, ceras y gel para fijación y acabado, en distintas texturas según tu estilo.",
        image: "/images/stock/producto-2.jpg"
      },
      {
        id: "shampoo-aftershave",
        name: "Shampoo y after-shave",
        description: "Cuidado capilar, after-shave y aceites para mantener tu estilo entre cita y cita.",
        image: "/images/stock/producto-3.jpg"
      }
    ]
  },
  faqs: {
    badge: "Preguntas frecuentes",
    title: "Lo que necesitas saber antes de venir.",
    subtitle: "Y si te queda una duda, escríbenos por WhatsApp y te respondemos al instante.",
    items: [
      {
        q: "¿Dónde está ubicada Gent's Club?",
        a: "Estamos en Blvd. Miguel Alemán 356, Lerdo, Durango. Sobre el bulevar, con lugar para estacionarte sin complicaciones."
      },
      {
        q: "¿Cuánto cuesta un corte de cabello?",
        a: "El corte clásico y moderno tiene un precio desde $200 MXN. El precio final puede variar según el servicio que elijas."
      },
      {
        q: "¿Cuál es el horario?",
        a: "Atendemos de lunes a sábado de 11:00 AM a 8:00 PM. Los domingos permanecemos cerrados."
      },
      {
        q: "¿Necesito cita o puedo llegar sin agendar?",
        a: "Trabajamos por cita para evitarte la espera. Escríbenos por WhatsApp, revisamos la agenda y te damos un horario disponible."
      },
      {
        q: "¿Cómo agendo mi cita?",
        a: "Por WhatsApp. Nuestro asistente te responde al instante, te muestra horarios reales y confirma tu cita en menos de un minuto."
      },
      {
        q: "¿Con qué barbero me atienden?",
        a: "Las citas se agendan por WhatsApp y te confirmamos el horario disponible. Si prefieres a un barbero en específico del equipo, puedes pasar al local: también atendemos por orden de llegada."
      }
    ]
  },
  finalCta: {
    eyebrow: "Tu corte te está esperando",
    title: "Llega, siéntate y sal bien cortado.",
    subtitle: "Agenda directo por WhatsApp con el equipo de Gent's Club. Sin llamadas, sin formularios, sin espera.",
    button: "Agendar por WhatsApp"
  }
} as const;
