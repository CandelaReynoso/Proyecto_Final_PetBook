const { Product } = require("../database/db.js");

async function filterProductsontroller({
    name,
    available,
    price,
    specie,
    category,
    sortCriterion
}){

    const filter = {
        name,
        specie,
        available,
        category
    };

    console.log(filter);
    
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