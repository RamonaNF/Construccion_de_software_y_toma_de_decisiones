const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    database: 'chilaquiles',
    password: ''
});

module.exports = pool.promise(); /* Prometo que haré las consultas que me pides, cuando lo cumpla te voy a avisar
                                    La dicen a Node que hay una promesa, espera a cumplirse
                                    Se cumpla o no (después de cierto tiempo) indica qué hacer al respecto */