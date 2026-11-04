/* ===================== EDITA AQUÍ TUS DATOS ===================== */
const REGALO = {
  para: "Yerisel",
  de: "Alejo",
  inicio: "2026-07-18",              // primer mensaje desde el número nuevo (AAAA-MM-DD)
  cancion: { titulo: "Más que querer", artista: "Yerisel ♾️ Alejo" },   // cambia aquí el título y el artista
  fotos: [                            // pon la URL de cada foto en "src"
    { src: "img/nosotros.jpg", texto: "Tú y yo, contra todo" }
  ],
  carta: [
    "Mi princesa:",
    "El 18 de julio te escribí desde mi número nuevo y te dije que eras la primera persona que lo tenía. No sabía que también ibas a ser la primera en tantas otras cosas.",
    "A los tres días te dije que parecía que nos conocíamos de años. Lo sigo pensando: si te pusiste de frente a mi vida en este momento, es por algo.",
    "No ha sido fácil. Nos conocimos en momentos difíciles para los dos, con distancia, con miedos y con días en que no supimos hacerlo bien. Pero un día me dijiste: “nosotros vamos a seguir juntos”. Y aquí seguimos.",
    "Me encanta que me digas papi, que me llenes el chat de 😘 y 🥰, que me regañes cuando no como y que me digas que te hace feliz ver que no me doy por vencido. Contigo tampoco me voy a rendir.",
    "Te quiero más de lo que tu mente puede llegar a pensar."
  ],
  firma: "Te amo de verdad",
  numeros: [                          // sacados de nuestro chat
    { n: "93.352", t: "mensajes" },
    { n: "733", t: "veces te dije “mi vida”" },
    { n: "481", t: "“te amo”" },
    { n: "2.057", t: "mensajes el 21 de julio" }
  ],
  momentos: [
    { fecha: "18 de julio de 2026", titulo: "El número nuevo", texto: "“Primera persona que lo tiene.” Esa noche te dije que me estabas encantando demasiado, y tú: “Tú a mí también”." },
    { fecha: "21 de julio de 2026", titulo: "Como si nos conociéramos de años", texto: "A las 12:21 de la madrugada te lo dije, y tú: “Sí, verdad jjj”." },
    { fecha: "25 de julio de 2026", titulo: "Mi mensaje de buenos días", texto: "Te dije que no me asustan las cosas difíciles y que luchar por lo que cuesta es lo que hace que valga la pena." },
    { fecha: "7 de agosto de 2026", titulo: "El primer “te amo”", texto: "“Ya empiezo a sentir más que querer”… y a la 1:38 de la madrugada: “Te amo mi vida”. Tú: “Y yo papi”." },
    { fecha: "9 de agosto de 2026", titulo: "Tu respuesta", texto: "“Yo sé que te amo porque no paro de pensar en ti.”" },
    { fecha: "5 de octubre de 2026", titulo: "Tu promesa", texto: "“Nosotros vamos a seguir juntos. Si no quieres, te obligo.” Nunca me habían amenazado tan bonito." },
    { fecha: "16 de octubre de 2026", titulo: "En persona", texto: "“Yo me siento muy bien contigo. En persona, demasiado.”" },
    { fecha: "4 de noviembre de 2026", titulo: "Hoy", texto: "Tú: “Yo lo que sé es que quiero estar contigo”. Yo: “No te voy a dejar”." }
  ],
  preguntas: [
    { q: "Cuando te escribí desde el número nuevo, ¿qué te dije?", opciones: ["Que se me había roto el teléfono", "Que eras la primera persona que lo tenía", "Que me lo habían regalado"], correcta: 1, extra: "¡Sí! La primera de todas ♥" },
    { q: "La primera vez que te dije “Te amo mi vida”, ¿qué me respondiste?", opciones: ["Yo también te amo", "Jjj 🙈", "Y yo papi"], correcta: 2, extra: "“Y yo papi” 🥰" },
    { q: "En nuestro chat, ¿cómo me dices más veces?", opciones: ["Papi", "Amor", "Ale"], correcta: 1, extra: "¡Amor! Más de 1.200 veces (y papi, 922 😏)" }
  ],
  chat: [
    { dia: "18 de julio de 2026" },
    { de: "yo", t: "Mira mi vida", h: "7:59 p. m." },
    { de: "yo", t: "Este es el número nuevo", h: "7:59 p. m." },
    { de: "yo", t: "Primera persona q lo tiene", h: "8:00 p. m." },
    { de: "ella", t: "Jjjj", h: "8:00 p. m." },
    { de: "yo", t: "Ay mi corazón", h: "8:01 p. m." },
    { de: "yo", t: "Me estás encantando demasiado", h: "8:01 p. m." },
    { de: "ella", t: "Tu a mi también", h: "8:01 p. m." },
    { dia: "21 de julio de 2026" },
    { de: "yo", t: "Parece q nos conocemos de años", h: "12:21 a. m." },
    { de: "ella", t: "Si verdad jjj", h: "12:21 a. m." },
    { de: "yo", t: "Si te pusiste de frente a mi vida en estos momentos es por algo", h: "12:22 a. m." },
    { dia: "30 de julio de 2026" },
    { de: "yo", t: "Te quiero más de lo q tú mente puede llegar a pensar ❤️", h: "8:05 p. m." },
    { de: "ella", t: "Que bello amor 💘", h: "8:11 p. m." },
    { dia: "7 de agosto de 2026" },
    { de: "yo", t: "Ya empiezo a sentir más q querer", h: "1:27 a. m." },
    { de: "ella", t: "Que sientes", h: "1:30 a. m." },
    { de: "yo", t: "Te amo mi vida", h: "1:38 a. m." },
    { de: "ella", t: "Y yo papi", h: "1:39 a. m." },
    { dia: "9 de agosto de 2026" },
    { de: "ella", grande: true, t: "Yo se que te amo por que no paro de pensar en ti", h: "12:37 a. m." },
    { dia: "5 de octubre de 2026" },
    { de: "ella", grande: true, t: "A mi no me da la gana de que te alejes no me importa lo que digas nosotros vamos a seguir juntos si no quieres te obligo yo no puedo dejarte 🤷", h: "7:25 p. m." },
    { de: "ella", t: "Te amo 💖", h: "7:27 p. m." },
    { de: "yo", t: "Yo también te amo", h: "7:27 p. m." },
    { dia: "26 de octubre de 2026" },
    { de: "ella", t: "La verdad me hace feliz ver que eres un hombre que no se da por vencido y le gusta trabajar y salir adelante, unas de las cosas que me atraen de ti", h: "11:58 p. m." },
    { dia: "4 de noviembre de 2026" },
    { de: "ella", t: "Yo lo que se es que quiero estar contigo", h: "7:44 p. m." },
    { de: "yo", t: "No te voy a dejar", h: "7:52 p. m." },
    { de: "ella", t: "💚", h: "7:52 p. m." }
  ],
  vale: "Vale por ir a buscarte al aeropuerto… y un abrazo que no se acabe nunca",
  final: {
    pregunta: "¿Vamos a seguir juntos?",
    noTextos: ["¿Segura? 😏", "Ese no funciona", "Te obligo 🤷", "Jajaja no", "No hay escapatoria", "Ya ríndete"],
    titulo: "¡Sabía que dirías que sí! 🥰",
    parrafos: [
      "Ese botón de “No” nunca iba a funcionar. Tú misma me lo dijiste: “si no quieres, te obligo”. Pues ahora te lo digo yo: yo tampoco puedo dejarte.",
      "No te prometo que todo vaya a ser fácil. Te prometo que voy a seguir aquí, trabajando, sin darme por vencido y eligiéndote a ti.",
      "Gracias por quedarte, por regañarme cuando no como y por llenar mis días de 😘 y 🥰."
    ],
    grande: "Te amo de verdad, mi vida.<br>Hoy y todos los días que vengan.",
    firma: "Tuyo 🤍<br>— Alejo"
  }
};
/* ================================================================ */
