const db = require("../../../db");

const getAll = async() => {
  const [ invoices ] = await db.query("SELECT * FROM invoice");
  return invoices;
}
const getAllByClient = async( idClient ) => {
  const [ invoices ] = await db.query(`SELECT * FROM invoice WHERE CLIENT_ID = ${idClient}`);
  return invoices;
}
const create = async( data ) => {
  const { client, date, subtotal, discount, total, products } = data;

  try {    
    const [ response ] = await db.query(`INSERT INTO invoice
    (client_id, created_date, subtotal, discount, total)
    VALUES(${client}, str_to_date('${date}', '%Y-%m-%d'), ${subtotal}, ${discount}, ${total})`);
  
    if(response){
      const { insertId } = response;
      products.forEach(async(prod) => {
        await db.query(`INSERT INTO invoice_product (invoice_id, product_id, quantity) VALUES (${insertId}, ${prod.id}, ${prod.quantity})`)
     });
      const [ invoices ] = await db.query(`SELECT * FROM invoice where id = ${insertId}`);
      return invoices;
    }
  } catch (error) {
    throw error;
  }

}

module.exports = {
  getAll,
  create,
  getAllByClient
}
