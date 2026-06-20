export interface MultilingualText {
  es: string;
  en: string;
  pt: string;
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
  link?: string;
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
    label: { 
      es: "Años en Quality & Process", 
      en: "Years in Quality & Process", 
      pt: "Anos em Quality & Process" 
    },
    sub: { 
      es: "Electrónica, electrodomésticos e industria", 
      en: "Electronics, appliances & industry", 
      pt: "Eletrônicos, eletrodomésticos e indústria" 
    }
  },
  {
    number: "17%",
    label: { 
      es: "Aumento de producción logrado", 
      en: "Production increase delivered", 
      pt: "Aumento de produção alcançado" 
    },
    sub: { 
      es: "Rediseño de balanceo de línea y ergonomía", 
      en: "Line rebalancing & workstation optimization", 
      pt: "Redesenho de balanceamento de linha e ergonomia" 
    }
  },
  {
    number: "3",
    label: { 
      es: "Normas ISO certificadas", 
      en: "ISO standards certified", 
      pt: "Normas ISO certificadas" 
    },
    sub: { 
      es: "Auditor activo ISO 9001 · 14001 · 45001", 
      en: "Active auditor ISO 9001 · 14001 · 45001", 
      pt: "Auditor ativo ISO 9001 · 14001 · 45001" 
    }
  }
];

export const SKILLS: SkillItem[] = [
  { 
    id: "s1", 
    name: "ISO 9001 / 14001 / 45001", 
    tag: { es: "Auditor", en: "Auditor", pt: "Auditor" } 
  },
  { 
    id: "s2", 
    name: "APQP · PFMEA · CAPA", 
    tag: { es: "Core", en: "Core", pt: "Core" } 
  },
  { 
    id: "s3", 
    name: "Root Cause Analysis", 
    tag: { es: "Uso diario", en: "Daily use", pt: "Uso diário" } 
  },
  { 
    id: "s4", 
    name: "Line Balancing · VSM", 
    tag: { es: "Probado", en: "Proven", pt: "Provado" } 
  },
  { 
    id: "s5", 
    name: "IA Aplicada a Calidad", 
    tag: { es: "Diferencial", en: "Differentiator", pt: "Diferencial" } 
  },
  { 
    id: "s6", 
    name: "Inglés — Profesional - B2", 
    tag: { es: "Avanzado", en: "Advanced", pt: "Avançado" } 
  },
  { 
    id: "s7", 
    name: "Portugués — Inicial", 
    tag: { es: "Inicial", en: "Beginner", pt: "Relocação Brasil" } 
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "a1",
    accent: "+17%",
    icon: "⚙️",
    text: {
      es: "Aumenté la producción un 17% en el modelo Alcatel 4007 mediante rediseño de balanceo de línea y optimización ergonómica — sin agregar headcount.",
      en: "Increased production 17% on the Alcatel 4007 model through assembly-line rebalancing and ergonomic workstation optimization — without adding headcount.",
      pt: "Aumentei a produção em 17% no modelo Alcatel 4007 por meio do redesenho do balanceamento de linha e otimização ergonômica — sem aumentar o headcount."
    }
  },
  {
    id: "a5",
    accent: "+10%",
    icon: "📈",
    text: {
      es: "Superé en un 10% la producción planificada para el modelo Alcatel 4015 mediante optimización táctica del flujo de proceso.",
      en: "Exceeded planned production by 10% for the Alcatel 4015 model through tactical process-flow optimization.",
      pt: "Superei em 10% a produção planejada para o modelo Alcatel 4015 por meio da otimização tática do fluxo do processo."
    }
  },
  {
    id: "a6",
    accent: "-3 op",
    icon: "📉",
    text: {
      es: "Participé en la reducción de 3 puestos operativos en la línea de microondas Samsung, rebalanceando estaciones de trabajo para bajar costos de fabricación.",
      en: "Participated in reducing 3 operator positions on the Samsung microwave line, rebalancing workstations to lower manufacturing costs.",
      pt: "Participei na redução de 3 postos operacionais na linha de micro-ondas Samsung, rebalanceando estações de trabalho para reduzir os custos de fabricação."
    }
  },
  {
    id: "a2",
    accent: "−2d",
    icon: "🎯",
    text: {
      es: "Reduje el onboarding en 2 días diseñando un modelo de capacitación cruzada entre turnos para lanzamientos de nuevos productos.",
      en: "Cut onboarding by 2 days by designing a cross-shift training model for new product launches.",
      pt: "Reduzi o tempo de integração (onboarding) em 2 dias desenhando um modelo de treinamento cruzado entre turnos para lançamentos de novos produtos."
    }
  },
  {
    id: "a3",
    icon: "🔬",
    text: {
      es: "Diseñé e implementé programas CAPA que eliminaron la recurrencia de defectos críticos en manufactura electrónica en múltiples líneas.",
      en: "Designed and implemented CAPA programs that eliminated recurrence of critical defects across multiple electronic manufacturing lines.",
      pt: "Desenhei e implementei programas CAPA que eliminaram a ocorrência de defeitos críticos na manufatura eletrônica em múltiplas linhas."
    }
  },
  {
    id: "a4",
    icon: "🌍",
    text: {
      es: "Entregué cumplimiento de calidad para Motorola, Huawei, Samsung, Sony y Alcatel, gestionando equipos multifuncionales.",
      en: "Delivered quality compliance for Motorola, Huawei, Samsung, Sony and Alcatel, managing cross-functional teams.",
      pt: "Entreguei conformidade de qualidade para Motorola, Huawei, Samsung, Sony e Alcatel, gerenciando equipes multidisciplinares."
    }
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "e1",
    company: "Grupo BGH",
    dates: { 
      es: "Mayo 2025 – Presente · Jornada completa · Presencial", 
      en: "May 2025 – Present · Full-time · On-site", 
      pt: "Maio de 2025 – Presente · Tempo integral · Presencial" 
    },
    role: { 
      es: "Líder de Gestión de Calidad y Mejora Continua", 
      en: "Quality Management & Continuous Improvement Lead", 
      pt: "Líder de Gestão de Qualidade e Melhoria Contínua" 
    },
    desc: {
      es: "Como parte del equipo de Gestión de Calidad, soy responsable de impulsar la mejora continua mediante la toma de decisiones basada en datos y el análisis de la causa raíz. Mis principales responsabilidades incluyen:<br/>● Realizar un <strong>ANÁLISIS DE DATOS</strong> detallado para identificar tendencias y problemas clave de calidad.<br/>● Realizar <strong>ANÁLISIS DE FALLAS</strong> para descubrir las causas raíz y prevenir su recurrencia.<br/>● Diseñar e implementar <strong>ACCIONES CORRECTIVAS Y PREVENTIVAS (CAPA)</strong>.<br/>● Liderar la <strong>VERIFICACIÓN Y VALIDACIÓN</strong> de las soluciones implementadas para garantizar su eficacia.<br/>● Colaborar con equipos multifuncionales para mejorar los procesos y la fiabilidad de la producción.",
      en: "As part of the Quality Management team, I am responsible for driving continuous improvement through data-driven decision-making and root cause analysis. My main responsibilities include:<br/>● Conducting detailed <strong>DATA ANALYSIS</strong> to identify key quality trends and issues.<br/>● Performing <strong>FAILURE ANALYSIS</strong> to uncover root causes and prevent recurrence.<br/>● Designing and implementing <strong>CORRECTIVE AND PREVENTIVE ACTIONS (CAPA)</strong>.<br/>● Leading the <strong>VERIFICATION AND VALIDATION</strong> of implemented solutions to ensure their effectiveness.<br/>● Collaborating with cross-functional teams to improve processes and manufacturing reliability.",
      pt: "Como parte da equipe de Gestão de Qualidade, sou responsável por impulsionar a melhoria contínua por meio da tomada de decisões baseada em dados e da análise de causa raiz. Minhas principais responsabilidades incluem:<br/>● Realizar uma <strong>ANÁLISE DE DADOS</strong> detalhada para identificar tendências e problemas-chave de qualidade.<br/>● Realizar <strong>ANÁLISE DE FALHAS</strong> para descobrir as causas raiz e prevenir sua recorrência.<br/>● Desenhar e implementar <strong>AÇÕES CORRETIVAS E PREVENTIVAS (CAPA)</strong>.<br/>● Liderar a <strong>VERIFICAÇÃO E VALIDAÇÃO</strong> das soluções implementadas para garantir sua eficácia.<br/>● Colaborar com equipes multidisciplinares para melhorar os processos e a confiabilidade da produção."
    },
    highlight: { es: "Mejora Continua", en: "Continuous Improvement", pt: "Melhoria Contínua" }
  },
  {
    id: "e2",
    company: "Grupo BGH",
    dates: { 
      es: "Octubre 2022 – Presente (Función parcial / paralela)", 
      en: "October 2022 – Present (Part-time / parallel function)", 
      pt: "Outubro de 2022 – Presente (Função parcial / paralela)" 
    },
    role: { 
      es: "Auditor Líder Integrado (ISO 9001 / 14001 / 45001)", 
      en: "Lead Integrated ISO Auditor (9001 / 14001 / 45001)", 
      pt: "Auditor Líder Integrado (ISO 9001 / 14001 / 45001)" 
    },
    desc: {
      es: "Realización de auditorías integradas según el plan anual, verificando la conformidad de los sistemas de gestión en paralelo a mis funciones principales. Mis responsabilidades clave incluyen:<br/>● Asegurar la <strong>CONFORMIDAD CON REQUISITOS</strong> y expectativas del cliente bajo la norma <strong>ISO 9001</strong>.<br/>● Evaluar la <strong>GESTIÓN AMBIENTAL</strong> y el cumplimiento regulatorio estricto bajo la norma <strong>ISO 14001</strong>.<br/>● Auditar condiciones de <strong>SALUD Y SEGURIDAD OCUPACIONAL</strong> y prevención de riesgos bajo <strong>ISO 45001</strong>.<br/>● Realizar la <strong>IDENTIFICACIÓN DE NO CONFORMIDADES</strong> y confección de informes de auditoría detallados.",
      en: "Conducting integrated audits according to the annual audit plan, verifying system compliance in parallel with my core quality role. Key responsibilities include:<br/>● Ensuring <strong>CONFORMITY WITH CUSTOMER REQUIREMENTS</strong> and expectations under <strong>ISO 9001</strong>.<br/>● Evaluating <strong>ENVIRONMENTAL MANAGEMENT</strong> and strict regulatory compliance under <strong>ISO 14001</strong>.<br/>● Auditing <strong>OCCUPATIONAL HEALTH AND SAFETY</strong> conditions and risk prevention under <strong>ISO 45001</strong>.<br/>● Performing <strong>NON-CONFORMITY IDENTIFICATION</strong> and drafting detailed audit reports.",
      pt: "Realização de auditorias integradas conforme o plano anual, verificando a conformidade dos sistemas de gestão em paralelo com minhas funções de qualidade. Principais responsabilidades:<br/>● Garantir a <strong>CONFORMIDADE COM REQUISITOS</strong> e expectativas do cliente sob a norma <strong>ISO 9001</strong>.<br/>● Avaliar a <strong>GESTÃO AMBIENTAL</strong> e o cumprimento regulatório sob a norma <strong>ISO 14001</strong>.<br/>● Auditar condições de <strong>SAÚDE E SEGURANÇA OCUPACIONAL</strong> e prevenção de riscos sob <strong>ISO 45001</strong>.<br/>● Realizar a <strong>IDENTIFICAÇÃO DE NÃO CONFORMIDADES</strong> e elaboração de relatórios de auditoria detalhados."
    }
  },
  {
    id: "e3",
    company: "Grupo BGH",
    dates: { 
      es: "Agosto 2019 – Febrero de 2024", 
      en: "August 2019 – February 2024", 
      pt: "Agosto de 2019 – Fevereiro de 2024" 
    },
    role: { 
      es: "Ingeniero de Procesos Senior", 
      en: "Senior Process Engineer", 
      pt: "Engenheiro de Processos Sênior" 
    },
    desc: {
      es: "Diseño y optimización de los procesos de fabricación para las líneas de electrodomésticos, controlando la documentación necesaria para la operación. Responsabilidades clave:<br/>● Diseñar el <strong>FLUJO DE PROCESO</strong> completo y realizar el <strong>BALANCEO DE LÍNEAS</strong> de producción.<br/>● Brindar <strong>CAPACITACIÓN TÉCNICA</strong> al personal operativo sobre estándares de manufactura.<br/>● Realizar <strong>ANÁLISIS DE FALLAS DE PROCESO</strong> y optimización ergonómica de puestos de trabajo.<br/>● Desarrollar <strong>DOCUMENTACIÓN DE MANTENIMIENTO</strong> con instrucciones de trabajo complejas para el mantenimiento anual de equipos críticos.",
      en: "Design and optimization of manufacturing processes for appliance lines, controlling critical operational documentation. Key responsibilities:<br/>● Designing the full <strong>PROCESS FLOW</strong> and performing production <strong>LINE BALANCING</strong>.<br/>● Providing <strong>TECHNICAL TRAINING</strong> to operational staff on manufacturing standards.<br/>● Conducting <strong>PROCESS FAILURE ANALYSIS</strong> and ergonomic workstation optimization.<br/>● Developing <strong>MAINTENANCE DOCUMENTATION</strong> with complex work instructions for annual critical equipment maintenance.",
      pt: "Projeto e otimização de processos de fabricação para as linhas de eletrodomésticos, controlando a documentação operacional crítica. Principais responsabilidades:<br/>● Projetar o <strong>FLUXO DE PROCESSO</strong> completo e realizar o <strong>BALANCEAMENTO DE LINHAS</strong> de produção.<br/>● Ministrar <strong>TREINAMENTO TÉCNICO</strong> ao pessoal operacional sobre padrões de manufatura.<br/>● Realizar <strong>ANÁLISE DE FALHAS DE PROCESSO</strong> e otimização ergonômica de postos de trabalho.<br/>● Desenvolver <strong>DOCUMENTAÇÃO DE MANUTENÇÃO</strong> com instruções complexas para a manutenção anual de equipamentos críticos."
    }
  },
  {
    id: "e4",
    company: "Grupo BGH",
    dates: { 
      es: "Febrero 2017 – Agosto 2019", 
      en: "February 2017 – August 2019", 
      pt: "Fevereiro de 2017 – Agosto de 2019" 
    },
    role: { 
      es: "Técnico Metrólogo / Laboratorio de Ingeniería", 
      en: "Metrology & Engineering Laboratory Specialist", 
      pt: "Técnico Metrologista / Laboratório de Engenharia" 
    },
    desc: {
      es: "Calibración de equipos de medición críticos para la manufactura electrónica, asegurando los más altos estándares de trazabilidad metrológica. Responsabilidades clave:<br/>● Ejecutar calibraciones bajo los lineamientos y principios de la norma <strong>ISO 17025</strong>.<br/>● Asegurar la <strong>TRAZABILIDAD METROLÓGICA</strong> de equipos críticos de planta.<br/>● Calibrar instrumentación de alta complejidad, incluyendo <strong>GENERADORES DE RADIOFRECUENCIA (RF)</strong> y <strong>GENERADORES DE SEÑAL GPS</strong>.<br/>● Calibrar y registrar equipos de medición estándar como <strong>HI-POT TESTERS</strong>, balanzas y multímetros.",
      en: "Calibration of critical measurement equipment for electronics manufacturing, ensuring the highest standards of metrological traceability. Key responsibilities:<br/>● Executing calibrations under the guidelines and principles of the <strong>ISO 17025</strong> standard.<br/>● Ensuring <strong>METROLOGICAL TRACEABILITY</strong> for critical plant equipment.<br/>● Calibrating high-complexity instrumentation, including <strong>RADIO FREQUENCY (RF) GENERATORS</strong> and <strong>GPS SIGNAL GENERATORS</strong>.<br/>● Calibrating and recording standard measurement devices like <strong>HI-POT TESTERS</strong>, scales, and multimeters.",
      pt: "Calibração de equipamentos de medição críticos para a manufatura eletrônica, garantindo os mais altos padrões de rastreabilidade metrológica. Principais responsabilidades:<br/>● Executar calibrações sob as diretrizes e princípios da norma <strong>ISO 17025</strong>.<br/>● Garantir a <strong>RASTREABILIDADE METROLÓGICA</strong> para equipamentos críticos da planta.<br/>● Calibrar instrumentação de alta qualidade, incluindo <strong>GERADORES DE RADIOFRECUÊNCIA (RF)</strong> e <strong>GERADORES DE SINAL GPS</strong>.<br/>● Calibrar e registrar dispositivos padrão de medição, como <strong>TESTADORES HI-POT</strong>, balanças e multímetros."
    }
  },
  {
    id: "e5",
    company: "Grupo BGH",
    dates: { 
      es: "Marzo 2014 – Febrero de 2017", 
      en: "March 2014 – February 2017", 
      pt: "Março de 2014 – Fevereiro de 2017" 
    },
    role: { 
      es: "Ingeniero de Procesos — Telefonía Móvil (Marcas Globales)", 
      en: "Process Engineer — Mobile Business Unit (Global Brands)", 
      pt: "Engenheiro de Processos — Telefonia Móvel (Marcas Globais)" 
    },
    desc: {
      es: "Diseño del proceso de fabricación de celulares para marcas globales de primer nivel como Motorola, Huawei, ZTE, Alcatel y Sony. La fabricación en esta unidad cesó en febrero de 2017 debido al cierre de la unidad de telefonía móvil. Responsabilidades clave:<br/>● Aplicar metodologías de <strong>PLANIFICACIÓN DE CALIDAD (APQP)</strong> y herramientas <strong>CORE TOOLS</strong> (FMEA, Control Plan).<br/>● Realizar el <strong>BALANCEO DE OPERACIONES</strong> de línea para alcanzar los objetivos de producción y calidad requeridos.<br/>● Disminuir los <strong>COSTOS DE MANUFACTURA</strong> mediante mejoras metodológicas en los procesos de ensamble.<br/>● Confeccionar <strong>INSTRUCCIONES DE TRABAJO</strong> complejas y dar soporte técnico diario en planta.",
      en: "Design of mobile phone manufacturing processes for top-tier global brands such as Motorola, Huawei, ZTE, Alcatel, and Sony. Manufacturing in this unit ceased in February 2017 due to the closure of the mobile business unit. Key responsibilities:<br/>● Applying <strong>QUALITY PLANNING (APQP)</strong> methodologies and <strong>CORE TOOLS</strong> (FMEA, Control Plan).<br/>● Performing assembly <strong>LINE BALANCING</strong> to achieve required production and quality targets.<br/>● Lowering <strong>MANUFACTURING COSTS</strong> through methodological improvements in assembly processes.<br/>● Drafting complex <strong>WORK INSTRUCTIONS</strong> and providing daily technical support on the plant floor.",
      pt: "Projeto do processo de fabricação de celulares para marcas globais de grande porte como Motorola, Huawei, ZTE, Alcatel e Sony. A fabricação nesta unidade cessou em fevereiro de 2017 devido ao fechamento da divisão de telefonia móvel. Principais responsabilidades:<br/>● Aplicar metodologias de <strong>PLANEJAMENTO DE QUALIDADE (APQP)</strong> e ferramentas <strong>CORE TOOLS</strong> (FMEA, Control Plan).<br/>● Realizar o <strong>BALANCEAMENTO DE LINHA</strong> para alcançar as metas de produção e qualidade exigidas.<br/>● Reduzir os <strong>CUSTOS DE MANUFATURA</strong> por meio de melhorias metodológicas nos processos de montagem.<br/>● Elaborar <strong>INSTRUÇÕES DE TRABALHO</strong> complexas e fornecer suporte técnico diário na planta."
    },
    highlight: { 
      es: "+17% productividad (Alcatel) · Motorola · Sony · Huawei · ZTE", 
      en: "+17% productivity (Alcatel) · Motorola · Sony · Huawei · ZTE", 
      pt: "+17% produtividade (Alcatel) · Motorola · Sony · Huawei · ZTE" 
    }
  },
  {
    id: "e6",
    company: "Grupo BGH",
    dates: { 
      es: "Mayo 2012 – Febrero de 2014", 
      en: "May 2012 – February 2014", 
      pt: "Maio de 2012 – Fevereiro de 2014" 
    },
    role: { 
      es: "Analista de Calidad NPI (Nuevos Lanzamientos)", 
      en: "NPI Quality Analyst (New Product Introduction)", 
      pt: "Analista de Qualidade NPI (Novos Lançamentos)" 
    },
    desc: {
      es: "Aseguramiento de la calidad en las etapas de Introducción de Nuevos Productos (NPI) y lanzamientos industriales. Responsabilidades clave:<br/>● Auditar actividades de cada lanzamiento para verificar la conformidad con <strong>ISO 9001</strong> e <strong>ISO/TS 16949</strong>.<br/>● Elaborar <strong>PLANES DE CONTROL</strong> e instrucciones de inspección de nuevos componentes.<br/>● Participar activamente en la confección de <strong>FMEAs DE DISEÑO Y PROCESO</strong>.<br/>● Realizar la <strong>TRADUCCIÓN TÉCNICA</strong> de inglés a español de especificaciones corporativas.<br/>● Confeccionar <strong>INFORMES TÉCNICOS DE LANZAMIENTO</strong> para la gerencia y clientes globales.",
      en: "Quality assurance during New Product Introduction (NPI) and industrial manufacturing launch phases. Key responsibilities:<br/>● Auditing launch activities to verify compliance with <strong>ISO 9001</strong> and <strong>ISO/TS 16949</strong> standards.<br/>● Developing <strong>CONTROL PLANS</strong> and inspection instructions for new components.<br/>● Participating actively in the development of <strong>DESIGN AND PROCESS FMEAs</strong>.<br/>● Performing <strong>TECHNICAL TRANSLATION</strong> (English to Spanish) of corporate specifications.<br/>● Drafting <strong>LAUNCH TECHNICAL REPORTS</strong> for management and global clients.",
      pt: "Garantia de qualidade nas fases de Introdução de Novos Produtos (NPI) e lançamentos industriais. Principais responsabilidades:<br/>● Auditar atividades de lançamento para verificar conformidade com as normas <strong>ISO 9001</strong> e <strong>ISO/TS 16949</strong>.<br/>● Elaborar <strong>PLANOS DE CONTROLE</strong> e instruções de inspeção para novos componentes.<br/>● Participar ativamente na elaboração de <strong>FMEAs DE PROJETO E PROCESSO</strong>.<br/>● Realizar a <strong>TRADUÇÃO TÉCNICA</strong> (inglês para espanhol) de especificações corporativas.<br/>● Elaborar <strong>RELATÓRIOS TÉCNICOS DE LANÇAMENTO</strong> para a gerência e clientes globais."
    }
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "defect-recorder",
    tag: { 
      es: "Web App · Herramienta de Calidad · 2025", 
      en: "Web App · Quality Tool · 2025", 
      pt: "Web App · Ferramenta de Qualidade · 2025" 
    },
    title: "PCB Defect Recorder",
    desc: {
      es: "Registra defectos directamente sobre la imagen del producto. Datos en tiempo real, mapa de calor, estadísticas automáticas.",
      en: "Register defects directly on the product image. Real-time data, heat map, automatic statistics.",
      pt: "Registra defeitos diretamente sobre a imagem do produto. Dados em tempo real, mapa de calor, estatísticas automáticas."
    },
    features: [
      { es: "Registro sobre imagen del producto", en: "Register failures on product image", pt: "Registro sobre imagem do produto" },
      { es: "Estadísticas automáticas y mapa de calor", en: "Automatic statistics & heat map", pt: "Estatísticas automáticas e mapa de calor" },
      { es: "Reduce tiempo de carga del operario", en: "Reduces operator data-entry time", pt: "Reduz o tempo de inserção de dados do operador" },
      { es: "100% local — sin servidores externos", en: "100% local — no external servers", pt: "100% local — sem servidores externos" }
    ],
    link: "https://guillermocanete.github.io/DefectRecorder/"
  },
  {
    id: "iso-analyzer",
    tag: { 
      es: "Web App · IA · En desarrollo", 
      en: "Web App · AI Tool · In Development", 
      pt: "Web App · IA · Em desenvolvimento" 
    },
    title: "ISO Compliance Analyzer",
    desc: {
      es: "Subís tu documentación y la IA analiza qué puntos de la norma están cubiertos, cuáles faltan y qué es redundante.",
      en: "Upload your documentation and AI analyzes which ISO clauses are covered, which are missing, and what's redundant.",
      pt: "Você envia sua documentação e a IA analisa quais pontos da norma estão cobertos, quais estão faltando e o que é redundante."
    },
    features: [
      { es: "Detección automática de puntos ISO cumplidos", en: "Automatic detection of covered ISO clauses", pt: "Detecção automática de pontos ISO cumplidos" },
      { es: "Identificación de gaps y no conformidades potenciales", en: "Gap identification and potential non-conformities", pt: "Identificação de lacunas (gaps) e não conformidades potenciais" },
      { es: "Análisis de redundancia documental", en: "Document redundancy analysis", pt: "Análise de redundância documental" },
      { es: "ISO 9001 · 14001 · 45001", en: "ISO 9001 · 14001 · 45001", pt: "ISO 9001 · 14001 · 45001" }
    ],
    wip: true
  }
];

export const CERTS: CertItem[] = [
  { 
    icon: "🏅", 
    name: { 
      es: "ISO 9001 / 14001 / 45001 Auditor", 
      en: "ISO 9001 / 14001 / 45001 Auditor", 
      pt: "Auditor ISO 9001 / 14001 / 45001" 
    }, 
    org: { 
      es: "Auditor Interno — Activo", 
      en: "Internal Auditor — Active", 
      pt: "Auditor Interno — Ativo" 
    } 
  },
  { 
    icon: "🤖", 
    name: { 
      es: "Claude 101 — Uso Profesional con IA", 
      en: "Claude 101 — AI Professional Use", 
      pt: "Claude 101 — Uso Profissional com IA" 
    }, 
    org: { 
      es: "Anthropic Education · Abr 2026", 
      en: "Anthropic Education · Apr 2026", 
      pt: "Anthropic Education · Abr 2026" 
    } 
  },
  { 
    icon: "⚡", 
    name: { 
      es: "Claude Code 101", 
      en: "Claude Code 101", 
      pt: "Claude Code 101" 
    }, 
    org: { 
      es: "Anthropic Education · 2026", 
      en: "Anthropic Education · 2026", 
      pt: "Anthropic Education · 2026" 
    } 
  },
  { 
    icon: "🧠", 
    name: { 
      es: "Marco de Competencia y Fundamentos de IA", 
      en: "AI Fluency Framework & Foundations", 
      pt: "Estrutura de Competência e Fundamentos de IA" 
    }, 
    org: { 
      es: "Anthropic · Certificado de Finalización", 
      en: "Anthropic · Certificate of Completion", 
      pt: "Anthropic · Certificado de Conclusão" 
    } 
  },
  { 
    icon: "🤖", 
    name: { 
      es: "GenAI in Data Analytics (IA Generativa en Análisis de Datos)", 
      en: "GenAI in Data Analytics", 
      pt: "GenAI in Data Analytics" 
    }, 
    org: { 
      es: "Meta · Credencial Jun 2026", 
      en: "Meta · Credential Jun 2026", 
      pt: "Meta · Credential Jun 2026" 
    },
    link: "/CV/certificates/cert_genai_data_analytics.pdf"
  },
  { 
    icon: "👑", 
    name: { 
      es: "Autoridad, Dirección y Liderazgo", 
      en: "Authority, Management & Leadership", 
      pt: "Autoridade, Direção e Liderança" 
    }, 
    org: { 
      es: "UNAM (Univ. Nacional Autónoma de México) · Credencial Jun 2026", 
      en: "UNAM (National Autonomous Univ. of Mexico) · Credential Jun 2026", 
      pt: "UNAM (Univ. Nacional Autónoma de México) · Credential Jun 2026" 
    },
    link: "/CV/certificates/cert_liderazgo_unam.pdf"
  },
  { 
    icon: "📊", 
    name: { 
      es: "Análisis de Negocios y Gestión de Procesos", 
      en: "Business Analysis & Process Management", 
      pt: "Análise de Negócios e Gestão de Processos" 
    }, 
    org: { 
      es: "Coursera · BPMN / Lucidchart · Credencial Nov 2025", 
      en: "Coursera · BPMN / Lucidchart · Credential Nov 2025", 
      pt: "Coursera · BPMN / Lucidchart · Credencial Nov 2025" 
    },
    link: "/CV/certificates/cert_business_analysis.pdf"
  },
  { 
    icon: "🎓", 
    name: { 
      es: "Curso y Certificación: Experto en Gestión de Proyectos", 
      en: "Course & Certification: Project Management Expert", 
      pt: "Curso e Certificação: Especialista em Gestão de Projetos" 
    }, 
    org: { 
      es: "UTN FRBA · Certificación Profesional · 2015–2016", 
      en: "UTN FRBA · Professional Certification · 2015–2016", 
      pt: "UTN FRBA · Certificação Profissional · 2015–2016" 
    } 
  }
];

export const ARTICLES: Article[] = [
  {
    id: "titanic",
    category: { 
      es: "Gestión · Agilidad · Mayo 2025", 
      en: "Management · Agility · May 2025", 
      pt: "Gestão · Agilidade · Maio 2025" 
    },
    title: { 
      es: "El Timón de la Agilidad: Cómo evitar el destino del Titanic", 
      en: "The Helm of Agility: Avoiding the Titanic's fate", 
      pt: "O Leme da Agilidade: Como evitar o destino do Titanic" 
    },
    excerpt: {
      es: "El Titanic no se hundió por ser grande. Se hundió porque su timón era demasiado pequeño para girar a tiempo. Un análisis sobre burocracia, Jidoka y el costo real de no empoderar a quien más sabe.",
      en: "The Titanic didn't sink because it was big. It sank because its rudder was too small to turn in time. An analysis of bureaucracy, Jidoka, and the real cost of not empowering those who know best.",
      pt: "O Titanic não afundou por ser grande. Afundou porque seu leme era muito pequeno para virar a tempo. Uma análise sobre burocracia, Jidoka e o custo real de não empoderar quem mais sabe."
    },
    content: {
      es: `<h2>El Titanic no se hundió por ser grande.</h2>
<p>Se hundió porque su timón era demasiado pequeño para girar a tiempo.</p>
<p>No por un único error, sino por la acumulación de varios: exceso de confianza, advertencias ignoradas y —el detalle que más me impacta como especialista en procesos— un timón desproporcionadamente pequeño para el tamaño del buque. <strong>Un gigante que no podía girar a tiempo.</strong></p>
<p>Cuando escuché esta analogía por primera vez, pensé de inmediato en las empresas donde trabajé. ¿Cuántas organizaciones conozco que son enormes en recursos pero lentas para reaccionar? ¿Cuántas veces vi cómo una buena idea moría en el quinto nivel de aprobación?</p>
<hr/>
<h2>El problema no es la burocracia. Es lo que la genera.</h2>
<p>La burocracia, en su origen, tiene sentido. Yo trabajo con ISO 9001 hace más de una década y entiendo el valor de los procesos bien definidos.</p>
<p>Pero existe un punto de quiebre en el que el proceso deja de servir al negocio y empieza a servirse a sí mismo. Conozco empresas donde firmar un contrato requería la aprobación del gerente general: un trámite que tardaba semanas. Mientras tanto, el cliente se iba con la competencia. <strong>Eso es un timón pequeño.</strong></p>
<p>Lo que genera esa burocracia excesiva, en el fondo, es miedo: miedo a delegar. Un sistema que penaliza el error produce capas de aprobaciones para que nadie quede expuesto.</p>
<hr/>
<h2>El mando medio no es el villano.</h2>
<p>El problema no es el mando medio, sino el rol que se le asignó. In un modelo jerárquico, el gerente intermedio actúa como un policía. En un modelo ágil, ese mismo rol puede convertirse en un catalizador. <strong>La diferencia no está en la persona, sino en el sistema que la rodea.</strong></p>
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
<p>Not from a single mistake, but from an accumulation: overconfidence, ignored warnings, and —the detail that strikes me most as a process specialist— a rudder disproportionately small for the vessel's size. <strong>A giant that couldn't steer in time.</strong></p>
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
<p><strong>Jidoka - a pillar of the Toyota Production System - means giving the line operator the power to stop production when they detect a defect. Not the supervisor. Not the manager. The operator.</strong></p>
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
<div class="closing">How big is the rudder in your organization?</div>`,
      pt: `<h2>O Titanic não afundou por ser grande.</h2>
<p>Afundou porque seu leme era muito pequeno para virar a tempo.</p>
<p>Não por um único erro, mas pelo acúmulo de vários: excesso de confiança, avisos ignorados e —o detalhe que mais me impacta como especialista em processos— um leme desproporcionalmente pequeno para o tamanho do navio. <strong>Um gigante que não conseguia girar a tempo.</strong></p>
<p>Quando ouvi essa analogia pela primeira vez, pensei imediatamente nas empresas onde trabalhei. Quantas organizações conheço que têm recursos enormes, mas são lentas para reagir? Quantas vezes vi uma boa ideia morrer no quinto nível de aprovação?</p>
<hr/>
<h2>O problema não é a burocracia. É o que a gera.</h2>
<p>A burocracia, em sua origem, faz sentido. Trabalho com a ISO 9001 há mais de uma década e entendo o valor de processos bem definidos.</p>
<p>Mas há um ponto de ruptura em que o processo deixa de servir ao negócio e começa a servir a si mesmo. Conheço empresas onde assinar um contrato exigia a aprovação do diretor geral: um trâmite que demorava semanas. Enquanto isso, o cliente ia para a concorrência. <strong>Isso é um leme pequeno.</strong></p>
<p>O que gera essa burocracia excessiva, no fundo, é o medo: medo de delegar. Um sistema que pune o erro produz camadas de aprovação para que ninguém fique exposto.</p>
<hr/>
<h2>O gerente médio não é o vilão.</h2>
<p>O problema não é o gerente médio, mas o papel que lhe foi atribuído. Em um modelo hierárquico, ele atua como um policial. Em um modelo ágil, esse mesmo papel pode se tornar um catalisador. <strong>A diferença não está na pessoa, mas no sistema que a envolve.</strong></p>
<hr/>
<h2>O que a Toyota entendeu há setenta anos.</h2>
<p>O <strong>Jidoka</strong> —um dos pilares do Sistema Toyota de Produção— consiste em dar ao operador de linha o poder de parar a produção quando detecta um defeito. Não ao supervisor. Não ao gerente. <strong>Ao operador.</strong></p>
<p>Isso é empoderamento real. O problema é resolvido na origem, antes que se espalhe. A pessoa que mais conhece esse ponto do processo é quem o vivencia todos os dias.</p>
<p>Quando desenho processos, sempre me pergunto: quem tem a informação mais fresca? Está habilitado para agir? Se a resposta for não, temos um leme pequeno.</p>
<hr/>
<h2>Falhar rápido é bom. Aprender rápido é melhor.</h2>
<p>O valor não está na falha em si, mas na velocidade do aprendizado que dela deriva. Na manufatura, uma não conformidade detectada tardiamente custa dez vezes mais do que uma detectada na origem. O custo real não é o defeito: é tudo o que foi processado em cima dele.</p>
<p>Para que esse ciclo funcione, é necessária **segurança psicológica**: a certeza de que errar no processo de aprendizagem não custará a carreira de ninguém.</p>
<hr/>
<h2>O novo leme.</h2>
<p>O Titanic não precisava ser menor. Precisava de um leme à altura do seu tamanho. As organizações de hoje não precisam encolher, mas sim desenvolver a capacidade de girar: estruturas mais planas que distribuem autoridade, colaboradores empoderados que atuam como sensores do sistema e uma cultura onde o aprendizado seja mais rápido que o erro.</p>
<p>A Zappos tentou eliminar a hierarquia de uma vez com a Holacracy e perdeu 29% da sua equipe no primeiro ano. A transformação não se consegue por decreto: consegue-se redesenhando o sistema de navegação completo. A Toyota demonstra isso há décadas. O Spotify também.</p>
<p>A pergunta para qualquer líder hoje não é "somos grandes o suficiente?"</p>
<p><strong>É: "conseguimos girar a tempo?"</strong></p>
<div class="closing">Quão grande é o leme na sua organização?</div>`
    }
  },
  {
    id: "spacex",
    category: { 
      es: "Liderazgo · Innovación · Junio 2026", 
      en: "Leadership · Innovation · June 2026", 
      pt: "Liderança · Inovação · Junho 2026" 
    },
    title: { 
      es: 'EL MITO DE LA PERFECCIÓN: Cómo el paradigma de SpaceX está transformando el liderazgo y los mandos medios en la industria', 
      en: 'THE MYTH OF PERFECTION: How the SpaceX Paradigm is Transforming Leadership and Middle Management in Industry', 
      pt: 'O MITO DA PERFEIÇÃO: Como o paradigma da SpaceX está transformando a liderança e a gerência média na indústria' 
    },
    excerpt: {
      es: '¿Es el "fallo controlado" el verdadero secreto de la innovación industrial moderna? Un análisis de la velocidad de escape de la información, el framing de riesgo y el rol de los mandos medios como mentores.',
      en: 'Is "controlled failure" the true secret of modern industrial innovation? An analysis of information escape velocity, risk framing, and middle managers as technical mentors.',
      pt: 'Será a "falha controlada" o verdadeiro segredo da inovação industrial moderna? Uma análise da velocidade de escape da informação, delimitação de risco e gerentes médios como mentores.'
    },
    content: {
      es: `<div class="article-image-container mb-6">
  <img src="IMAGE_PLACEHOLDER" alt="SpaceX Starship launch and explosion" class="w-full h-auto rounded border border-cv-line object-cover" />
</div>
<p><strong>¿Es el "fallo controlado" el verdadero secreto de la innovación industrial moderna?</strong></p>
<p>Durante décadas, la manufactura y la ingeniería pesada operaron bajo un dogma estricto: <em>"El fallo no es una opción"</em>. El enfoque tradicional exige meses de simulaciones, comités de revisión y parálisis por análisis para asegurar que todo sea "seguro y perfecto" antes del primer intento.</p>
<p>Pero organizaciones hiperdinámicas como SpaceX han reescrito las reglas del juego con el desarrollo iterativo de la Starship. Ver explotar un prototipo en vivo no es un fracaso; es la aceleración deliberada del ciclo de aprendizaje.</p>
<p>¿Por qué este enfoque está desplazando a la gestión tradicional? Aquí 4 claves de diseño organizacional:</p>
<hr/>
<h2>1️⃣ Velocidad de Escape de la Información</h2>
<p>Tres minutos de vuelo real y telemetría empírica aportan más datos puros que tres años de simulaciones por computadora. El conocimiento adquirido vale más que el costo del prototipo.</p>
<h2>2️⃣ Gestión del Riesgo (Risk Framing)</h2>
<p>Esto no es imprudencia. El fallo se permite bajo límites estrictos: en fase de prototipado, con materiales optimizados en costos y sin comprometer la seguridad humana. Se calcula el impacto frente al <em>Cost of Delay</em> (Costo del Retraso).</p>
<h2>3️⃣ Seguridad Psicológica</h2>
<p>Para que la agilidad funcione, la cultura debe cambiar. El personal operativo no debe temer al error, sino dominar su diagnóstico y corrección en ciclos de horas, no de semanas (como propone la profesora Amy Edmondson de Harvard).</p>
<h2>4️⃣ Mandos Medios como Mentores Técnicos</h2>
<p>En entornos ágiles, los jefes de área dejan de ser "policías del cumplimiento" de estándares rígidos. Se convierten en coaches que delimitan las fronteras de experimentación y guían al equipo mediante análisis de causa raíz tras cada iteración.</p>
<hr/>
<p><strong>La gran lección industrial:</strong> En entornos de alta incertidumbre, el liderazgo moderno no radica en diseñar sistemas infalibles de entrada, sino en construir organizaciones con una velocidad de aprendizaje y resiliencia superior a la de sus competidores. El metal retorcido de hoy es la ciencia del mañana.</p>
<div class="closing mt-6 pt-4 border-t border-cv-line/45">
  <p><em>(Inspirado en los principios de Product Development Flow de Don Reinertsen y la cultura de diseño de SpaceX).</em></p>
  <p>👇 ¿En tu organización se penaliza el error o se utiliza metodológicamente como combustible para innovar? Házmelo saber en LinkedIn.</p>
</div>`,
      en: `<div class="article-image-container mb-6">
  <img src="IMAGE_PLACEHOLDER" alt="SpaceX Starship launch and explosion" class="w-full h-auto rounded border border-cv-line object-cover" />
</div>
<p><strong>Is "controlled failure" the true secret of modern industrial innovation?</strong></p>
<p>For decades, manufacturing and heavy engineering operated under a strict dogma: <em>"Failure is not an option."</em> The traditional approach demands months of simulations, review committees, and analysis paralysis to ensure everything is "safe and perfect" before the first attempt.</p>
<p>But hyper-dynamic organizations like SpaceX have rewritten the rules of the game with the iterative development of Starship. Watching a prototype explode live is not a failure; it is the deliberate acceleration of the learning curve.</p>
<p>Why is this approach displacing traditional management? Here are 4 organizational design keys:</p>
<hr/>
<h2>1️⃣ Information Escape Velocity</h2>
<p>Three minutes of real flight and empirical telemetry provide more pure data than three years of computer simulations. The knowledge acquired is worth more than the cost of the prototype.</p>
<h2>2️⃣ Risk Management (Risk Framing)</h2>
<p>This is not recklessness. Failure is permitted under strict limits: in the prototyping phase, with cost-optimized materials, and without compromising human safety. The impact is calculated against the <em>Cost of Delay</em>.</p>
<h2>3️⃣ Psychological Safety</h2>
<p>For agility to work, the culture must change. Operational staff must not fear error; instead, they must master its diagnosis and correction in cycles of hours, not weeks (as proposed by Harvard Professor Amy Edmondson).</p>
<h2>4️⃣ Middle Managers as Technical Mentors</h2>
<p>In agile environments, department heads stop being "compliance cops" of rigid standards. They become coaches who define the boundaries of experimentation and guide the team through root-cause analysis after each iteration.</p>
<hr/>
<p><strong>The great industrial lesson:</strong> In high-uncertainty environments, modern leadership is not about designing infallible systems from the start, but about building organizations with a learning speed and resilience superior to their competitors. Today's twisted metal is tomorrow's science.</p>
<div class="closing mt-6 pt-4 border-t border-cv-line/45">
  <p><em>(Inspired by the principles of Product Development Flow by Don Reinertsen and SpaceX's design culture).</em></p>
  <p>👇 In your organization, is error penalized or is it methodologically used as fuel to innovate? Let me know on LinkedIn.</p>
</div>`,
      pt: `<div class="article-image-container mb-6">
  <img src="IMAGE_PLACEHOLDER" alt="SpaceX Starship launch and explosion" class="w-full h-auto rounded border border-cv-line object-cover" />
</div>
<p><strong>Será a "falha controlada" o verdadeiro segredo da inovação industrial moderna?</strong></p>
<p>Durante décadas, a manufatura e a engenharia pesada operaram sob um dogma estrito: <em>"A falha não é uma opção"</em>. A abordagem tradicional exige meses de simulações, comitês de revisão e paralisia por análise para garantir que tudo seja "seguro e perfeito" antes da primeira tentativa.</p>
<p>Mas organizações hiperdinâmicas como a SpaceX reescreveram as regras do jogo com o desenvolvimento iterativo da Starship. Ver um protótipo explodir ao vivo não é um fracasso; é a aceleração deliberada da curva de aprendizado.</p>
<p>Por que esta abordagem está deslocando a gestão tradicional? Aqui estão 4 chaves de design organizacional:</p>
<hr/>
<h2>1️⃣ Velocidade de Escape da Informação</h2>
<p>Três minutos de voo real e telemetria empírica fornecem mais dados puros do que três anos de simulações computadorizadas. O conhecimento adquirido vale mais do que o custo do protótipo.</p>
<h2>2️⃣ Gestão do Risco (Risk Framing)</h2>
<p>Isso não é imprudência. A falha é permitida sob limites estritos: na fase de prototipagem, com materiais otimizados em custos e sem comprometer a segurança humana. O impacto é calculado frente ao <em>Cost of Delay</em> (Custo do Atraso).</p>
<h2>3️⃣ Segurança Psicológica</h2>
<p>Para que a agilidade funcione, a cultura deve mudar. A equipe operacional não deve temer o erro, mas dominar seu diagnóstico e correção em ciclos de horas, não de semanas (como proposto pela professora Amy Edmondson de Harvard).</p>
<h2>4️⃣ Gerentes Médios como Mentores Técnicos</h2>
<p>Em ambientes ágeis, os gerentes médios deixam de ser "policiais de conformidade" de padrões rígidos. Tornam-se coaches que delimitam as fronteiras de experimentação e guiam a equipe por meio de análises de causa raiz após cada iteração.</p>
<hr/>
<p><strong>A grande lição industrial:</strong> Em ambientes de alta incerteza, a liderança moderna não está em projetar sistemas infalíveis de início, mas em construir organizações com uma velocidade de aprendizado e resiliência superior à de seus concorrentes. O metal retorcido de hoje é a ciência de amanhã.</p>
<div class="closing mt-6 pt-4 border-t border-cv-line/45">
  <p><em>(Inspirado nos princípios de Product Development Flow de Don Reinertsen e na cultura de design da SpaceX).</em></p>
  <p>👇 Na sua organização, o erro é penalizado ou é utilizado metodologicamente como combustível para inovar? Deixe-me saber no LinkedIn.</p>
</div>`
    }
  }
];
