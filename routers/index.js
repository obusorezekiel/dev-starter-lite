const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
const indexController = require('../controllers/indexController')

router.get('/', indexController.getIndex);

router.get('/contact', indexController.getContact);

module.exports = router;