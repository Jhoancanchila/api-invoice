const mysql = require("mysql2");
const { config } = require("./src/config/config");

const db = mysql.createConnection({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  port: config.dbPort
});

db.connect(err => {
  if(err) throw err;
  console.log("conectado a la base de datos");
})

module.exports = db.promise();