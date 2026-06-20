import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  console.log("Starting local Vite server...");
  // Start the Vite server in a background process on port 5173
  const viteProcess = spawn('npx', ['vite', '--port', '5173', '--no-clearScreen'], {
    shell: true,
    stdio: 'pipe'
  });

  // Pipe Vite output to our console to see what's happening
  viteProcess.stdout.on('data', (data) => {
    console.log("[Vite]", data.toString().trim());
  });

  viteProcess.stderr.on('data', (data) => {
    console.error("[Vite Error]", data.toString().trim());
  });

  // Wait 3 seconds for Vite to be fully ready
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Vite server should be ready. Launching headless browser...");

  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  const page = await browser.newPage();

  const languages = ['es', 'en', 'pt'];
  for (const lang of languages) {
    console.log(`Generating PDF for language: ${lang}...`);
    // Navigate to the local server
    await page.goto(`http://localhost:5173/?lang=${lang}`, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    // Set viewport size
    await page.setViewport({ width: 1200, height: 1600 });

    const pdfPath = path.join(__dirname, 'public', `Guillermo_Canete_CV_${lang}.pdf`);
    
    // Print the page as PDF
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '12mm',
        bottom: '12mm',
        left: '12mm',
        right: '12mm'
      }
    });
    console.log(`Saved: Guillermo_Canete_CV_${lang}.pdf`);
  }

  await browser.close();
  viteProcess.kill();
  console.log("Vite server stopped. PDF generation complete!");
  process.exit(0);
}

run().catch(err => {
  console.error("PDF generation failed:", err);
  process.exit(1);
});
