const { Product } = require("../database/db.js");

async function filterProductsontroller({
    name,
    available,
    price,
    category,
    sortCriterion
}){

    const filter = {
        name,
        available,
        category
    };

    const sort = price;
    const criterion = sortCriterion;

    const results = await Product.findAll({
        where: filter,
        order: [[criterion, sort]]
      });

      if(results) return results;

      throw new Error('Error filtering your products');
}

module.export = filterProductsontroller;