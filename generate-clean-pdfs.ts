import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import { EXPERIENCES, CERTS, ACHIEVEMENTS, SKILLS } from './src/data.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translations = {
  es: {
    title: "Especialista en Excelencia Operacional e Ingeniería de Procesos",
    contact: "Contacto",
    location: "Tierra del Fuego, Argentina",
    summaryTitle: "Perfil Profesional",
    summary: "Profesional en Excelencia Operacional e Ingeniería de Procesos con 14+ años de trayectoria en manufactura compleja y alta tecnología, convirtiendo problemas operativos en resultados medibles para marcas globales como Motorola, Samsung, Huawei, Sony y Alcatel. Auditor certificado ISO 9001 · 14001 · 45001. Diseña procesos, implementa mejora continua y construye herramientas digitales propias aplicando IA. Disponible para relocalización nacional e internacional.",
    skillsTitle: "Habilidades Clave",
    achievementsTitle: "Logros y Resultados Destacados",
    experienceTitle: "Experiencia Profesional",
    certsTitle: "Educación y Certificaciones",
    certBgh: "Auditor Interno de Sistemas de Gestión Integrados: ISO 9001, ISO 14001, ISO 45001 — BGH"
  },
  en: {
    title: "Operational Excellence & Process Engineering Specialist",
    contact: "Contact Information",
    location: "Tierra del Fuego, Argentina",
    summaryTitle: "Professional Profile",
    summary: "Professional in Operational Excellence & Process Engineering with over 14 years of experience in complex manufacturing and high-tech industries, converting operational issues into measurable results for global brands like Motorola, Samsung, Huawei, Sony, and Alcatel. Certified Auditor for ISO 9001 · 14001 · 45001. Designs processes, implements continuous improvement, and builds custom digital tools leveraging AI. Available for national and international relocation.",
    skillsTitle: "Core Competencies",
    achievementsTitle: "Key Achievements & Metrics",
    experienceTitle: "Professional Experience",
    certsTitle: "Education & Certifications",
    certBgh: "Internal Auditor of Integrated Management Systems: ISO 9001, ISO 14001, ISO 45001 — BGH"
  },
  pt: {
    title: "Especialista em Excelência Operacional e Engenharia de Processos",
    contact: "Informações de Contato",
    location: "Tierra del Fuego, Argentina",
    summaryTitle: "Perfil Profissional",
    summary: "Profissional em Excelência Operacional e Engenharia de Processos com 14+ anos de trajetória em manufatura complexa e alta tecnologia, convertendo problemas operacionais em resultados mensuráveis para marcas globais como Motorola, Samsung, Huawei, Sony e Alcatel. Auditor certificado ISO 9001 · 14001 · 45001. Projeta processos, implementa melhoria contínua e constrói ferramentas digitais próprias aplicando IA. Disponível para relocação nacional e internacional.",
    skillsTitle: "Habilidades Principais",
    achievementsTitle: "Resultados e Métricas de Impacto",
    experienceTitle: "Experiência Profissional",
    certsTitle: "Educação e Certificações",
    certBgh: "Auditor Interno de Sistemas de Gestão Integrados: ISO 9001, ISO 14001, ISO 45001 — BGH"
  }
};

function cleanHtmlDescription(desc: string): string {
  // Convert standard <br/>● into bullet lists cleanly or keep as clean html
  let html = desc.replace(/<br\s*\/?>●/g, '</li><li>');
  if (html.includes('<li>')) {
    html = '<ul style="margin: 4px 0 0 0; padding-left: 15px; font-size: 9.5pt;"><li>' + html.substring(html.indexOf('<li>') + 4) + '</li></ul>';
    // Remove duplicate starting/ending points if any
    html = html.replace(/<br\s*\/?>/g, '');
  }
  return html;
}

async function run() {
  console.log("Launching headless browser for clean PDF generation...");
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  const languages: Array<"es" | "en" | "pt"> = ['es', 'en', 'pt'];
  for (const lang of languages) {
    console.log(`Generating clean resume PDF for: ${lang}...`);
    const trans = translations[lang];

    // Filter skills (only name)
    const skillsHtml = SKILLS.map(s => {
      return `<div class="skill-item">${s.name}</div>`;
    }).join('\n');

    // Filter achievements
    const achievementsHtml = ACHIEVEMENTS.map(a => {
      const text = a.text[lang];
      return `<div class="achievement-item">● ${text}</div>`;
    }).join('\n');

    // Filter experiences
    const experiencesHtml = EXPERIENCES.map(e => {
      const role = e.role[lang];
      const dates = e.dates[lang];
      const desc = cleanHtmlDescription(e.desc[lang]);
      return `
        <div class="experience-item">
          <div class="exp-header">
            <span class="exp-title">${role}</span>
            <span class="exp-date">${dates}</span>
          </div>
          <div class="exp-company">${e.company}</div>
          <div class="exp-desc-container">${desc}</div>
        </div>
      `;
    }).join('\n');

    // Filter certifications
    const certsHtml = CERTS.map(c => {
      const name = c.name[lang];
      const org = c.org[lang];
      return `
        <div class="cert-item">
          <strong>${c.icon} ${name}</strong><br/>
          <span style="font-size: 8.5pt; color: #666;">${org}</span>
        </div>
      `;
    }).join('\n');

    const htmlContent = `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>Guillermo Cañete - CV</title>
  <style>
    @page {
      size: A4;
      margin: 10mm 12mm 10mm 12mm;
    }
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: #2c2924;
      line-height: 1.4;
      margin: 0;
      padding: 0;
      font-size: 9.8pt;
    }
    .header {
      border-bottom: 2px solid #c84b1a;
      padding-bottom: 8px;
      margin-bottom: 12px;
    }
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .header h1 {
      margin: 0;
      font-size: 22pt;
      font-weight: 700;
      color: #1a1814;
      letter-spacing: -0.5px;
    }
    .header h2 {
      margin: 3px 0 6px 0;
      font-size: 11pt;
      font-weight: 600;
      color: #c84b1a;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .contact-info {
      font-size: 8.8pt;
      color: #555;
      margin-top: 2px;
    }
    .contact-info span {
      margin-right: 12px;
    }
    .contact-info a {
      color: #555;
      text-decoration: none;
    }
    .section-title {
      font-size: 11pt;
      font-weight: 700;
      text-transform: uppercase;
      color: #1a1814;
      border-bottom: 1.5px solid #c84b1a;
      padding-bottom: 2px;
      margin-top: 18px;
      margin-bottom: 8px;
      letter-spacing: 0.3px;
    }
    .profile-desc {
      margin: 0 0 10px 0;
      text-align: justify;
      color: #4a4640;
      font-size: 9.8pt;
    }
    .skills-list {
      display: grid;
      grid-template-cols: repeat(4, 1fr);
      gap: 6px;
    }
    .skill-item {
      font-size: 8.8pt;
      background: #fdfcf8;
      padding: 4px 8px;
      border-radius: 2px;
      border: 1px solid #d0ccc4;
      text-align: center;
      font-weight: 500;
    }
    .achievements-list {
      display: grid;
      grid-template-cols: 1fr 1fr;
      gap: 8px 16px;
    }
    .achievement-item {
      font-size: 9.8pt;
      color: #4a4640;
    }
    .experience-item {
      margin-bottom: 14px;
      page-break-inside: avoid;
    }
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .exp-title {
      font-size: 10.5pt;
      font-weight: 700;
      color: #1a1814;
    }
    .exp-company {
      font-size: 10pt;
      font-weight: 600;
      color: #c84b1a;
      margin-bottom: 2px;
    }
    .exp-date {
      font-size: 9pt;
      color: #666;
      font-weight: 500;
    }
    .exp-desc-container ul {
      margin-top: 2px;
      margin-bottom: 0;
    }
    .exp-desc-container li {
      margin-bottom: 3px;
    }
    .certs-grid {
      display: grid;
      grid-template-cols: 1fr 1fr;
      gap: 6px 16px;
    }
    .cert-item {
      font-size: 9pt;
      color: #4a4640;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="header-top">
      <h1>Guillermo Cañete</h1>
      <div class="contact-info">
        <span>📍 ${trans.location}</span>
      </div>
    </div>
    <h2>${trans.title}</h2>
    <div class="contact-info">
      <span>✉️ <a href="mailto:guillermo.canete@hotmail.com">guillermo.canete@hotmail.com</a></span>
      <span>📞 +54 9 2964 413910</span>
      <span>🔗 <a href="https://linkedin.com/in/guillermo-canete">linkedin.com/in/guillermo-canete</a></span>
      <span>🌐 <a href="https://guillermocanete.github.io/CV/">guillermocanete.github.io/CV/</a></span>
    </div>
  </div>

  <div class="section-title">${trans.summaryTitle}</div>
  <p class="profile-desc">${trans.summary}</p>

  <div class="section-title">${trans.skillsTitle}</div>
  <div class="skills-list">
    ${skillsHtml}
  </div>

  <div class="section-title">${trans.achievementsTitle}</div>
  <div class="achievements-list">
    ${achievementsHtml}
  </div>

  <div class="section-title">${trans.experienceTitle}</div>
  <div class="experience-container">
    ${experiencesHtml}
  </div>

  <div class="section-title">${trans.certsTitle}</div>
  <div class="certs-grid">
    ${certsHtml}
  </div>
</body>
</html>
    `;

    // Load HTML directly into Puppeteer
    await page.setContent(htmlContent, { waitUntil: 'load' });

    const pdfPath = path.join(__dirname, 'public', `Guillermo_Canete_CV_${lang}.pdf`);
    
    // Print the page as PDF
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '10mm',
        bottom: '10mm',
        left: '12mm',
        right: '12mm'
      }
    });
    console.log(`Saved clean PDF: Guillermo_Canete_CV_${lang}.pdf`);
  }

  await browser.close();
  console.log("PDF resume generation complete!");
  process.exit(0);
}

run().catch(err => {
  console.error("PDF generation failed:", err);
  process.exit(1);
});
