const Product = require("../model/product-schema");


const getDetailProductById = async (req, res) => {
    try {
      const id = req.params.id;
      const product = await Product.findOne({ 'id': id})
      
      res.status(201).json(product)
      
    } catch (error) {
      console.log(
        "error from get product, while find the id for product in database",
        error
        );
      }
    };

    module.exports = getDetailProductById;