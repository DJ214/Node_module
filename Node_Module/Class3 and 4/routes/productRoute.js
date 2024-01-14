const express = require("express");
const productController = require("../Controllers/productController");

const router = express.Router();  // this method sets up Router for us


router.get('/products',productController.getAllProduct)
.get('/products/:id',productController.getProduct)
.post("/products",productController.createProduct)
.put('/products/:id',productController.replaceProduct)
.patch('/products/:id',productController.updateProduct)
.delete("/products/:id",productController.deleteProduct);

exports.router = router;
