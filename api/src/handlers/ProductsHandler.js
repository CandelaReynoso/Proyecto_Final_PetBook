
const searchProductByNameController = require("../controllers/searchProductByNameController");
const searchAllProductsController = require("../controllers/searchAllProductsController");
const postProductController = require('../controllers/postProductController');

const getHandlerProducts = async (req, res) => {
  try {
    const { name } = req.query;
    let totalProducts = await searchAllProductsController();
    if(name){
      let productName = await searchProductByNameController(name);
      productName.length ? res.status(200).send(productName) : res.status(404).send('Product not found.');
    } else {
      res.status(200).send(totalProducts);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postProductHandler = async (req, res) => {
  try {
    const productCreated = await postProductController(req.body);
    res.status(200).send(productCreated);
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = { 
  getHandlerProducts,
  postProductHandler
};
