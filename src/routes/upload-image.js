const express = require('express');
const multer = require('multer');

const uploadController = require('../controllers/uploadController');

//configuración almacenamiento en memoria
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

function uploadVoucher(app) {
  const router = express.Router();
  app.use('/api/upload-image', upload.array("image"), router);

  router.post("/",  uploadController.sendUpload);

}

module.exports = uploadVoucher;