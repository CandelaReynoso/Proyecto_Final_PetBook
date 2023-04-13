const { Product, Pet } = require('../DataBase/db');
const searchProductByNameController = require("../controllers/searchProductByNameController");
const searchAllProductsController = require("../controllers/searchAllProductsController");

const handlerProducts = async (req, res) => {
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
    let {
      name,
      image,
      quantity,
      available,
      price,
      weight,
      sizes,
      sku,
      category,
      rating
    } = req.body;

    let productCreated = await Product.create({
      name,
      image,
      quantity,
      available,
      price,
      weight,
      sizes,
      sku,
      rating
    });

    let productDb = await Pet.findAll({
      where: { name: category}
    });

    //productCreated.addPet(productDb);
    res.status(200).send('Product created.');

  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = { 
  handlerProducts,
  postProductHandler
};
