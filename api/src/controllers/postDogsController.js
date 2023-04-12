const { Dog } = require("../DataBase/db.js");

const postDogsController = async (image, name, raza, peso) => {
    let response = await Dog.create({ image, name, raza, peso });
    return response;
};

module.exports = postDogsController;
