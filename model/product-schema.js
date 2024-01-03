const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    //const productSchema = new mongoose.Schema
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

//    const Productmodel = new mongoose.model('ecommersData', productSchema);
   const Product = mongoose.model('ecommersData', productSchema);


module.exports = Product;