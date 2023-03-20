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
    response.write("<!DOCTYPE html> <html> <head> <meta charset='utf-8'>");

    // Manejando GETs
    if(request.url === "/"){ // Root
        response.write("<title> Home </title> </head> <body>");
        response.write("<h1> ChillAquiEs </h1>");
        response.write("<p> Hola desde nooooodeeee </p>");
        response.write("<a href='/ordenar'> ¡Ordena aquí! </a>");

    } else if(request.url === "/ordenar" && request.method === "GET") {
        response.write("<title> Order </title> </head> <body>");
        response.write("<h1> Chilaquiles </h1>");
        
        let radios = "<fieldset> <legend> Salsa para los chilaquiles: </legend>";
        radios += "<div> <input type='radio' id='rojos' name='tipoChilaquiles' value='rojos'> </div>";
        radios += "<label for='rojos'> Roja </label> </div>";
        radios += "<div> <input type='radio' id='verdes' name='tipoChilaquiles' value='verdes' checked> </div>";
        radios += "<label for='verdes'> Verde </label> </div> </fieldset> <br>";

        response.write("<form action='/ordenar' method='POST'>" + radios + " <label for='extras'> ¿Con qué deseas tus chilaquiles? </label> <input type='text' id='extras' name='extras'> <br> <br> <input type='submit' value='Ordenar'> </form>");
        
    } else if(request.url === "/ordenar" && request.method === "POST") {
        const datos = [];
        request.on('data', (dato) => { // EVENT: data -> Ocurre en el servidor cuando se mandan datos
            console.log(dato);
            datos.push(dato);
            console.log("Uy, mira mira ", datos);
        });
        console.log("Que no se vee (asíncrono) ", datos);
        // <Buffer 74 69 70 6f 43 68 69 6c 61 71 75 69 6c 65 73 3d 76 65 72 64 65 73 26 65 78 74 72 61 73 3d 50 6f 6c 6c 6f>
        //         t  i  p  o

        request.on('end', () => { // Cuando los datos terminan de llegar
            const datosCompletos = Buffer.concat(datos).toString();
            console.log(datosCompletos);
            
            const nuevoDato = datosCompletos.split('=')[1]; // [X] -> Localidad que devuelve el string
                                                            // tipoChilaquiles=verdes&extras=Pollo
                                                            //      [0]               [1]     [3]
            
            response.write("<title> Yeah </title> </head> <body>");
            response.write("<p> ¡Gracias por tu órden! </p>");

            const tipoChilaquiles = nuevoDato.split('&')[0];
            console.log(tipoChilaquiles);
            if(tipoChilaquiles === "verdes"){
                response.write("<img alt='Chilaquiles verdes' src='https://images.themodernproper.com/billowy-turkey/production/posts/2022/Chilaquiles_Shot6_42.jpg?w=960&h=720&q=82&fm=jpg&fit=crop&dm=1658873040&s=5b566646b56bba0b53c2bbf1d3d29919' width='100%'>");
            } else {
                response.write("<img alt='Chilaquiles rojos' src='https://productoschata.com/wp-content/uploads/elementor/thumbs/Chilaquiles-rojos-con-chorizo-chata-pvqn6ssp1f366ot4cjarqv0xvcw5zd8b0ox54my6pc.jpg' width='100%'>");
            }
        });

    } else {
        response.statusCode = 404;
        response.write("<title> Error </title> </head> <body>");
        response.write("<p> Lo sentimos, de esos chilaquiles no tenemos </p>");
        
    }
    response.write("</body> </html>");

    //response.end(); // Hace que la respuesta se envíe
                      // ¿POR QUÉ LO COMENTAMOOOOOOOOOOOOOOOOOOOOOOOOOOS?
});

server.listen(3000);
