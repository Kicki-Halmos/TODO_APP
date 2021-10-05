const express = require('express');
const mongoose = require('mongoose');
const userCtrl = require('../controllers/userController')

const router = express.Router();

router.get('/api/signin', userCtrl.signup);

router.get('/api/login', userCtrl.login)

module.exports = router;