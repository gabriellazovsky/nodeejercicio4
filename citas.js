const http = require('http');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const PORT = 3000;
const URL = 'https://quotes.toscrape.com';
let ultimaExtraccion = null;
let citasGuardadas = [];

// 🕒 Función para hacer scraping
async function extraerDatos() {
    try {
        const response = await axios.get(URL);
        const html = response.data;
        const $ = cheerio.load(html);

        let citas = [];
        $('.quote').each((i, elem) => {
            const texto = $(elem).find('.text').text().trim();
            const autor = $(elem).find('.author').text().trim();
            citas.push({ texto, autor });
        });

        citasGuardadas = citas;
        ultimaExtraccion = new Date().toLocaleString();

        // Guardar en archivo local
        fs.writeFileSync('data.json', JSON.stringify(citas, null, 2));
        console.log(`[${ultimaExtraccion}] Datos extraídos correctamente (${citas.length} citas).`);

    } catch (err) {
        console.error('Error al extraer datos:', err.message);
    }
}

// ⏱ Ejecutar scraping cada x segundos
setInterval(extraerDatos, 30000);

// ⚙️ Ejecutar al inicio
extraerDatos();

// 🌐 Crear servidor HTTP
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<h1>Servidor de Web Scraping</h1>');

    if (!ultimaExtraccion) {
        res.end('<p>Los datos aún no están disponibles. Espera unos segundos...</p>');
        return;
    }

    res.write(`<p>Última extracción: ${ultimaExtraccion}</p>`);
    res.write('<ul>');
    citasGuardadas.slice(0, 5).forEach(cita => {
        res.write(`<li><b>${cita.autor}</b>: "${cita.texto}"</li>`);
    });
    res.end('</ul>');
});

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
