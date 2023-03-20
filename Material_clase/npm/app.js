/* 
    npm init
        "start": "node app.js" | "nodemon app.js"
    npm instal --save-dev nodemon // Reinicia el servidor cada que hay cambios
    npm install --save express
    npm install --save body-parser
    npm install --save ejs // Motor de templates
    npm install --save express-session
    npm install --save mysql2
    npm install --save bcryptjs
    npm install --save csurf // Proteger contra cross side request ---

    --save: para la instalación local

    npm start
*/

/*
    APP.js
        Configuración del servidor
    Router
        Lógica del servidor
*/

console.log("Yeah");
console.log("Hola desde nodemon, que reinicia solito el servidooor");



// Importar paquetes
const express = require('express');
    // COMPOSITE: Middleware sucesivos hasta llegar a la hoja
const bodyParser = require('body-parser');
//const { request } = require('http'); // ???
const path = require('path'); // Armar la ruta de acuerdo con el OS en el que corre el programa
    
const app = express(); // constructor === http.createServer((request, response) => {});

                       // app.use((request, response, next) => {
                       // });
const session = require('express-session');

const isAuth = require('./util/is-auth');

const csrf = require('csurf');

app.use( session( {
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

// Variable global, valor
app.set('view engine', 'ejs'); // Motor de templates
app.set('views', 'views'); // Carpeta con el contenido -> se renderiza

const csrfProtection = csrf();
app.use(csrfProtection);
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

const hockeyRutas = require('./routes/hockey.routes');
app.use('/hockey', hockeyRutas);

const rutasChilaquiles = require('./routes/chilaquiles.routes'); // Router
app.use('/chilaquiles', rutasChilaquiles);

const rutasPerros = require('./routes/perros.routes'); // Router
app.use('/perros', isAuth, rutasPerros);

const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/usuarios', rutasUsuarios);

// Middleware -> capa (registro con use)
app.use('/hola', (request, response, next) => {
    response.send("Holaaa, desde la ruta '/hola'");
});

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); // Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    //response.send('¡Hola mundo!'); // Manda la respuesta
    next();
});

app.use((request, response, next) => {
    console.log("3er middleware");
    response.status(404);
    response.send('Lo sentimos, esta ruta no existe');
    // ¿Por qué podría aparecer doble?
    // '/' root
    // 'favicon.io'
    // Luego se guarda en el cache y suele no repetirse
});

app.listen(3000);
