const express = require('express');
const router = express.Router();

const infoController = require('../controllers/info.controller');

router.get('/', infoController.getInfo);

module.exports = router;
