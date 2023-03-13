/* 
    npm init
        "start": "node app.js" | "nodemon app.js"
    npm instal --save-dev nodemon // Reinicia el servidor cada que hay cambios
    npm install --save express
    npm install --save body-parser
    npm install --save ejs // Motor de templates
    npm install --save express-session
    npm install --save mysql2

    --save: para la instalación local

    npm start
*/

/*
    APP.js
        Configuración del servidor
    Router
        Lógica del servidor
*/

// Importar paquetes
const express = require('express');
    // COMPOSITE: Middleware sucesivos hasta llegar a la hoja
const bodyParser = require('body-parser');
const path = require('path'); // Armar la ruta de acuerdo con el OS en el que corre el programa
const session = require('express-session');

const port = 3000;
const app = express(); // constructor === http.createServer((request, response) => {});

                       // app.use((request, response, next) => {
                       // });

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

const rutasPruebas = require('./routes/pruebas.routes');
app.use('/pruebas', rutasPruebas);

const rutaForm = require('./routes/form.routes');
app.use('/form', rutaForm);

const rutaInfo = require('./routes/info.routes');
app.use('/info', rutaInfo);

app.use((request, response, next) => {
    response.status(404);
    response.send('<h1> ERROR </h1> <h2> Sorry, page not found </h2>');
});

app.listen(port);
