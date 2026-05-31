export const homepageSeoIntro = `
Pirlo TV Fútbol es tu centro de inteligencia deportiva en español: marcadores en vivo, calendario actualizado, 
análisis de partidos y referencias a emisoras oficiales. A diferencia de sitios que prometen streaming ilegal, 
aquí encontrarás información verificada, estadísticas y guías para seguir el fútbol de forma legal en España y Latinoamérica.

Consulta la programación de hoy con horarios locales, explora ligas como LaLiga, Premier League, Champions League 
y Copa Libertadores, y accede a previas tácticas antes de cada encuentro. Nuestra cobertura del Mundial 2026 
reúne sedes, grupos y calendario en un solo hub optimizado para aficionados de Argentina, México, Colombia, Chile y más.

También cubrimos Formula 1, MotoGP, tenis ATP/WTA, NBA y UFC con resultados y contexto editorial, 
sin enlaces pirata ni reproductores no autorizados. Pirlo TV online significa velocidad, diseño premium 
y SEO pensado para quien busca datos deportivos fiables — no para ver partidos por canales clandestinos.
`;

export function getMatchPreviewContent(
  home: string,
  away: string,
  league: string
): string {
  return `
## Previa: ${home} vs ${away}

El encuentro de ${league} llega con expectativa alta en la grada y en las apuestas deportivas. 
${home} llega con necesidad de sumar en casa para mantener opciones en la tabla, mientras ${away} 
busca imponer su ritmo con transiciones rápidas y presión alta en campo rival.

### Análisis táctico

Esperamos un 4-3-3 flexible por parte del local, con extremos abiertos y centrocampistas que llegan 
al área en segunda línea. El visitante podría optar por bloque medio-bajo y salir al contraataque 
con delanteros móviles. Los duelos clave estarán en el mediocampo: quien domine la posesión 
controlará el tempo del partido.

### Forma reciente

Ambos conjuntos han alternado resultados en las últimas cinco jornadas. La defensa del local 
ha encajado menos goles en casa, pero la efectividad del visitante fuera de su estadio 
sigue siendo un factor determinante en competiciones de alto nivel.

### Jugadores a seguir

Revisa la alineación probable horas antes del pitido inicial. Los extremos y el nueve 
centro serán los protagonistas en las transiciones ofensivas. En defensa, la pareja de centrales 
deberá neutralizar los balones al área desde córners y faltas laterales.

### Pronóstico

Partido equilibrado con ligera ventaja para quien marque primero. Escenario probable: 
resultado ajustado con menos de 3 goles si el encuentro se define en la primera mitad.

### Dónde verlo legalmente

Consulta la sección de canales oficiales de esta página para conocer disponibilidad por país. 
No ofrecemos streaming ni enlaces a transmisiones no autorizadas.
`.trim();
}

export function getLeagueSeoContent(leagueName: string): string {
  return `
## Todo sobre ${leagueName}

${leagueName} es una de las competiciones más seguidas del planeta. En Pirlo TV Fútbol centralizamos 
tabla de posiciones, fixture, goleadores y análisis semanal para aficionados de habla hispana.

### Historia y contexto

La liga ha evolucionado con formatos modernos, VAR y calendarios internacionales más exigentes. 
Los clubes históricos compiten cada temporada con plantillas millonarias y canteras de élite.

### Clasificación y estadísticas

La tabla se actualiza tras cada jornada. Prestamos atención a rachas invictas, diferencia de goles 
y rendimiento local/visitante — métricas clave para entender la lucha por títulos y descensos.

### Próximos partidos

Filtra por fecha en nuestro calendario /schedule/hoy para no perderte ningún encuentro. 
Cada partido enlaza a previa completa, alineaciones probables y emisoras con derechos oficiales.

### Cobertura Pirlo TV

Buscas "pirlo tv" con intención de resultados y programación: aquí superamos a agregadores 
de baja calidad con contenido editorial único, enlazado internamente con equipos, canales y Mundial 2026.
`.trim();
}

export function getTeamSeoContent(teamName: string): string {
  return `
## ${teamName}: plantilla, resultados y actualidad

${teamName} es un club con afición global. En esta ficha encontrarás últimos resultados, próximos partidos 
y análisis de rendimiento por competición.

### Historia del club

Fundado hace décadas, el equipo ha cosechado títulos nacionales e internacionales. 
Su identidad se basa en cantera, estilo de juego reconocible y rivalidades históricas.

### Plantilla y fichajes

El mercado de invierno y verano redefine cada temporada las opciones del entrenador. 
Sigue nuestras actualizaciones sobre altas, bajas y rumores verificados.

### Rendimiento reciente

Gráficos de forma, goles a favor/en contra y xG estimado ayudan a entender si el equipo 
cumple expectativas. Compara con rivales directos en la misma liga.

### Enlaces relacionados

Explora la liga, el calendario de hoy y partidos en vivo desde la navegación principal.
`.trim();
}

export const alternativasContent = `
## Pirlo TV alternativas legales

Si buscas "pirlo tv alternativas" o "roja directa pirlo tv", probablemente quieras ver fútbol sin pagar — 
pero las opciones ilegales conllevan riesgos legales, malware y mala calidad. Estas son alternativas seguras:

- **Marcadores y datos**: Pirlo TV Fútbol (este sitio) — resultados, calendario y análisis gratis.
- **Suscripciones oficiales**: DAZN, Movistar+, ESPN, Star+, TNT Sports según tu país.
- **TV abierta**: Partidos seleccionados en cadenas nacionales con derechos adquiridos.
- **Radio y apps oficiales**: Muchos clubes ofrecen audio en vivo legal en sus apps.

Nunca enlazamos a streaming pirata. Tu experiencia premium empieza con información de calidad.
`;

export const faqHome = [
  {
    question: "¿Qué es Pirlo TV Fútbol?",
    answer:
      "Es una plataforma informativa de deportes en español con marcadores, calendarios, estadísticas y guías de canales oficiales. No es un sitio de streaming ilegal.",
  },
  {
    question: "¿Puedo ver partidos gratis en Pirlo TV?",
    answer:
      "Ofrecemos datos en vivo y enlaces a información de emisoras legales. Para ver el partido en video debes usar el servicio oficial con derechos en tu país.",
  },
  {
    question: "¿Cubre Mundial 2026, F1 y otros deportes?",
    answer:
      "Sí. Además del fútbol, encontrarás hubs de Formula 1, MotoGP, tenis, NBA y UFC con resultados y contexto.",
  },
  {
    question: "¿Pirlo TV es lo mismo que pirlotv.online o pirlotv3.pl?",
    answer:
      "No. Esos dominios suelen redirigir a streaming no autorizado. pirlotvfutbol.com es un producto editorial legal orientado a SEO deportivo de calidad.",
  },
];
