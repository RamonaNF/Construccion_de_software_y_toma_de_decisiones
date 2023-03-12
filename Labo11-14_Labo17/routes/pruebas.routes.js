const express = require('express');
const router = express.Router();

const pruebasController = require('../controllers/pruebas.controller');

router.get('/prueba1', pruebasController.prueba1);
router.get('/prueba2', pruebasController.prueba2);
router.get('/prueba3', pruebasController.prueba3);

module.exports = router;

/*
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
const filesystem = require('fs');
const readline  = require('readline');

function saveFile(){
    const rdLn = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rdLn.question("Message: ", function(message) {
        if (!filesystem.existsSync('prueba2.txt')) {
            filesystem.writeFileSync('prueba2.txt', message);
        } else {
            filesystem.appendFile('prueba2.txt', '\n'+message, function (error) {
                if (error) {
                    throw error;
                }        
            });
        }
        rdLn.close();
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

router.get('/prueba1', (request, response, next) => {   
    
    let tam = Math.floor(Math.random()*10) + 1;
    const randomArray = [];

    for(let i = 0; i < tam; i++){
        randomArray[i] = Math.floor(Math.random()*100);
    }
    const ans1 = avg(randomArray);

    const html = `<h1> PRUEBA 1 </h1>
                    <h3> Promedios </h3>

                    <h4> Random array: </h4>
                    <p>` + randomArray + `</p>

                    <h4> Average: </h4>
                    <p>` + ans1 + `</p>                            
                    `;
    response.send(html);
});

router.get('/prueba2', (request, response, next) => {   
    const html = `<h1> PRUEBA 2 </h1>
                  <h3> TXT </h3>
                  <p> Checa la consolaaa... </p>                            
                 `;
    saveFile();
    response.send(html);
});

router.get('/prueba3', (request, response, next) => {   
    const universo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const len = Math.floor(Math.random()*10) + 1;

    let test = "";
    for(let i=0; i<len; i++){
        let pos = Math.floor(Math.random()*universo.length);
        test += universo.charAt(pos);
    }
    
    const html = `<h1> PRUEBA 3 </h1>
                  <h3> Detect capital </h3>

                  <h4> Test string: </h4>
                  <p>` + test + `</p>

                  <h4> Valid use of capitals: </h4>
                  <p>` + detectCapital(test) + `</p>                            
                 `;
    response.send(html);

    /*const html = `<h1> PRUEBA 3 </h1>
                  <h3> Detect capital </h3>

                  <h4> Test string: </h4>
                  <p>` + test + `</p>

                  <h4> Valid use of capitals: </h4>
                  <p>` + detectCapital(test) + `</p> 
                  
                  <%- include('ejsFoot') %>
                 `;
    response.render(html);* /
});
*/
