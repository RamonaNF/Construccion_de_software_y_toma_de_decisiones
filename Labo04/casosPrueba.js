const boton1 = document.getElementById("uno");
boton1.onclick = () => {
                        const num = prompt("Ingresa un número positivo");

                        const tabla = document.getElementById("tabla");
                        const tBody = document.createElement("tbody");

                        for(let i=0; i<num; i++){
                            const renglon = document.createElement("tr");
                            
                            for(let j=0; j<3; j++){
                                const col = document.createElement("td");
                                let celda;

                                if(j == 0){
                                    celda = document.createTextNode((i+1));
                                }else if(j == 1){
                                    celda = document.createTextNode((i+1)*(i+1));
                                }else{
                                    celda = document.createTextNode((i+1)*(i+1)*(i+1));
                                }

                                col.appendChild(celda);
                                renglon.appendChild(col);
                            }

                            tBody.appendChild(renglon);
                        }

                        tabla.appendChild(tBody);
                       };




const boton2 = document.getElementById("dos");
boton2.onclick = () => {
                        const num1 = Math.floor(Math.random()*100);
                        const num2 = Math.floor(Math.random()*100);

                        const ini = Date.now();
                        const sum = prompt(num1 + " + " + num2);
                        const fin = Date.now();

                        if(sum == (num1+num2)){
                            alert("Yeah\nTiempo transcurrido: " + (fin-ini)/1000 + " segundos");
                        }else{
                            alert("Nope\n" + num1 + " + " + num2 + " = " + (num1+num2) + "\nTiempo transcurrido: " + (fin-ini)/1000 + " segundos");
                        }
                       };




function contador(array){
    const cuenta = [0, 0, 0];

    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            cuenta[0]++;
        }else if(array[i] == 0){
            cuenta[1]++;
        }else{
            cuenta[2]++;
        }
    }

    return cuenta;
}

const boton3 = document.getElementById("tres");
let firstClick3 = false;
boton3.onclick = () => {
                        if(!firstClick3){
                            const test1 = [-299, 3764, 0, 324, 0, 0, -827, -239];
                            const ans1 = [3, 3, 2];
                            console.assert(ans1.toString() == contador(test1).toString(), "Algo no está funcionando :O");

                            const test2 = [-3432, -876, 9837];
                            const ans2 = [2, 1, 1]; // [2, 0, 1];
                            console.log("Un error para que se vea que el assert funciona...");
                            console.assert(ans2.toString() == contador(test2).toString(), "Algo no está funcionando :O");

                            const test3 = [0, 232, 709];
                            const ans3 = [0, 1, 2];
                            console.assert(ans3.toString() == contador(test3).toString(), "Algo no está funcionando :O");

                            firstClick3 = true;
                        }

                        const min = -10, max = 10;
                        let tam = Math.floor(Math.random()*10);

                        const randomArray = [];
                        for(let i = 0; i <= tam; i++){
                            randomArray[i] = Math.floor(Math.random()*(max-min+1))+min;
                        }
                        const ans = contador(randomArray);

                        const div = document.getElementById("div3");
                        div.innerHTML += "<h4>" + randomArray + "</h4> <p> Negativos: " + ans[0] + "<br> Ceros: " + ans[1] + "<br> Positivos: " + ans[2] + "</p>";
                       };




function promedios(matriz){
    const calculos = ["X"];

    for(let i = 0; i < matriz.length; i++){
        let array = matriz[i];
        if(array.length == 0){
            calculos[i] = "X";
            continue;
        }

        let avg = 0;
        for(let j = 0; j < array.length; j++){
            avg += array[j];
        }
        avg /= array.length;

        calculos[i] = avg.toFixed(2);
    }

    return calculos;
}

const boton4 = document.getElementById("cuatro");
let firstClick4 = false;
boton4.onclick = () => {
                        if(!firstClick4){
                            const test1 = [[32, 463, 24], [], [2004, 2003, 2002], [5, 3, 11]];
                            const ans1 = ["173.00", "X", "2003.00", "6.33"];
                            console.assert(ans1.toString() == promedios(test1).toString(), "Algo no está funcionando :O");

                            firstClick4 = true;
                        }
                        
                        let tam = Math.floor(Math.random()*10);
                        const randomArray = [];

                        for(let i = 0; i <= tam; i++){
                            let innerTam = Math.floor(Math.random()*10);
                            const randomInnerArray = [];

                            for(let j = 0; j <= innerTam; j++){
                                randomInnerArray[j] = Math.floor(Math.random()*100);
                            }

                            randomArray[i] = randomInnerArray;
                        }
                        const ans = promedios(randomArray);

                        const div = document.getElementById("div4");
                        div.innerHTML += "<h4>" + randomArray + "</h4>";

                        for(let j = 0; j < randomArray.length; j++){
                            if(randomArray[j].length != 0){
                                div.innerHTML += "<h5>" + randomArray[j] + "</h5> <p> Promedio: " + ans[j] + "</p>";
                            }else{
                                div.innerHTML += "<h5> [] </h5> <p> Promedio: " + ans[j] + "</p>";
                            }
                        }
                       };




function inverso(num){
    if(num < 10){
        return num;
    }

    let ans = 0;
    while(num != 0){
        ans *= 10;
        ans += (num%10);
        num = Math.floor(num/10);
    }

    return ans;
}

const boton5 = document.getElementById("cinco");
let firstClick5 = false;
boton5.onclick = () => {
                        if(!firstClick5){
                            const test1 = 10;
                            const ans1 = 1;
                            console.assert(ans1 == inverso(test1), "Algo no está funcionando :O");

                            firstClick5 = true;
                        }

                        const num = Math.floor(Math.random()*1000);
                        const ans = inverso(num);

                        const div = document.getElementById("div5");
                        div.innerHTML += "<h4>" + num + "</h4> <p>" + ans + "</p>";
                       };




class stack {
    constructor(){
        this.arr = [];
        this.index = 0;
        this.size = 0;
    }

    push(element){
        this.arr[this.index] = element;
        this.size++;
        this.index++;
    }

    pop(){
        if (this.size != 0){
            this.size--;
            this.index--;
        }  
    }

    empty(){
        return (this.size == 0);
    }

    top(){
        if (this.size === 0){
            return;
        }
        
        return this.arr[this.index - 1];
    }
}

function isValid(s) {
    if(s.length%2 != 0 || s[0] == ')' || s[0] == ']' || s[0] == '}'){
        return false;
    }

    parentheses = new stack();

    for(let i = 0; i < s.length; i++){
        if(s[i] == '(' || s[i] == '[' || s[i] == '{'){
            parentheses.push(s[i]);
        } else if (parentheses.empty()){
            return false;
        } else if(parentheses.top() == '(' && s[i] == ')'){
            parentheses.pop();
        } else if(parentheses.top() == '[' && s[i] == ']'){
            parentheses.pop();
        } else if(parentheses.top() == '{' && s[i] == '}'){
            parentheses.pop();
        } else{
            return false;
        }
    }

    return parentheses.empty();
}

const boton6 = document.getElementById("seis");
let firstClick6 = false;
boton6.onclick = () => {
                        if(!firstClick6){
                            const test1 = "(]";
                            const ans1 = false;
                            console.assert(ans1 == isValid(test1), "NOO");

                            const test2 = "()";
                            const ans2 = true;
                            console.assert(ans2 == isValid(test2), "NOO");

                            const test3 = "()[]{}";
                            const ans3 = true;
                            console.assert(ans3 == isValid(test3), "NOO");

                            console.log("Entré, todo bien jujuju");
                            firstClick6 = true;
                        }

                        const test = prompt("Ingrese una secuencia de paréntesis {}[]()");

                        div = document.getElementById("div6");
                        div.innerHTML += "<h4>" + test + "</h4>";
                        if(isValid(test)){
                            div.innerHTML += "<p> Secuencia válida </p>";
                        }else{
                            div.innerHTML += "<p> Secuencia inválida </p>";
                        }
                       };
