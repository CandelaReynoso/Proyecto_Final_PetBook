const { Dog } = require("../DataBase/db.js");

const postPetsController = async () => {
    let response = await Dog.create({  });
    return response;
};

module.exports = postPetsController;
