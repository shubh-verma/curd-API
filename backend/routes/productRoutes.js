const { Router } = require("express");
const express = require("express");
const router = express.router();

const productController = require("../controller/productController");

router.route("/").get(getAllProducts);
router.route("/products").get(getAllProducts);

router.route("/products").post(createProduct);

router.route("/products:id").get(findProductById);

router.route("/products:id").put(updateProduct);

router.route("/products:id").delete(deleteProduct);

module.exports = router;
