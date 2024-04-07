const express = require('express');
const clientController = require("../controllers/clientController");

function client(app) {
  const router = express.Router();
  app.use('/client', router);

  router.get("/", clientController.getAllClients)
  router.get("/:id", clientController.getClient)
}

module.exports = client;