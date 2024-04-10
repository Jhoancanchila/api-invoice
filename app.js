const express = require('express');
const cors = require("cors");
const invoice = require("./src/routes/invoice");
const client = require("./src/routes/client");
const product = require("./src/routes/product");
const uploadVoucher = require("./src/routes/upload-image");
const invoiceProduct = require("./src/routes/invoice-product");
const auth = require("./src/routes/auth");
const { config } = require("./src/config/config");
const passport = require("passport");
const LocalStrategy = require("./src/auth/strategies/local");
const JWTStrategy = require("./src/auth/strategies/jwt");

const app = express();
app.use(cors());
app.use(express.json());
app.disable('x-powered-by'); //deshabilitar header x-powered-by

passport.use("local",LocalStrategy);
app.use(passport.initialize());

passport.use("jwt",JWTStrategy);
const PORT = config.port;


invoice(app);
product(app);
client(app);
invoiceProduct(app);
auth(app);
uploadVoucher(app);

app.listen(PORT, ()=> {
  console.log(`Server listening in port http://localhost:${PORT}`)
});