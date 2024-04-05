const db = require("../../../db");

const getAll = async() => {
  const [ clients ] = await db.query("SELECT * FROM client");
  return clients;
}

module.exports = {
  getAll
}