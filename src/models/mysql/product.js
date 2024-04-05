const db = require("../../../db");

const getAll = async() => {
  const [ products ] = await db.query("SELECT * FROM product");
  return products;
}

module.exports = {
  getAll
}