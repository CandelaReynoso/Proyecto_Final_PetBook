const {Pet} = require("../DataBase/db.js")

const getAllPetsController = async () => {
    let dbPets = [];

    dbPets = await Pet.findAll({
        
    })

    if(dbPets.length === 0){
        throw new Error('Error getting the pets from DataBase.');
    } else {
        return dbPets;
    }
};
module.exports = getAllPetsController;
