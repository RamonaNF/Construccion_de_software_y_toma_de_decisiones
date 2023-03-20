// variables, constantes, consola (log, info, warn, error, assert)

var comida = "chilaquiles";
let cena = "tacos";

// Pensar en const antes que en let
const precio = 70;

console.log("Holaa");
console.info("Valor de la comida: " + comida);
console.warn("El precio no se puede modificar");
console.error("Te dije que el precio no se puede modificar");
console.assert(1 === 1);
console.assert(1 === "1");
console.assert(1 == "1");
console.assert(1 == true);
console.assert(1 === true);

// Alcance de las variables
for(var i=0; i<=10; i++){

}
console.log(i); // var tiene alcance GLOBAL

for(let j=0; j<=10; j++){
    console.log("j existe");
}
console.log("perooo.... ");
//console.log(j); // let tiene alcance entre llaves

// alert, prompt, confirm
alert("Bienvenid@");
let nombre = prompt("¿Cómo te llamas?");
console.log("Hola " + nombre);

let is_hungry = confirm("¿Tienes hambre?");
console.log(is_hungry);

// Funciones tradicionales
function num_tacos(){
    return 4;
}
console.log(num_tacos());

// Funciones modernas
// Anónimas
//() => {return 5;}
let cant_tacos = ()=>{
                        return 5
                     };
console.log(cant_tacos());

// Ligando a HTML -> Botón dinámico
let boton = document.getElementById("buenosDias");
boton.innerHTML = "Jajajaj era aquí";
boton.onclick = alert("¡Buenos díaaaaaas!");
boton.onclick = () => alert("Ya puess ¡Buenos díaaaaaas!");

// Arreglos
// Son dinámicos, puedes añador elementos incluso siendo const
const arreglo = ["Elemento"];
arreglo.push("Otro elemento");
arreglo["dos"] = 2;
console.log(arreglo);
console.log(arreglo.length); // Checa el tamaño eh, si que cuenta el 0

// Lo que sí no se permite...
// arreglo = 10;

arreglo.length = 10;
arreglo[20] = "Fin del arreglou";
console.log(arreglo);

let array = ["Mira", "mira", "miraaa"];
console.log(array);
array = "Qué pasó? Jajaj";
console.log(array);

// Acceder a los datos de forma dinámica
for(let elemento in arreglo){ // Pos de elementos
    console.log(elemento);
}

for(let valor of arreglo){ // Valores del arreglo
    console.log(valor);
}

// Objetos
let objeto = {
    atributo1: "valor 1",
    atributo2: 2
}
console.log(objeto);

for(let elemento in objeto){ // Pos de elementos
    console.log(elemento);
}

// No se pueden recorrer localidades ehh, ni que fuera arreglo
// Descomenta para ver el error
/*for(let valor of objeto){ // Valores del arreglo
    console.log(valor);
}*/

/*for(let elemento in objeto){ // Valores de objeto
    console.log(objeto.elemento);
}*/ // Eaa, esto es de lo que hablaba?? NOPE

objeto.atributo3 = "Yep";
console.log(objeto.atributo3);

const arregloDeObjetos = [{atributo1: "valor 1", atributo2: 2}, {}, objeto];
console.log(arregloDeObjetos);

//RETO
// Onclick de buenos días que aparezca el de era aquí

// -----------------------------------------------------------------------

let respuesta = document.getElementById("respuestas");

document.getElementById("btn-verdes").onclick = () => {
    respuesta.innerHTML = "<p> Bieen </p>";

    respuesta.classList = [];
    respuesta.classList.add("notification");
    respuesta.classList.add("is-success");
    //alert("Eaaa, le sabes");z
}

document.getElementById("btn-rojos").onclick = () => {
    respuesta.innerHTML = "<p> Nooo, aún hay tiempo de retractarte </p>";

    respuesta.classList = [];
    respuesta.classList.add("notification");
    respuesta.classList.add("is-danger");
    
    //alert("Eww, basta de juegos... ordena verdes");
}

document.getElementById("inputIngredientes").onkeyup = () => { //onkeypress
    let input = document.getElementById("inputIngredientes");
    //console.log("Tecla presionada");
    let colors = ["blue", "red", "yellow", "cyan", "purple", "black"];
    let pos = Math.floor(Math.random() * colors.length);

    input.style.color = colors[pos];

    document.getElementById("respuestas").innerHTML = input.value;
}
