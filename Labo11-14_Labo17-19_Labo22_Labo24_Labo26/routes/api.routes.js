const passport = require('passport');
const express = require('express');
const router = express.Router();

const apiController = require('../controllers/api.controller');

router.get('/nasa', apiController.getNASA);
router.get('/auth', passport.authenticate("google"), apiController.getGoogle);

module.exports = router;