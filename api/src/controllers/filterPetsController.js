const { Pet } = require("../DataBase/db.js");

const filterPetsController = async (specie, sort) => {

    let results = [];

    if(!specie && !sort){

      throw new Error('Insert at least one filter or sort.')

    } else if (specie && !sort){

      results = Pet.findAll(
        {
          where: {
            specie: specie
          }
        }
      );

      if(results.length === 0){
        throw new Error('No results.')
      }

      return results;

    } else if(sort && !specie){

        if(sort === 'ascendent'){ 

          results = Pet.findAll({
            order: [['name', 'ASC']]
          })

          if(results.length === 0){
            throw new Error('No results.')
          }

          return results;

        } else if(sort === 'descendent'){

          results = Pet.findAll({
            order: [['name', 'ASC']]
          })
        } else {
          throw new Error('Select at least one sort.')
        }

        if(results.length === 0){
          throw new Error('No results.')
        }

        return results;

    } else if(specie && sort) {

      if(sort === 'ascendent'){

        results = Pet.findAll({
          where: { 
            specie: specie
          },
          order: [['name', 'ASC']]
        })

        if(results.length === 0){
          throw new Error('No results.')
        }

        return results;
      } else if (sort === 'descendent'){

        results = Pet.findAll({
          where: { 
            specie: specie
          },
          order: [['name', 'ASC']]
        })

        if(results.length === 0){
          throw new Error('No results.')
        }

        return results;

      } else {
        throw new Error('Select at least one sort.')
      }
  };

  return results;
}

  module.exports = filterPetsController;