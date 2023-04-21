<<<<<<< HEAD
const { Pet } = require("../database/db.js");
=======
const { Pet } = require("../DataBase/db.js");
const uploadImage = require("../utils/cloudinary.js");
>>>>>>> 9cfe1e7b1c4ad93cf6a37ba253ca8c9509859950


const postPetsController = async (image,name,size,specie,weight,age,gender) => {

let result = await uploadImage(image)
let response = await Pet.create({ image:result,name,specie,size,weight,age,gender });
    return response;
};

module.exports = postPetsController;
