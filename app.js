const express = require('express');
const cors = require("cors");
const invoice = require("./src/routes/invoice");
const client = require("./src/routes/client");
const product = require("./src/routes/product");
const invoiceProduct = require("./src/routes/invoice-product");
const { config } = require("./src/config/config");

const app = express();
app.use(cors());
app.use(express.json());
app.disable('x-powered-by'); //deshabilitar header x-powered-by
const PORT = config.port;


invoice(app);
product(app);
client(app);
invoiceProduct(app);

app.listen(PORT, ()=> {
  console.log(`Server listening in port http://localhost:${PORT}`)
});