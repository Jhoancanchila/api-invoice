const invoiceService = require("../models/mysql/invoice");
const { validateInvoice } = require("../utils/schemas/invoice");

const getAllInvoices = async(req, res) => {
  try {   
    const allInvoice = await invoiceService.getAll();
    res.status(200).json({
      success: true,
      data: allInvoice
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    });
  }
}
const getInvoicesByClient = async(req, res) => {
  try {   
    const { idClient } = req.params;
    const allInvoice = await invoiceService.getAllByClient(idClient);
    res.status(200).json({
      success: true,
      data: allInvoice
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    });
  }
}
const createNewInvoice = async(req, res) => {
  const validateObject = validateInvoice(req.body);

  if(validateObject.error) return res.status(400).json({error: JSON.parse(validateObject.error.message)})

  try {  
    const createdInvoice = await invoiceService.create(validateObject.data);
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
  getAllInvoices,
  createNewInvoice,
  getInvoicesByClient
}