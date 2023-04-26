const { Product } = require("../database/db.js");

async function filterProductsController({
    name,
    available,
    price,
    specie,
    category,
    sortCriterion
}){

    console.log("estoy en filteredProducts");

    let where = {};
    let response;

    if(name || specie || available || category){
        if(price && sortCriterion){
            let toDelete = [];
            where = {
                name: name ? name : toDelete.push("name"),
                specie: specie ? specie : toDelete.push("specie"),
                available: available ? available : toDelete.push("available"),
                category: category ? category :toDelete.push("category"),
            };

            for (let i = 0; i < toDelete.length; i++) {
                delete where[toDelete[i]];
              }

              console.log(where)

              response = await Product.findAll({
                where
              })

              
              return response;
        }

        
    }

    
    // const sort = price;
    // const criterion = sortCriterion;

    // const results = await Product.findAll({
    //     where: filter,
    //     order: [[criterion, sort]]
    //   });

    //   if(results) return results;

    //   throw new Error('Error filtering your products');
    return;
}

module.exports = filterProductsController;