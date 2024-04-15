const express = require('express');
const clientController = require("../controllers/clientController");

function client(app) {
  const router = express.Router();
  app.use('/api/clients', router);

  router.get("/", clientController.getAllClients)
  router.get("/:id", clientController.getClient)
}

module.exports = client;