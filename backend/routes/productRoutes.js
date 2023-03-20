const { Router } = require("express");
const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.route("/").get(productController.getAllProducts);
router.route("/products").get(productController.getAllProducts);

router.route("/products").post(productController.createProduct);

router.route("/products:id").get(productController.findProductById);

router.route("/products:id").put(productController.updateProduct);

router.route("/products:id").delete(productController.deleteProduct);

module.exports = router;
