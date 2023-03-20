const express = require('express');

const formController = require('../controllers/form.controller');
const router = express.Router();

router.get('/', formController.getForm);
router.post('/', formController.postForm);

module.exports = router;
