const express = require('express');
const router = express.Router();

const hockeyController = require('../controllers/hockey.controller');

router.get('/nuevo', hockeyController.getNuevo);

router.post('/nuevo', hockeyController.postNuevo);

module.exports = router;
