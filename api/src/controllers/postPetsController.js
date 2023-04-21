const { Pet } = require("../DataBase/db.js");
const uploadImage = require("../utils/cloudinary.js");


const postPetsController = async (image,name,size,specie,weight,age,gender) => {

let result = await uploadImage(image)
let response = await Pet.create({ image:result,name,specie,size,weight,age,gender });
    return response;
};

module.exports = postPetsController;
