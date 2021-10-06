const express = require('express');
const mongoose = require('mongoose');
const userCtrl = require('../controllers/userController')

const router = express.Router();

router.post('/api/signup', userCtrl.signup);

router.post('/api/login', userCtrl.login)

module.exports = router;