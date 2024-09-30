const { Products } = require("../../models");

exports.getAllProducts = async (req, res) => {
    try {
      const products = await Products.findAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };