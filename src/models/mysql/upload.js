const db = require("../../../db");

const update = async({ urlImage,idInvoice }) => {
  const [ response ] = await db.query(`UPDATE INVOICE SET voucher = '${urlImage}' WHERE ID=${idInvoice}`);
  return response;
}

module.exports = {
  update
}