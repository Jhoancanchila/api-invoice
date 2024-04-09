const express = require('express');

const authController = require('../controllers/authController');

function auth(app) {
  const router = express.Router();
  app.use('/auth', router);

  router.post("/sign-in", authController.validateUser);

  router.post("/register", authController.createUser);

}

module.exports = auth;