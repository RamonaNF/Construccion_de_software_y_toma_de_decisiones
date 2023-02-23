console.log("¡¡Hola mundo!! Desde node...");
console.info("\nINFO Este script se está ejecutando desde una compu, no un navegador");
console.warn("WARNING document, alert, confirm y prompt no existen en el entorno de ejecución de node (tss)");
console.error("ERROR Así se ve un error, chan chan chaaan\n");




// MÓDULO FS: Para trabajar con el sistema de archivos
const filesystem = require('fs'); // Almacenamos un prototipo
filesystem.writeFileSync('hola.txt', 'Hola desde node\nOMG\n');
console.log("¡Acabamos de escribir el archivo!\nEn serioo, recuerda que le dijimos que fuera específicamente síncrono\n");




console.log('¿Cómo funciona node?\nPor default con PETICIONES ASÍNCRONAS\nE.g.: Printed asynchronous sort');
// FUNCIONAMIENTO DE NODE: Asíncrono
// Tiene un timer   while(true){ ejecuta: eventos en la cola de eventos, priority queue }
const arreglo = [7000, 5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];
for(let item of arreglo){
    setTimeout(() => {console.log(item);}, item);
}

console.log("\nEste log está después de imprimir el arreglo");
setTimeout(() => {console.log("\nYa te hackié jujuju\n");}, 12000);
setTimeout(() => {console.log("\nNahh jajaja, era bromita\n");}, 13000);




// MÓDULO HTTP: crear servidor, escuchar por un puerto, escribir peticiones, enviar respuesta
const http = require('http');
const server = http.createServer((request, response) => { // Objetos de la petición y respuesta
    console.log("Llegó la petición", request.url);

    response.setHeader('Content-Type', 'text/html');
    response.write("<h1> Chilaquiles </h1>")
    response.write("Hola desde nooooodeeee");

    response.end(); // Hace que la respuesta se envíe
});

server.listen(3000);
