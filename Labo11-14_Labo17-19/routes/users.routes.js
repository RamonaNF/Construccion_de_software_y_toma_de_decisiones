const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');
const isAuth = require('../util/isAuth');

router.get('/', usersController.getSignup);

router.get('/home', isAuth, usersController.getHome);

router.get('/login', usersController.getLogin);
router.post('/login', usersController.postLogin);

router.get('/logout', usersController.logout);

router.get('/signup', usersController.getSignup);
router.post('/signup', usersController.postSignup);

module.exports = router;