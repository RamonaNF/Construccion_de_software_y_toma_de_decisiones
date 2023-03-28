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
    npm install --save multer

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
const bcrypt = require('bcryptjs');
const multer = require('multer');

const isAuth = require('./util/isAuth');

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

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, 
            new Date().getMilliseconds() + '-' + 
            file.originalname);
        //callback(null, new Date().toISOString() + '-' + file.originalname);
    },
});

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('imagen')); 

// Variable global, valor
app.set('view engine', 'ejs'); // Motor de templates
app.set('views', 'views'); // Carpeta con el contenido -> se renderiza

const rutasPruebas = require('./routes/pruebas.routes');
app.use('/pruebas', isAuth, rutasPruebas);

const rutaForm = require('./routes/form.routes');
app.use('/form', isAuth, rutaForm);

const rutaInfo = require('./routes/info.routes');
app.use('/info', isAuth, rutaInfo);

const rutaUsers = require('./routes/users.routes');
app.use('/', rutaUsers);

app.use((request, response, next) => {
    response.status(404);
    response.send('<h1> ERROR </h1> <h2> Sorry, page not found </h2>');
});

app.listen(port);
