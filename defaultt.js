
const { products } = require('./constant/data.js');
const Product = require('./model/product-schema.js')


const defaultt = async () => {
    try {
       // Insert data using the Product model
       await Product.insertMany(products); 
    //    console.log("Data inserted successfully in defaultt file.");
    } catch (error) {
        console.error( "Error in defaultt.js");
    }
};

module.exports = defaultt;