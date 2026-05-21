export const adminData = {
  title: "Panel de operacion de agenda y WhatsApp",
  subtitle: "MVP Admin Interno",
  sections: [
    "Dashboard",
    "Conversaciones",
    "Citas",
    "Clientes",
    "Estado del bot",
    "Configuracion"
  ],
  kpis: [
    { value: "18", label: "Conversaciones activas" },
    { value: "12", label: "Citas confirmadas esta semana" },
    { value: "3", label: "Requieren atencion humana" },
    { value: "91%", label: "Mensajes respondidos a tiempo" }
  ],
  inboxFilters: ["Todas", "Pendientes", "Handoff", "Resueltas"],
  conversations: [
    {
      name: "Luis Torres",
      status: "ok",
      statusLabel: "Resuelto por bot",
      summary: "Solicito cita para viernes. El sistema propuso horarios y quedo confirmada.",
      actions: ["Abrir conversacion", "Ver cita"]
    },
    {
      name: "Roberto Sanchez",
      status: "warn",
      statusLabel: "Pendiente de confirmar",
      summary: "Pidio reprogramacion. Se ofrecieron dos opciones y falta respuesta.",
      actions: ["Responder manualmente", "Forzar recordatorio"]
    },
    {
      name: "Carlos Mendoza",
      status: "err",
      statusLabel: "Escalado a Charly",
      summary: "Solicito horario fuera de agenda y pidio atencion directa.",
      actions: ["Tomar conversacion", "Agregar nota"]
    }
  ],
  systemChecks: [
    { label: "Canal WhatsApp", status: "ok", statusLabel: "Conectado" },
    { label: "Google Calendar", status: "ok", statusLabel: "Sincronizado" },
    { label: "Agente IA", status: "ok", statusLabel: "Operando" },
    {
      label: "Ultimo error",
      status: "warn",
      statusLabel: "Sin impacto",
      note: "Conflicto detectado en una reprogramacion, enviado a revision."
    }
  ],
  activity: [
    {
      time: "10:42 AM",
      text: "El bot creo una cita para Luis Torres y actualizo el contexto del cliente."
    },
    {
      time: "11:08 AM",
      text: "Se detecto un conflicto de horario y la conversacion paso a handoff manual."
    },
    {
      time: "11:21 AM",
      text: "Google Calendar respondio correctamente en la ultima consulta de disponibilidad."
    }
  ],
  agendaFilters: ["Hoy", "Semana", "Pendientes"],
  appointments: [
    { customer: "Luis Torres", time: "11:00 AM", service: "Corte + barba", status: "ok", statusLabel: "Confirmada" },
    { customer: "Javier Mora", time: "2:30 PM", service: "Corte", status: "warn", statusLabel: "Pendiente" },
    { customer: "Carlos Mendoza", time: "6:00 PM", service: "A revisar", status: "err", statusLabel: "Handoff" }
  ],
  insights: [
    {
      eyebrow: "Clientes",
      title: "Recurrentes vs nuevos",
      text: "Permite ver si el sistema esta trayendo clientes nuevos o facilitando el rebooking."
    },
    {
      eyebrow: "Metricas",
      title: "Patrones de horario",
      text: "Horas mas pedidas, servicios mas frecuentes y franjas mas ocupadas."
    },
    {
      eyebrow: "Operacion",
      title: "Correcciones y ajustes",
      text: "Vista basica para identificar respuestas que necesiten afinacion del bot."
    }
  ]
} as const;
