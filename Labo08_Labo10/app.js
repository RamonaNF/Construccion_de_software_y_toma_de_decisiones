const filesystem = require('fs');
const http = require('http');
const readline  = require('readline');

const port = 3000;

const routeMap = {
    "/": "index.html"
};




// Prueba 1
function avg(nums){
    let ans = 0;

    for(let i=0; i<nums.length; i++){
        ans += nums[i];
    }

    ans /= nums.length;

    return ans;
}

// Prueba 2
function saveFile(){
    const path = './Material/Prueba2/'

    const rdLn = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rdLn.question("File name:  ", function(fileName) {
        rdLn.question("Message: ", function(message) {
            if (!filesystem.existsSync(path+fileName+'.txt')) {
                filesystem.writeFileSync(path+fileName+'.txt', message);
            } else {
                filesystem.appendFile(path+fileName+'.txt', '\n'+message, function (error) {
                    if (error) {
                        throw error;
                    }        
                });
            }
            rdLn.close();
        });
    });
}

// Prueba 3
function detectCapital(wrd) {
    if(wrd.length == 1){
        return true;
    }
    
    let flag = /[A-Z]/.test(wrd[0]), check = /[A-Z]/.test(wrd[1]), change = 0;
    for(let i=2; i<wrd.length; i++){
        if(/[A-Z]/.test(wrd[i]) != check){
            change = 1;
            break;
        }
    }
    
    return !change && ((!flag && !check) || flag);
}




const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');

    if (routeMap[request.url]) {
        filesystem.readFile(routeMap[request.url], (error, data) => { 
            if(error){
                console.log(error);

                response.write("<h1> ERROR </h1>");
                response.end("<h2> Sorry, resource not available </h2>");
            }
            response.end(data);
        });
    } else if(request.url === "/form" && request.method === "POST") {
        const datos = [];
        request.on('data', (dato) => { // EVENT: data -> Ocurre en el servidor cuando se mandan datos
            datos.push(dato);
        });

        request.on('end', () => { // Cuando los datos terminan de llegar
            const datosCompletos = Buffer.concat(datos).toString();
            //console.log(datosCompletos);
            
            const inputs = datosCompletos.split('&'); 
            const estacionFav = inputs[2].split('=')[1];
            
            response.write(`<h1>` + inputs[0].split('=')[1] + `</h1>
                            <small>` + inputs[1].split('=')[1] + ` anios </small>
                            <a href="https://buenamente.co/post/descubre-lo-que-la-estacion-del-ano-en-que-naciste-dice-sobre-ti-y-tu-alma/17087" target="_blank">` + estacionFav + `</a> <br>
                            <img width="100%" alt="Estación favorita" src="
                          `);
            if(estacionFav === 'invierno'){
                response.write('https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/OE4BORQYVBOURGTV3VOXMWXQ2M.jpg">');
            } else if(estacionFav === 'primavera'){
                response.write('https://imagenes.elpais.com/resizer/WLxaoiXZVJmVPC1yO32wraOHEjo=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/MLWVH6U2CA5DMN4TZWKUVZYSCM.jpg">');
            } else if(estacionFav === 'verano'){
                response.write('https://concepto.de/wp-content/uploads/2018/08/verano2-e1535637899885.jpg">');
            } else {
                response.write('https://okdiario.com/img/2021/08/31/otono-655x368.jpg">');
            }

            response.write('<p> <a href="/"> Home </a> </p>');

            const path = './Material/'
            const rdLn = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            const message = inputs[0].split('=')[1] + ', ' + inputs[1].split('=')[1] + ' anios, ' + estacionFav;

            if (!filesystem.existsSync(path+'Visit.txt')) {
                filesystem.writeFileSync(path+'Visit.txt', message); 
            } else {
                filesystem.appendFile(path+'Visit.txt', '\n' + message, function (error) {
                    if (error) {
                        throw error;
                    }        
                });
            }
            rdLn.close();
        });
    } else {
        if(request.url === "/form" && request.method === "GET") {
            response.write(`<!DOCTYPE html> 
                            <html>
                                <head>
                                    <meta charset='utf-8'>
                                    <title> Form </title>
                                </head>
                                <body>
                                    <form action='/form' method='POST'>
                                        <fieldset>
                                            <div> 
                                                <legend> Nombre </legend>
                                                <input type = 'text' name='name' required>
                                            </div>
                                            <br>
                                            <div> 
                                                <legend> Edad </legend>
                                                <input type='number' name='age' required>
                                            </div>
                                            <br>
                                            <div>
                                                <legend> Estación del año favorita </legend>
                                                <input type='radio' id='invierno' name='estacionFav' value='invierno' checked>
                                                <label for='invierno'> Invierno </label> <br>
                                                <input type='radio' id='primavera' name='estacionFav' value='primavera'>
                                                <label for='primavera'> Primavera </label> <br>
                                                <input type='radio' id='verano' name='estacionFav' value='verano'>
                                                <label for='verano'> Verano </label> <br>
                                                <input type='radio' id='otonio' name='estacionFav' value='otonio'>
                                                <label for='otonio'> Otoño </label> <br>
                                            </div>
                                            <br>
                                            <input type='submit' value='Magic >'>
                                        </fieldset>
                                    </form>
                                </body>
                            </html>
                        `);
        } else if(request.url === "/prueba1"){
            let tam = Math.floor(Math.random()*10) + 1;
            const randomArray = [];

            for(let i = 0; i < tam; i++){
                randomArray[i] = Math.floor(Math.random()*100);
            }
            const ans1 = avg(randomArray);

            response.write(`<h1> PRUEBA 1 </h1>
                            <h3> Promedios </h3>

                            <h4> Random array: </h4>
                            <p>` + randomArray + `</p>

                            <h4> Average: </h4>
                            <p>` + ans1 + `</p>                            
                          `);
        }  else if(request.url === "/prueba2"){
            response.write(`<h1> PRUEBA 2 </h1>
                            <h3> TXT </h3>
                            <p> Checa la consolaaa... </p>                            
                          `);
            saveFile();
        }  else if(request.url === "/prueba3"){
            const universo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const len = Math.floor(Math.random()*10) + 1;

            let test = "";
            for(let i=0; i<len; i++){
                let pos = Math.floor(Math.random()*universo.length);
                test += universo.charAt(pos);
            }
            
            response.write(`<h1> PRUEBA 3 </h1>
                            <h3> Detect capital </h3>

                            <h4> Test string: </h4>
                            <p>` + test + `</p>

                            <h4> Valid use of capitals: </h4>
                            <p>` + detectCapital(test) + `</p>                            
                        `);
        } else {
            response.statusCode = 404;
            response.write("<h1> ERROR </h1> <h2> Sorry, page not found </h2>");
        }
        response.write('<p> <a href="/"> Home </a> </p>');
        response.end();
    }
});

server.listen(port);
