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
const getClient = async(req, res) => {
  try {   
    const { id } = req.params;
    const client = await clientService.getClient({id});
    res.status(200).json({
      success: true,
      data: client
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
  getClient
}