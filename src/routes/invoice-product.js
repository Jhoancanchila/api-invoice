const express = require('express');
const invoiceProductController = require('../controllers/invoiceProductController');

function invoiceProduct(app) {
  const router = express.Router();
  app.use('/invoice-product', router);

  router.get("/:invoiceId", invoiceProductController.getAllInvoiceProduct);

  router.post("/", invoiceProductController.createNewInvoiceProduct)

}

module.exports = invoiceProduct;