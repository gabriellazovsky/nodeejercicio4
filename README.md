# nodeejercicio4

#  Web Scraping Periódico con Node.js

Este proyecto realiza **web scraping automático** sobre una página web que cambia con el tiempo, extrayendo información específica de forma periódica para analizar su evolución.

---

##  Objetivo

- Descargar el HTML de una web de manera automática.  
- Procesar el contenido para **extraer datos específicos**.  
- Repetir el proceso periódicamente para **detectar cambios o guardar histórico**.  
- Usar **Cheerio** para manipular el DOM como si fuera jQuery.  

---

## Tecnologías utilizadas

- **Node.js**  
- **Axios** – para realizar peticiones HTTP  
- **Cheerio** – para procesar y analizar el HTML  
- **fs** (File System) – para guardar los datos extraídos en un archivo JSON  

---

##  Instalación y ejecución

1. Clona o copia este proyecto.  
2. Inicializa Node y las dependencias necesarias:

   ```bash
   npm init -y
   npm install axios cheerio

Funcionamiento
Se descarga el contenido HTML de la página:

https://www.timeanddate.com/worldclock/spain/madrid

Se procesa con Cheerio para extraer el elemento que contiene la hora actual (#ct).
Cada 30 segundos, el script repite la extracción.
Si la hora ha cambiado, se almacena el nuevo valor junto con la fecha y hora local en un archivo horas.json. Y se observa en la terminal
