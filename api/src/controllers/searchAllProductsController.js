const { Product } = require('../database/db');

const searchAllProductsController = async  () => {
    try {
        const products = await Product.findAll();
        return products;
    } catch (error) {   
        throw new Error(error);
    }
}

module.exports = searchAllProductsController