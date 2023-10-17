const messages = [
  "Sé amable con los demás, la bondad es contagiosa.",
  "Aprende algo nuevo todos los días.",
  "Escucha más de lo que hablas.",
  "Establece metas claras y trabaja hacia ellas.",
  "Haz ejercicio regularmente para mantener tu salud.",
  "La paciencia es una virtud; no todo sucede de inmediato.",
  "Practica la gratitud a diario.",
  "Evita la negatividad y el chisme.",
  "No temas cometer errores; son oportunidades de aprendizaje.",
  "Encuentra tiempo para relajarte y desconectar.",
  "Ayuda a alguien sin esperar nada a cambio.",
  "Vive el presente y disfruta el viaje.",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
};

module.exports = {
  funnyCommit,
};
