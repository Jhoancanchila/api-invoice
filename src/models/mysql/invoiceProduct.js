const db = require("../../../db");

const getAll = async( id ) => {
  const [ relations ] = await db.query(`SELECT * FROM invoice_product WHERE invoice_id = ${id}`);
  return relations;
}
const create = async( data ) => {
  const { invoice, product, quantity } = data;

  const [ result ] = await db.query(`INSERT INTO INVOICE_PRODUCT
  (invoice_id, product_id, quantity)
  VALUES(${invoice}, ${product}, ${quantity})`);
  
  return result;
}

module.exports = {
  getAll,
  create
}
