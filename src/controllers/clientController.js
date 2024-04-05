const clientService = require("../models/mysql/client");
const getAllClients = async(req, res) => {
  try {   
    const allClients = await clientService.getAll();
    res.status(200).json({
      success: true,
      data: allClients
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    });
  }
}

module.exports = {
  getAllClients,
}