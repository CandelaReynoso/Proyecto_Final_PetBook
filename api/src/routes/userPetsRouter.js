const { Router } = require("express");


const {
    handlergetUserpets,
    handlerPostUserPets,
    handlerPostAdopted,
    handlerGetShowHistory
} = require("../handlers/userPetsHandler");

const userPetsRoutes = Router();

userPetsRoutes.get('/showHistory', handlerGetShowHistory);
userPetsRoutes.get('/userAdopte', handlergetUserpets);
userPetsRoutes.post('/adopt', handlerPostAdopted);
userPetsRoutes.post('/update', handlerPostUserPets);

module.exports = userPetsRoutes;

