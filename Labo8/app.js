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
            if (!filesystem.existsSync(path+fileName)) {
                filesystem.writeFileSync(path+fileName, message);
            } else {
                filesystem.appendFile(path+fileName, '\n'+message, function (error) {
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




// Console tests
    // Prueba 1
let tam = Math.floor(Math.random()*10) + 1;
const randomArray = [];

for(let i = 0; i < tam; i++){
    randomArray[i] = Math.floor(Math.random()*100);
}
const ans1 = avg(randomArray);

console.log("Random array: ", randomArray, "\nAverage: ", ans1);

    // Prueba 2
saveFile();

    //Prueba 3
const universo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const len = Math.floor(Math.random()*10) + 1;

let test = "";
for(let i=0; i<len; i++){
    let pos = Math.floor(Math.random()*universo.length);
    test += universo.charAt(pos);
}

console.log("Test string: ", test, "\nValid use of capitals: ", detectCapital(test));




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
    } else {
        response.write("<h1> ERROR </h1>");
        response.end("<h2> Sorry, page not found </h2>");
    }
});

server.listen(port);
