const express = require('express');
const userCtrl = require('../controllers/userController');

const router = express.Router();

router.post('/api/signup', async (req, res) => {
  const result = await userCtrl.signup(req.body);
  if (result.success) {
    return res.status(result.status).json(result);
  }
  return res.status(result.status).json(result);
});

router.post('/api/login', async (req, res) => {
  const result = await userCtrl.login(req.body);
  if (result.success) {
    return res.status(result.status).json(result);
  }
  return res.status(result.status).json(result);
});

module.exports = router;
