const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
const indexController = require('../controllers/indexController')
const authController = require('../controllers/authController')

router.get('/login', authController.getLogin);

router.get('/register', authController.getRegister);

router.get('/forgot-password', authController.getForgotPassword);


module.exports = router;