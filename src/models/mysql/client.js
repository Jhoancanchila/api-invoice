const db = require("../../../db");

const getAll = async() => {
  const [ clients ] = await db.query("SELECT * FROM client");
  return clients;
}
const getClient = async({id}) => {
  const [ client ] = await db.query(`SELECT * FROM client WHERE ID=${id}`);
  return client;
}

module.exports = {
  getAll,
  getClient
}