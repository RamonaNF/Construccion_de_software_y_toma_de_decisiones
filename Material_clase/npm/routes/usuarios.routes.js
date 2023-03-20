const express = require('express');
const usuariosController = require('../controllers/usuarios.controller');

const router = express.Router();

router.get('/signup', usuariosController.getSignUp);
router.post('/signup', usuariosController.postSignUp);

router.get('/login', usuariosController.getLogin);
router.post('/login', usuariosController.postLogin);

router.get('/logout', usuariosController.logout);

module.exports = router;