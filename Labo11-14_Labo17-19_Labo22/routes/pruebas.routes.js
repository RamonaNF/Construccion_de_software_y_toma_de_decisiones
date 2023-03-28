const express = require('express');
const router = express.Router();

const pruebasController = require('../controllers/pruebas.controller');

router.get('/prueba1', pruebasController.prueba1);
router.get('/prueba2', pruebasController.prueba2);
router.get('/prueba3', pruebasController.prueba3);

module.exports = router;
