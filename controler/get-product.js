const Product = require("../model/product-schema.js");

const getProducts = async (req, res) => {
  try {
    const response = await Product.find({});

    res.status(200).json(response);
  } catch (error) {
    console.log("error to get the data from api", error);
  }
};


  
module.exports = getProducts;