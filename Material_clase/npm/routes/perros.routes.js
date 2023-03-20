const express = require('express');

const router = express.Router();

const perrosController = require('../controllers/perros.controller');

// De lo específico a lo general
router.get('/nuevo', perrosController.getNuevo);
router.post('/nuevo', perrosController.postNuevo);
router.get('/editar', perrosController.getEditar);
router.post('/editar', perrosController.postEditar);
router.get('/:id', perrosController.listar);
router.get('/', perrosController.listar);

module.exports = router;
