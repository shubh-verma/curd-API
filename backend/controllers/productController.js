const mongoose = require("mongoose");

const Product = require("../models/productModel");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },

  findProductById: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById({ id });
      if (!product) {
        return res
          .status(404)
          .json({ message: `can not find product with id ${id}` });
      }
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },

  createProduct: async (req, res) => {
    try {
      const product = await Product.create(req.body);
      const result = await product.save();
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id, req.body);
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};
