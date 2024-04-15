const express = require('express');
const productController = require("../controllers/productController");

function product(app) {
  const router = express.Router();
  app.use('/api/products', router);

  router.get("/",productController.getAllProducts)
}

module.exports = product;