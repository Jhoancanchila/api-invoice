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
  const { client, date, subtotal, discount, total } = data;

  const [ response ] = await db.query(`INSERT INTO INVOICE
  (client_id, created_date, subtotal, discount, total)
  VALUES(${client}, str_to_date('${date}', '%Y-%m-%d'), ${subtotal}, ${discount}, ${total})`);

  if(response){
    const { insertId } = response;
    const [ invoices ] = await db.query(`SELECT * FROM invoice where id = ${insertId}`);
    return invoices;
  }else{
    return response;
  }
}

module.exports = {
  getAll,
  create,
  getAllByClient
}
