const productService = require("../models/mysql/product");
const getAllProducts = async(req, res) => {
  try {   
    const allProducts = await productService.getAll();
    res.status(200).json({
      success: true,
      data: allProducts
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    });
  }
}

module.exports = {
  getAllProducts,
}