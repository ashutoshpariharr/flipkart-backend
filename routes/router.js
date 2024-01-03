const express = require("express");
const {
  userController,
  userLoginController,
} = require("../controler/user-controller");
const getProducts = require("../controler/get-product");
const getDetailProductById = require("../controler/getProductDetail");

const router = express.Router();

router.post("/signup", userController);
router.post("/login", userLoginController);

router.get("/products", getProducts);

router.get("/product/:id", getDetailProductById);

module.exports = router;
