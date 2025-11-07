const http = require('http');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const PORT = 3000;
const URL = 'https://www.timeanddate.com/worldclock/spain/madrid';
let ultimaHora = null;
let historial = [];

// 🕒 Función de scraping
async function extraerHora() {
    try {
        const { data } = await axios.get(URL);
        const $ = cheerio.load(data);

        // Selector donde aparece la hora en esa página
        const hora = $('#ct').text().trim();

        if (hora && hora !== ultimaHora) {
            ultimaHora = hora;
            historial.push({ hora, fecha: new Date().toLocaleString() });

            // Guarda histórico
            fs.writeFileSync('horas.json', JSON.stringify(historial, null, 2));
            console.log(`Nueva hora detectada: ${hora}`);
        }
    } catch (err) {
        console.error('Error al extraer la hora:', err.message);
    }
}

// 🔁 Ejecutar cada 30 segundos
setInterval(extraerHora, 30000);

