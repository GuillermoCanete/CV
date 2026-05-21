export interface MultilingualText {
  es: string;
  en: string;
}

export interface StatItem {
  number: string;
  label: MultilingualText;
  sub: MultilingualText;
}

export interface SkillItem {
  id: string;
  name: string;
  tag: MultilingualText;
}

export interface AchievementItem {
  id: string;
  accent?: string;
  icon: string;
  text: MultilingualText;
}

export interface ExperienceItem {
  id: string;
  company: string;
  dates: MultilingualText;
  role: MultilingualText;
  desc: MultilingualText;
  highlight?: MultilingualText;
}

export interface EarlyWorkItem {
  role: MultilingualText;
  desc: MultilingualText;
}

export interface ProjectItem {
  id: string;
  tag: MultilingualText;
  title: string;
  desc: MultilingualText;
  features: MultilingualText[];
  link?: string;
  wip?: boolean;
}

export interface CertItem {
  icon: string;
  name: MultilingualText;
  org: MultilingualText;
}

export interface Article {
  id: string;
  category: MultilingualText;
  title: MultilingualText;
  excerpt: MultilingualText;
  content: MultilingualText;
}

export const STATS: StatItem[] = [
  {
    number: "14+",
    label: { es: "Años en Quality & Process", en: "Years in Quality & Process" },
    sub: { es: "Electrónica, electrodomésticos e industria", en: "Electronics, appliances & industry" }
  },
  {
    number: "17%",
    label: { es: "Aumento de producción logrado", en: "Production increase delivered" },
    sub: { es: "Rediseño de balanceo de línea y ergonomía", en: "Line rebalancing & workstation optimization" }
  },
  {
    number: "3",
    label: { es: "Normas ISO certificadas", en: "ISO standards certified" },
    sub: { es: "Auditor activo ISO 9001 · 14001 · 45001", en: "Active auditor ISO 9001 · 14001 · 45001" }
  }
];

export const SKILLS: SkillItem[] = [
  { id: "s1", name: "ISO 9001 / 14001 / 45001", tag: { es: "Auditor", en: "Auditor" } },
  { id: "s2", name: "APQP · PFMEA · CAPA", tag: { es: "Core", en: "Core" } },
  { id: "s3", name: "Root Cause Analysis", tag: { es: "Uso diario", en: "Daily use" } },
  { id: "s4", name: "Line Balancing · VSM", tag: { es: "Probado", en: "Proven" } },
  { id: "s5", name: "IA Aplicada a Calidad", tag: { es: "Diferencial", en: "Differentiator" } },
  { id: "s6", name: "Inglés — Profesional - B2", tag: { es: "Read / Write / Speak", en: "Read / Write / Speak" } }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "a1",
    accent: "+17%",
    icon: "⚙️",
    text: {
      es: "Aumenté la producción un 17% en el modelo Alcatel 4007 mediante rediseño de balanceo de línea y optimización ergonómica — sin agregar headcount.",
      en: "Increased production 17% on the Alcatel 4007 model through assembly-line rebalancing and ergonomic workstation optimization — without adding headcount."
    }
  },
  {
    id: "a5",
    accent: "+10%",
    icon: "📈",
    text: {
      es: "Superé en un 10% la producción planificada para el modelo Alcatel 4015 mediante optimización táctica del flujo de proceso.",
      en: "Exceeded planned production by 10% for the Alcatel 4015 model through tactical process-flow optimization."
    }
  },
  {
    id: "a6",
    accent: "-3 op",
    icon: "📉",
    text: {
      es: "Participé en la reducción de 3 puestos operativos en la línea de microondas Samsung, rebalanceando estaciones de trabajo para bajar costos de fabricación.",
      en: "Participated in reducing 3 operator positions on the Samsung microwave line, rebalancing workstations to lower manufacturing costs."
    }
  },
  {
    id: "a2",
    accent: "−2d",
    icon: "🎯",
    text: {
      es: "Reduje el onboarding en 2 días diseñando un modelo de capacitación cruzada entre turnos para lanzamientos de nuevos productos.",
      en: "Cut onboarding by 2 days by designing a cross-shift training model for new product launches."
    }
  },
  {
    id: "a3",
    icon: "🔬",
    text: {
      es: "Diseñé e implementé programas CAPA que eliminaron la recurrencia de defectos críticos en manufactura electrónica en múltiples líneas.",
      en: "Designed and implemented CAPA programs that eliminated recurrence of critical defects across multiple electronic manufacturing lines."
    }
  },
  {
    id: "a4",
    icon: "🌍",
    text: {
      es: "Entregué cumplimiento de calidad para Motorola, Huawei, Samsung, Sony y Alcatel, gestionando equipos multifuncionales.",
      en: "Delivered quality compliance for Motorola, Huawei, Samsung, Sony and Alcatel, managing cross-functional teams."
    }
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "e1",
    company: "Grupo BGH",
    dates: { es: "Mayo 2025 – Presente", en: "May 2025 – Present" },
    role: { es: "Quality Analyst", en: "Quality Analyst" },
    desc: {
      es: "Análisis de datos de calidad para detección de tendencias y KPIs de proceso. Análisis de causa raíz y diseño CAPA. Colaboración interfuncional para mejorar la confiabilidad del proceso.",
      en: "Quality data analysis for trend detection and process KPIs. Root cause analysis and CAPA design. Cross-functional collaboration to improve process reliability."
    },
    highlight: { es: "Rol actual", en: "Current role" }
  },
  {
    id: "e2",
    company: "Grupo BGH",
    dates: { es: "Oct 2022 – Presente", en: "Oct 2022 – Present" },
    role: { es: "Auditor ISO 9001 / 14001 / 45001", en: "ISO 9001 / 14001 / 45001 Auditor" },
    desc: {
      es: "Planificación y ejecución de auditorías internas. Identificación de no conformidades, redacción de informes y seguimiento de acciones correctivas. Cumplimiento regulatorio en calidad, medioambiente y SST.",
      en: "Planning and conducting internal audits. Identifying non-conformities, writing reports and following up on corrective actions. Regulatory compliance across quality, environment and OHS."
    }
  },
  {
    id: "e3",
    company: "Grupo BGH",
    dates: { es: "Ago 2019 – Feb 2024", en: "Aug 2019 – Feb 2024" },
    role: { es: "Técnico de Ingeniería de Procesos", en: "Process Engineering Technician" },
    desc: {
      es: "Diseño de procesos de fabricación de electrodomésticos. Proyecto de balanceo de línea con +17% de productividad. Instrucciones de trabajo, PFMEAs y documentación de proceso.",
      en: "Manufacturing process design for household-appliance lines. Line balancing project achieving +17% productivity. Work instructions, PFMEAs and process documentation."
    },
    highlight: { es: "+17% productividad", en: "+17% productivity" }
  },
  {
    id: "e4",
    company: "Grupo BGH",
    dates: { es: "Mar 2014 – Feb 2017", en: "Mar 2014 – Feb 2017" },
    role: { es: "Ingeniería de Procesos — Telefonía", en: "Process Engineering — Mobile Phones" },
    desc: {
      es: "Diseño de procesos de manufactura de celulares para Motorola, Huawei, ZTE, Alcatel, Samsung y Sony. APQP, PFMEAs, instrucciones de trabajo. Interlocución directa con cliente global.",
      en: "Cell-phone manufacturing process design for Motorola, Huawei, ZTE, Alcatel, Samsung and Sony. APQP, PFMEAs, work instructions. Direct global client interface."
    },
    highlight: { es: "Motorola · Samsung · Sony · Huawei", en: "Motorola · Samsung · Sony · Huawei" }
  },
  {
    id: "e5",
    company: "Grupo BGH",
    dates: { es: "Feb 2017 – Ago 2019", en: "Feb 2017 – Aug 2019" },
    role: { es: "Técnico de Laboratorio de Ingeniería", en: "Engineering Laboratory Technician" },
    desc: {
      es: "Calibración de equipos de medición bajo ISO 17025. Registros de trazabilidad (generadores RF, GPS, Hi-Pot, balanzas).",
      en: "Measurement equipment calibration under ISO 17025. Traceability records (RF generators, GPS, Hi-Pot testers, scales)."
    }
  },
  {
    id: "e6",
    company: "Grupo BGH",
    dates: { es: "May 2012 – Feb 2014", en: "May 2012 – Feb 2014" },
    role: { es: "Calidad NPI", en: "Quality NPI" },
    desc: {
      es: "Auditorías de lanzamiento contra ISO 9001 / ISO TS 16949. Instrucciones de inspección, planes de calidad y FMEAs. Comunicación continua con cliente global.",
      en: "New product launch audits against ISO 9001 / ISO TS 16949. Inspection instructions, quality plans and FMEAs. Ongoing global client communication."
    }
  }
];

export const EARLY_WORKS: EarlyWorkItem[] = [
  {
    role: { es: "Emprendedor tecnológico (2003)", en: "Tech entrepreneur (2003)" },
    desc: {
      es: "Dueño y operador de cibercafé. Gestión de negocio, soporte técnico y atención al cliente en la era de la banda ancha.",
      en: "Owner and operator of a cybercafé. Business management, tech support and customer service in wide band era."
    }
  },
  {
    role: { es: "Vendedor técnico — Ferretería", en: "Technical sales — Hardware store" },
    desc: {
      es: "Asesoramiento a clientes técnicos y profesionales de la construcción.",
      en: "Advisory to technical clients and construction professionals."
    }
  },
  {
    role: { es: "Fábrica de aberturas y construcción", en: "Metalwork & construction" },
    desc: {
      es: "Trabajo manual de precisión y construcción de vivienda propia.",
      en: "Precision manual work and self-built home construction."
    }
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "defect-recorder",
    tag: { es: "Web App · Herramienta de Calidad · 2025", en: "Web App · Quality Tool · 2025" },
    title: "PCB Defect Recorder",
    desc: {
      es: "Registra defectos directamente sobre la imagen del producto. Datos en tiempo real, mapa de calor, estadísticas automáticas.",
      en: "Register defects directly on the product image. Real-time data, heat map, automatic statistics."
    },
    features: [
      { es: "Registro sobre imagen del producto", en: "Register failures on product image" },
      { es: "Estadísticas automáticas y mapa de calor", en: "Automatic statistics & heat map" },
      { es: "Reduce tiempo de carga del operario", en: "Reduces operator data-entry time" },
      { es: "100% local — sin servidores externos", en: "100% local — no external servers" }
    ],
    link: "https://guillermocanete.github.io/DefectRecorder/"
  },
  {
    id: "iso-analyzer",
    tag: { es: "Web App · IA · En desarrollo", en: "Web App · AI Tool · In Development" },
    title: "ISO Compliance Analyzer",
    desc: {
      es: "Subís tu documentación y la IA analiza qué puntos de la norma están cubiertos, cuáles faltan y qué es redundante.",
      en: "Upload your documentation and AI analyzes which ISO clauses are covered, which are missing, and what's redundant."
    },
    features: [
      { es: "Detección automática de puntos ISO cumplidos", en: "Automatic detection of covered ISO clauses" },
      { es: "Identificación de gaps y no conformidades potenciales", en: "Gap identification and potential non-conformities" },
      { es: "Análisis de redundancia documental", en: "Document redundancy analysis" },
      { es: "ISO 9001 · 14001 · 45001", en: "ISO 9001 · 14001 · 45001" }
    ],
    wip: true
  }
];

export const CERTS: CertItem[] = [
  { icon: "🏅", name: { es: "ISO 9001 / 14001 / 45001 Auditor", en: "ISO 9001 / 14001 / 45001 Auditor" }, org: { es: "Auditor Interno — Activo", en: "Internal Auditor — Active" } },
  { icon: "🤖", name: { es: "Claude 101 — Uso Profesional con IA", en: "Claude 101 — AI Professional Use" }, org: { es: "Anthropic Education · Abr 2026", en: "Anthropic Education · Apr 2026" } },
  { icon: "⚡", name: { es: "Claude Code 101", en: "Claude Code 101" }, org: { es: "Anthropic Education · 2026", en: "Anthropic Education · 2026" } },
  { icon: "🧠", name: { es: "Marco de Competencia y Fundamentos de IA", en: "AI Fluency Framework & Foundations" }, org: { es: "Anthropic · Certificado de Finalización", en: "Anthropic · Certificate of Completion" } },
  { icon: "📊", name: { es: "Análisis de Negocios y Gst. de Procesos", en: "Business Analysis & Process Mgmt" }, org: { es: "Coursera · BPMN / Lucidchart", en: "Coursera · BPMN / Lucidchart" } },
  { icon: "🎓", name: { es: "Experto en Gestión de Proyectos", en: "Expert in Project Management" }, org: { es: "UTN FRBA · 2015–2016", en: "UTN FRBA · 2015–2016" } }
];

export const ARTICLES: Article[] = [
  {
    id: "titanic",
    category: { es: "Gestión · Agilidad · Mayo 2025", en: "Management · Agility · May 2025" },
    title: { es: "El Timón de la Agilidad: Cómo evitar el destino del Titanic", en: "The Helm of Agility: Avoiding the Titanic's fate" },
    excerpt: {
      es: "El Titanic no se hundió por ser grande. Se hundió porque su timón era demasiado pequeño para girar a tiempo. Un análisis sobre burocracia, Jidoka y el costo real de no empoderar a quien más sabe.",
      en: "The Titanic didn't sink because it was big. It sank because its rudder was too small to turn in time. An analysis of bureaucracy, Jidoka, and the real cost of not empowering those who know best."
    },
    content: {
      es: `<h2>El Titanic no se hundió por ser grande.</h2>
<p>Se hundió porque su timón era demasiado pequeño para girar a tiempo.</p>
<p>No por un único error, sino por la acumulación de varios: exceso de confianza, advertencias ignoradas y —el detalle que más me impacta como ingeniero de procesos— un timón desproporcionadamente pequeño para el tamaño del buque. <strong>Un gigante que no podía girar a tiempo.</strong></p>
<p>Cuando escuché esta analogía por primera vez, pensé de inmediato en las empresas donde trabajé. ¿Cuántas organizaciones conozco que son enormes en recursos pero lentas para reaccionar? ¿Cuántas veces vi cómo una buena idea moría en el quinto nivel de aprobación?</p>
<hr/>
<h2>El problema no es la burocracia. Es lo que la genera.</h2>
<p>La burocracia, en su origen, tiene sentido. Yo trabajo con ISO 9001 hace más de una década y entiendo el valor de los procesos bien definidos.</p>
<p>Pero existe un punto de quiebre en el que el proceso deja de servir al negocio y empieza a servirse a sí mismo. Conozco empresas donde firmar un contrato requería la aprobación del gerente general: un trámite que tardaba semanas. Mientras tanto, el cliente se iba con la competencia. <strong>Eso es un timón pequeño.</strong></p>
<p>Lo que genera esa burocracia excesiva, en el fondo, es miedo: miedo a delegar. Un sistema que penaliza el error produce capas de aprobaciones para que nadie quede expuesto.</p>
<hr/>
<h2>El mando medio no es el villano.</h2>
<p>El problema no es el mando medio, sino el rol que se le asignó. En un modelo jerárquico, el gerente intermedio actúa como un policía. En un modelo ágil, ese mismo rol puede convertirse en un catalizador. <strong>La diferencia no está en la persona, sino en el sistema que la rodea.</strong></p>
<hr/>
<h2>Lo que Toyota entendió hace setenta años.</h2>
<p>El <strong>Jidoka</strong> —uno de los pilares del Sistema de Producción Toyota— consiste en darle al operario de línea el poder de detener la producción cuando detecta un defecto. No al supervisor. No al gerente. <strong>Al operario.</strong></p>
<p>Eso es empoderamiento real. El problema se resuelve en el origen, antes de que se propague. La persona que más sabe de ese punto del proceso es quien lo vive todos los días.</p>
<p>Cuando diseño procesos siempre me pregunto: ¿quién tiene la información más fresca? ¿Está habilitada para actuar? Si la respuesta es no, tenemos un timón pequeño.</p>
<hr/>
<h2>Fallar rápido está bien. Aprender rápido es mejor.</h2>
<p>El valor no reside en el fallo en sí, sino en la velocidad del aprendizaje que se deriva de él. En manufactura, una no conformidad detectada tarde cuesta diez veces más que una detectada en el origen. El costo real no es el defecto: es todo lo que se procesó encima de él.</p>
<p>Para que ese ciclo funcione hace falta <strong>seguridad psicológica</strong>: la certeza de que equivocarse en el proceso de aprender no le va a costar la carrera a nadie.</p>
<hr/>
<h2>El nuevo timón.</h2>
<p>El Titanic no necesitaba ser más pequeño. Necesitaba un timón a la altura de su tamaño. Las organizaciones de hoy no necesitan achicarse, sino desarrollar la capacidad de girar: estructuras más planas que distribuyan la autoridad, empleados empoderados que actúen como sensores del sistema y una cultura donde el aprendizaje sea más rápido que el error.</p>
<p>Zappos intentó eliminar la jerarquía de golpe con la Holacracy y perdió el 29 % de su plantilla en el primer año. La transformación no se logra con un decreto: se consigue rediseñando el sistema de navegación completo. Toyota lleva décadas demostrándolo. Spotify, también.</p>
<p>La pregunta para cualquier líder hoy no es "¿somos suficientemente grandes?"</p>
<p><strong>Es: "¿podemos girar a tiempo?"</strong></p>
<div class="closing">¿Qué tan grande es el timón en tu organización?</div>`,
      en: `<h2>The Titanic didn't sink because it was big.</h2>
<p>It sank because its rudder was too small to turn in time.</p>
<p>Not from a single mistake, but from an accumulation: overconfidence, ignored warnings, and —the detail that strikes me most as a process engineer— a rudder disproportionately small for the vessel's size. <strong>A giant that couldn't steer in time.</strong></p>
<p>When I first heard this analogy, I immediately thought of organizations I've worked in. How many companies do I know that are enormous in resources but slow to react? How many times did I watch a good idea die in the fifth approval layer?</p>
<hr/>
<h2>The problem isn't bureaucracy. It's what generates it.</h2>
<p>Bureaucracy at its core makes sense. I've worked with ISO 9001 for over a decade and I understand the value of well-defined processes.</p>
<p>But there's a breaking point where the process stops serving the business and starts serving itself. I know companies where signing a contract required CEO approval — a process that took weeks. Meanwhile, the client walked out. <strong>That's a small rudder.</strong></p>
<p>What generates excessive bureaucracy, at its root, is fear: fear of delegating. A system that penalizes mistakes produces layer after layer of approvals so nobody is exposed.</p>
<hr/>
<h2>Middle management isn't the villain.</h2>
<p>The problem isn't the middle manager, but the role they were assigned. In a traditional hierarchy, they act as a cop. In an agile model, that same role can become a catalyst. <strong>The difference isn't the person — it's the system around them.</strong></p>
<hr/>
<h2>What Toyota understood seventy years ago.</h2>
<p><strong>Jidoka</strong> — a pillar of the Toyota Production System — means giving the line operator the power to stop production when they detect a defect. Not the supervisor. Not the manager. <strong>The operator.</strong></p>
<p>That's real empowerment. The problem gets solved at the source, before it spreads. The person who knows most about that process point is the one living it every day.</p>
<p>When I design processes I always ask: who has the freshest information? Are they enabled to act? If the answer is no — we have a small rudder.</p>
<hr/>
<h2>Failing fast is fine. Learning fast is better.</h2>
<p>The value isn't in the failure itself, but in the speed of learning derived from it. In manufacturing, a non-conformity detected late costs ten times more than one caught at the source. The real cost isn't the defect — it's everything built on top of it.</p>
<p>For that to work you need <strong>psychological safety</strong>: the certainty that making mistakes while learning won't cost anyone their career.</p>
<hr/>
<h2>The new rudder.</h2>
<p>The Titanic didn't need to be smaller. It needed a rudder proportional to its size. Today's organizations don't need to shrink — they need to develop the ability to turn: flatter structures that distribute authority, empowered employees who act as the system's sensors, and a culture where learning is faster than error.</p>
<p>Zappos tried to eliminate hierarchy overnight with Holacracy and lost 29% of its staff in year one. Transformation doesn't happen by decree — it happens by re-engineering the entire system. Toyota has been proving it for decades. Spotify too.</p>
<p>The question for any leader today isn't "are we big enough?"</p>
<p><strong>It's: "can we turn in time?"</strong></p>
<div class="closing">How big is the rudder in your organization?</div>`
    }
  },
  {
    id: "spacex",
    category: { es: "Innovación · Industria · Mayo 2026", en: "Innovation · Industry · May 2026" },
    title: { es: "El Paradigma del \"Fallo Controlado\": Aprendizaje Ágil e Innovación en SpaceX", en: "The \"Controlled Failure\" Paradigm: Agile Learning & Innovation at SpaceX" },
    excerpt: {
      es: "El desarrollo de la gigantesca Starship demuestra que ver explotar prototipos en directo no es un fracaso, sino el motor de la innovación. Un análisis del Lean industrial, seguridad psicológica y el rol mentor de los mandos medios.",
      en: "The heavy engineering of Starship proves that exploding prototypes is not system failure, but the very engine of innovation. An analysis of industrial Lean development, psychological safety, and leadership mentorship."
    },
    content: {
      es: `<h2>El fallo como estrategia, no como accidente.</h2>
<p>En el diseño organizacional tradicional, la palabra "fallo" es sinónimo de negligencia, pérdidas catastróficas y crisis reputacional. Durante décadas, la industria adoptó el modelo de la NASA de la era Apolo: un enfoque lineal y predictivo donde cada componente se prueba de forma aislada durante meses o años para asegurar un éxito del 100% en el primer intento.</p>
<p>Sin embargo, organizaciones hiperdinámicas como SpaceX han reescrito las reglas de la ingeniería pesada mediante el <strong>desarrollo iterativo y el aprendizaje por fallo controlado</strong>. El desarrollo de la gigantesca nave <em>Starship</em> es el ejemplo definitivo: ver explotar prototipos en directo no es un fracaso del sistema, sino la aceleración deliberada del ciclo de aprendizaje.</p>
<hr/>
<h2>1. El Enfoque Starship: Velocidad de Iteración vs. Parálisis por Análisis</h2>
<p>En las organizaciones tradicionales, el miedo al error genera <strong>parálisis por análisis</strong>. Se gastan millones en comités de revisión para mitigar hasta el último riesgo teórico. SpaceX invierte ese paradigma aplicando los principios del <em>Lean Software Development</em> al <em>hardware</em> pesado.</p>
<p>El concepto clave aquí es la <strong>Velocidad de Escape de la Información</strong>. Cuando un prototipo de Starship se lanza sabiendo que puede explotar, se asume que la cantidad de datos empíricos puros (telemetría, comportamiento térmico, resistencia estructural real) obtenidos en tres minutos de vuelo real supera a tres años de simulaciones por computadora.</p>
<blockquote><strong>La premisa es simple:</strong> El conocimiento adquirido a través de una falla real es más valioso que el costo del prototipo, siempre y cuando la organización esté diseñada para absorber ese impacto y corregir el rumbo de inmediato.</blockquote>
<hr/>
<h2>2. Gestión del Riesgo: Cuándo es Aceptable Perder la "Nave"</h2>
<p>Este enfoque no es un cheque en blanco para la imprudencia. Para que el aprendizaje ágil funcione en entornos industriales, debe estar rígidamente delimitado por tres variables críticas:</p>
<ul>
  <li><strong>Acotación del Costo del Fallo (Risk Framing):</strong> SpaceX construye sus prototipos de Starship utilizando acero inoxidable 304 y técnicas de manufactura en serie relativamente baratas en su factoría de Boca Chica. Perder una nave de prueba no desestabiliza financieramente a la empresa. Las fallas se permiten en la fase de prototipado, nunca en la fase operativa con clientes o tripulación.</li>
  <li><strong>Cálculo del Costo del Retraso (<em>Cost of Delay</em>):</strong> El consultor de desarrollo de productos Don Reinertsen demuestra que el costo de retrasar el lanzamiento de un producto al mercado suele ser infinitamente mayor que el costo de perder un prototipo en una prueba temprana.</li>
  <li><strong>Aislamiento del Impacto:</strong> El fallo debe ocurrir en un entorno controlado donde no comprometa la seguridad humana ni la infraestructura crítica de la compañía.</li>
</ul>
<hr/>
<h2>3. Capacitación del Personal y "Seguridad Psicológica"</h2>
<p>Un modelo ágil industrial fracasa si el personal operativo oculta los errores por miedo a represalias. Aquí entra en juego el concepto de <strong>Seguridad Psicológica</strong>, popularizado por la profesora de Harvard, Amy Edmondson.</p>
<p>Para capacitar a un equipo bajo esta cultura, el entrenamiento no debe centrarse en "cómo evitar el error a toda costa", sino en <strong>"cómo diagnosticar, reportar y corregir el error a máxima velocidad"</strong>. El personal debe dominar metodologías de análisis de causa raíz (como los <em>5 Porqués</em> o el <em>Diagrama de Ishikawa</em>) pero aplicadas en ciclos de horas, no de semanas. Los errores no se penalizan; se documentan en repositorios abiertos para que toda la organización aprenda de ellos simultáneamente.</p>
<hr/>
<h2>4. El Rol Crítico de los Mandos Medios como Mentores Industriales</h2>
<p>En la industria clásica, los mandos medios (supervisores, jefes de turno, líderes de área) actúan como policías del cumplimiento: su función es vigilar que los operadores sigan los Procedimientos Operativos Estándar (SOP) al pie de la letra para evitar desviaciones.</p>
<p>En una organización ágil y dinámica, <strong>el mando medio debe transformarse drásticamente en un Mentor Técnico y Coach Operativo.</strong></p>
<pre>
[Mando Medio Tradicional] ──&gt; Control de Cumplimiento ──&gt; Cero Desviaciones
                                       vs.
[Mando Medio Ágil]        ──&gt; Mentoría de Procesos    ──&gt; Experimentación Controlada
</pre>
<h3>Funciones clave del Mando Medio como mentor:</h3>
<ul>
  <li><strong>Traductores de la Tolerancia al Riesgo:</strong> La alta dirección puede decretar que "está bien fallar para aprender", pero el operador en la planta no lo creerá si su supervisor directo lo reprende ante el primer desajuste. El mando medio debe definir claramente los límites: <em>“En esta línea de prueba podemos experimentar con los parámetros; en la línea de producción final, nos ceñimos al estándar”</em>.</li>
  <li><strong>Facilitadores del Feedback Loop:</strong> Su rol no es dar la respuesta, sino guiar al equipo mediante preguntas socráticas tras un fallo: <em>¿Qué variable no previmos? ¿Qué componente falló primero? ¿Cómo modificamos el diseño de la tarea para la siguiente iteración?</em></li>
  <li><strong>Gestores del Conocimiento Colectivo:</strong> El mando medio asegura que el aprendizaje de la falla se institucionalice inmediatamente, modificando los flujos de trabajo en cuestión de días en lugar de esperar a la revisión anual del sistema de gestión.</li>
</ul>
<hr/>
<h2>Comparativa de Modelos Organizacionales</h2>
<table class="w-full text-xs text-left border-collapse border border-cv-line my-4">
  <thead>
    <tr class="bg-cv-bg2">
      <th class="border border-cv-line p-2 font-bold font-sans">Dimensión</th>
      <th class="border border-cv-line p-2 font-bold font-sans">Enfoque Tradicional ("Seguro y Perfecto")</th>
      <th class="border border-cv-line p-2 font-bold font-sans">Enfoque Dinámico Ágil ("Iteración Rápida")</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-cv-line p-2 font-bold">Filosofía central</td>
      <td class="border border-cv-line p-2">"Hacerlo bien a la primera".</td>
      <td class="border border-cv-line p-2">"Fallar rápido para aprender antes".</td>
    </tr>
    <tr class="bg-cv-bg2/40">
      <td class="border border-cv-line p-2 font-bold">Fase de pruebas</td>
      <td class="border border-cv-line p-2">Simulaciones extensas y entornos cerrados.</td>
      <td class="border border-cv-line p-2">Pruebas empíricas en entornos reales controlados.</td>
    </tr>
    <tr>
      <td class="border border-cv-line p-2 font-bold">Costo prioritario</td>
      <td class="border border-cv-line p-2">Minimizar el costo directo del desperdicio/material.</td>
      <td class="border border-cv-line p-2">Minimizar el costo del tiempo y retraso técnico.</td>
    </tr>
    <tr class="bg-cv-bg2/40">
      <td class="border border-cv-line p-2 font-bold">Rol del Mando Medio</td>
      <td class="border border-cv-line p-2">Supervisor de conformidad y control de calidad.</td>
      <td class="border border-cv-line p-2">Mentor técnico, dinamizador del aprendizaje y protector del equipo.</td>
    </tr>
    <tr>
      <td class="border border-cv-line p-2 font-bold">Flujo de información</td>
      <td class="border border-cv-line p-2">Vertical, jerárquico y lento.</td>
      <td class="border border-cv-line p-2">Horizontal, basado en telemetría y datos abiertos.</td>
    </tr>
  </tbody>
</table>
<hr/>
<h2>Conclusión</h2>
<p>El éxito de SpaceX con Starship demuestra que, en entornos de alta incertidumbre y tecnología de punta, la obsesión por la perfección inicial es el enemigo de la evolución. El verdadero liderazgo industrial moderno no radica en diseñar sistemas infalibles, sino en construir organizaciones con una <strong>alta resiliencia y una velocidad de aprendizaje superior a la de sus competidores</strong>. En este ecosistema, los mandos medios ya no son los guardianes del <em>statu quo</em>, sino los mentores esenciales que transforman el metal retorcido de un prototipo fallido en el conocimiento científico del mañana.</p>
<hr/>
<h2>Fuentes y Referencias Bibliográficas</h2>
<ul>
  <li><strong>Edmondson, Amy C. (2018).</strong> <em>The Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth</em>. Wiley.</li>
  <li><strong>Reinertsen, Donald G. (2009).</strong> <em>The Principles of Product Development Flow: Second Generation Lean Product Development</em>. Celeritas Publishing.</li>
  <li><strong>Isaacson, Walter (2023).</strong> <em>Elon Musk</em>. Simon &amp; Schuster.</li>
  <li><strong>Ries, Eric (2011).</strong> <em>The Lean Startup</em>. Crown Business.</li>
  <li><strong>Harvard Business Review (2021).</strong> <em>How SpaceX Innovates Everywhere and All the Time</em>. Case Study por de la Universidad de Harvard.</li>
</ul>
<div class="closing">¿Está tu organización diseñada para aprender más rápido que el error?</div>`,
      en: `<h2>Failure as a strategy, not an accident.</h2>
<p>In traditional organizational design, the word "failure" is synonymous with negligence, catastrophic losses, and reputational crisis. For decades, the industry adopted the NASA model of the Apollo era: a linear, predictive approach where each component is tested in isolation for months or years to ensure 100% success on the first attempt.</p>
<p>However, hyper-dynamic organizations like SpaceX have rewritten the rules of heavy engineering through <strong>iterative development and controlled-failure learning</strong>. The development of the gigantic spacecraft <em>Starship</em> is the ultimate example: watching prototypes explode live is not a system failure, but the deliberate acceleration of the learning cycle.</p>
<hr/>
<h2>1. The Starship Approach: Iteration Speed vs. Analysis Paralysis</h2>
<p>In traditional organizations, fear of error generates <strong>analysis paralysis</strong>. Millions are spent on review committees to mitigate every single theoretical risk. SpaceX inverts that paradigm by applying the principles of <em>Lean Software Development</em> to heavy <em>hardware</em>.</p>
<p>The key concept here is <strong>Information Escape Velocity</strong>. When a Starship prototype launches knowing it may explode, it is assumed that the amount of pure empirical data (telemetry, thermal behavior, actual structural resistance) obtained in three minutes of actual flight exceeds three years of computer simulations.</p>
<blockquote><strong>The premise is simple:</strong> The knowledge acquired through a real failure is more valuable than the cost of the prototype, as long as the organization is designed to absorb that impact and correct course immediately.</blockquote>
<hr/>
<h2>2. Risk Management: When It Is Acceptable to Lose the "Ship"</h2>
<p>This approach is not a blank check for recklessness. For agile learning to work in industrial environments, it must be rigidly bounded by three critical variables:</p>
<ul>
  <li><strong>Limiting the Cost of Failure (Risk Framing):</strong> SpaceX builds its Starship prototypes using 304 stainless steel and relatively cheap serial manufacturing techniques at its Boca Chica factory. Losing a test vessel does not destabilize the company financially. Failures are permitted in the prototyping phase, never in the operational phase with clients or crew.</li>
  <li><strong>Calculating the Cost of Delay:</strong> Product development consultant Don Reinertsen demonstrates that the cost of delaying a product's launch to market is often infinitely greater than the cost of losing a prototype in an early test.</li>
  <li><strong>Isolating the Impact:</strong> The failure must occur in a controlled environment where it does not compromise human safety or the company's critical infrastructure.</li>
</ul>
<hr/>
<h2>3. Staff Training and "Psychological Safety"</h2>
<p>An industrial agile model fails if operational personnel hide errors out of fear of reprisals. This is where the concept of <strong>Psychological Safety</strong>, popularized by Harvard professor Amy Edmondson, comes into play.</p>
<p>To train a team under this culture, training should not focus on "how to avoid error at all costs," but on <strong>"how to diagnose, report, and correct the error at maximum speed"</strong>. Personnel must master root cause analysis methodologies (such as the <em>5 Whys</em> or the <em>Ishikawa Diagram</em>) but applied in cycles of hours, not weeks. Errors are not penalized; they are documented in open repositories so that the entire organization learns from them simultaneously.</p>
<hr/>
<h2>4. The Critical Role of Middle Management as Industrial Mentors</h2>
<p>In classical industry, middle managers (supervisors, shift bosses, area leaders) act as compliance cops: their function is to watch that operators follow Standard Operating Procedures (SOPs) to the letter to avoid deviations.</p>
<p>In an agile and dynamic organization, <strong>the middle manager must transform drastically into a Technical Mentor and Operational Coach.</strong></p>
<pre>
[Traditional Middle Manager] ──&gt; Compliance Control ──&gt; Zero Deviations
                                       vs.
[Agile Middle Manager]        ──&gt; Process Mentorship  ──&gt; Controlled Experimentation
</pre>
<h3>Key functions of Middle Management as a mentor:</h3>
<ul>
  <li><strong>Translators of Risk Tolerance:</strong> Senior management can decree that "it's okay to fail to learn," but the operator on the floor won't believe it if their direct supervisor reprimands them at the first sign of a mismatch. Middle management must clearly define the limits: <em>“On this test line we can experiment with parameters; on the final production line, we stick to the standard”</em>.</li>
  <li><strong>Feedback Loop Facilitators:</strong> Their role is not to give the answer, but to guide the team using socratic questions after a failure: <em>What variable did we not foresee? What component failed first? How do we modify the task design for the next iteration?</em></li>
  <li><strong>Collective Knowledge Managers:</strong> Middle management ensures that the learning from the failure is institutionalized immediately, modifying workflows in a matter of days instead of waiting for the annual review of the management system.</li>
</ul>
<hr/>
<h2>Comparison of Organizational Models</h2>
<table class="w-full text-xs text-left border-collapse border border-cv-line my-4">
  <thead>
    <tr class="bg-cv-bg2">
      <th class="border border-cv-line p-2 font-bold">Dimension</th>
      <th class="border border-cv-line p-2 font-bold">Traditional Approach ("Safe &amp; Perfect")</th>
      <th class="border border-cv-line p-2 font-bold">Dynamic Agile Approach ("Fast Iteration")</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-cv-line p-2 font-bold">Core philosophy</td>
      <td class="border border-cv-line p-2">"Get it right the first time".</td>
      <td class="border border-cv-line p-2">"Fail fast to learn sooner".</td>
    </tr>
    <tr class="bg-cv-bg2/40">
      <td class="border border-cv-line p-2 font-bold">Testing phase</td>
      <td class="border border-cv-line p-2">Extensive simulations and closed environments.</td>
      <td class="border border-cv-line p-2">Empirical testing in controlled real-world environments.</td>
    </tr>
    <tr>
      <td class="border border-cv-line p-2 font-bold">Priority cost</td>
      <td class="border border-cv-line p-2">Minimize direct cost of waste/material.</td>
      <td class="border border-cv-line p-2">Minimize cost of time and technical delay.</td>
    </tr>
    <tr class="bg-cv-bg2/40">
      <td class="border border-cv-line p-2 font-bold">Middle Management Role</td>
      <td class="border border-cv-line p-2">Conformity supervisor and quality control.</td>
      <td class="border border-cv-line p-2">Technical mentor, learning catalyst and team protector.</td>
    </tr>
    <tr>
      <td class="border border-cv-line p-2 font-bold">Information flow</td>
      <td class="border border-cv-line p-2">Vertical, hierarchical, and slow.</td>
      <td class="border border-cv-line p-2">Horizontal, based on telemetry and open data.</td>
    </tr>
  </tbody>
</table>
<hr/>
<h2>Conclusion</h2>
<p>SpaceX's success with Starship demonstrates that, in environments of high uncertainty and cutting-edge technology, the obsession with initial perfection is the enemy of evolution. True modern industrial leadership does not lie in designing infallible systems, but in building organizations with <strong>high resilience and a speed of learning superior to that of their competitors</strong>. In this ecosystem, middle managers are no longer the guardians of the <em>status quo</em>, but the essential mentors who transform the twisted metal of a failed prototype into the scientific knowledge of tomorrow.</p>
<hr/>
<h2>Sources and Bibliographic References</h2>
<ul>
  <li><strong>Edmondson, Amy C. (2018).</strong> <em>The Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth</em>. Wiley.</li>
  <li><strong>Reinertsen, Donald G. (2009).</strong> <em>The Principles of Product Development Flow: Second Generation Lean Product Development</em>. Celeritas Publishing.</li>
  <li><strong>Isaacson, Walter (2023).</strong> <em>Elon Musk</em>. Simon &amp; Schuster.</li>
  <li><strong>Ries, Eric (2011).</strong> <em>The Lean Startup</em>. Crown Business.</li>
  <li><strong>Harvard Business Review (2021).</strong> <em>How SpaceX Innovates Everywhere and All the Time</em>. Harvard University Case Study.</li>
</ul>
<div class="closing">Is your organization designed to learn faster than the error?</div>`
    }
  }
];
