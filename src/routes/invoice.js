const express = require('express');
const invoiceController = require('../controllers/invoiceController');

function invoice(app) {
  const router = express.Router();
  app.use('/invoice', router);

  router.get("/", invoiceController.getAllInvoices);

  router.get("/:idClient", invoiceController.getInvoicesByClient);

  router.post("/", invoiceController.createNewInvoice);
}

module.exports = invoice;
