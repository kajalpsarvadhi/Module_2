const Product  = require("../Models/productModel");

console.log("Product model is:", Product);
exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch product",
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const [updatedRows] = await Product.update(req.body, {
      where: { prod_id: id },
    });

    if (updatedRows === 0) {
      return res.status(404).json({
        message: "Product not found or no changes made",
      });
    }

    res.json({
      message: "Product updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to update product",
      error: err.message,
    });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRows = await Product.destroy({
      where: { prod_id: id },
    });

    if (!deletedRows) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to delete product",
    });
  }
};