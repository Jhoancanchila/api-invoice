const invoiceProductService = require("../models/mysql/invoiceProduct");

const { validateInvoiceProduct } = require("../utils/schemas/invoiceProduct");

const getAllInvoiceProduct = async(req, res) => {
  const { invoiceId } = req.params;
  try {   
    const allInvoiceProducts = await invoiceProductService.getAll(invoiceId);
    res.status(200).json({
      success: true,
      data: allInvoiceProducts
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    });
  }
}
const createNewInvoiceProduct = async(req, res) => {
  const validateObject = validateInvoiceProduct(req.body);

  if(validateObject.error) return res.status(400).json({error: JSON.parse(validateObject.error.message)})

  try {  
    const createdInvoice = await invoiceProductService.create(req.body);
    res.status(201).json({
      success: true,
      data: createdInvoice
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    });
  }
}

module.exports = {
  getAllInvoiceProduct,
  createNewInvoiceProduct
}