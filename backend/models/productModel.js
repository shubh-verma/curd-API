const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    id: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
      required: [true, "Please enter a product name"],
    },
    price: {
      type: "number",
      required: true,
    },
    units: {
      type: "number",
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
