const express = require('express');
//const { dirname } = require('path'); // ???
const path = require('path');

const router = express.Router();

router.get('/ordenar', (request, response, next) => {   
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

/*router.post('/nuevo', (request, response, next) => {
    console.log(request.body); // Created automatically by body parser
    response.send("El jugador es "+ request.body.jugador); // JSON
});*/

module.exports = router;