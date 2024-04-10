const { config } = require("../config/config");
const upload = require("../models/mysql/upload");
const AWS = require('aws-sdk');

AWS.config.update({
  secretAccessKey: config.secretAccessKey,
  accessKeyId: config.accessKeyIdS3,
  region: config.awsRegion
 });
 
 const s3 = new AWS.S3();

const sendUpload = async( req, res ) => {
  const file = req.files[0];
  const { idInvoice } = req.body;
  const params = {
    Bucket: config.nameBucketS3,
    Key: file.originalname,
    Body: file.buffer,
    ACL: 'public-read', // Configura el nivel de acceso del archivo
 };

 s3.upload(params, async(err, data) => {
    if (err) {
      return res.status(500).send('Error uploading file');
    }
    const urlImage = data.Location;
    await upload.update({ urlImage,idInvoice });
    return res.status(200).json({ location: data.Location})
  });
  
}

module.exports = {
  sendUpload,
}