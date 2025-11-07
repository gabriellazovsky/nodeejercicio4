# nodeejercicio4


# Web Scraping con Node.js — Ejemplos Prácticos

Este proyecto contiene **dos ejercicios completos de Web Scraping con Node.js**:

1.  **Extracción de citas** desde [Quotes to Scrape](https://quotes.toscrape.com)  
2.  **Extracción de la hora actual** desde [Time and Date](https://www.timeanddate.com/worldclock/spain/madrid)

Ambos ejemplos demuestran cómo:
- Descargar el HTML de una web.
- Procesarlo para extraer información específica.
- Guardar los datos en archivos locales.
- Servir los resultados mediante un servidor HTTP.

---

##  Tecnologías utilizadas

- **Node.js**  
- **Axios** → para hacer peticiones HTTP.  
- **Cheerio** → para analizar y manipular el DOM.  
- **fs (File System)** → para guardar los datos en archivos.  
- **http** → para crear el servidor web local.  

---

##  Instalación

1. Inicializa tu proyecto y añade las dependencias:
   ```bash
   npm init -y
   npm install axios cheerio
2. Ejecuta uno de ellos:
 ```bash
node citas.js
# o
node index.js
```

3. Abre en tu navegador:
http://localhost:3000

