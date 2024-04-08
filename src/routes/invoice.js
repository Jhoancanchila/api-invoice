const express = require('express');
const invoiceController = require('../controllers/invoiceController');
const { authorized } = require('../auth/middleware/auth');

function invoice(app) {
  const router = express.Router();
  app.use('/invoice', router);

  router.get("/", authorized, invoiceController.getAllInvoices);

  router.get("/:idClient", invoiceController.getInvoicesByClient);

  router.post("/", invoiceController.createNewInvoice);
}

module.exports = invoice;
