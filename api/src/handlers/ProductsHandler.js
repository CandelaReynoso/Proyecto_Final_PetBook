const searchProductByNameController = require("../controllers/searchProductByNameController");
const searchAllProductsController = require("../controllers/searchAllProductsController");

const handlerProducts = async (req, res) => {
  let { name } = req.query;
  try {
    let response = name
      ? await searchProductByNameController(name)
      : await searchAllProductsController();
    response.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { handlerProducts };
