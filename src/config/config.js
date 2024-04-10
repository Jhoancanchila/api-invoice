require("dotenv").config();

const config = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  port: process.env.PORT || 3001,
  env: process.env.NODE_ENV || "dev",
  authJwtSecret: process.env.AUTH_JWT_SECRET,
  accessKeyIdS3: process.env.ACCESS_KEY_ID_S3,
  secretAccessKey: process.env.SECRET_ACCESS_KEY_S3,
  awsRegion: process.env.REGION,
  nameBucketS3: process.env.NAME_BUCKET
}

module.exports = { config };