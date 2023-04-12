const { Router } = require("express");
const {
  handlerPets,
  handlerPetsDetail,
  handlerPetsPost,
  handlerPetsPut,
  handlerPetsDelete
} = require("../handlers/PetsHandler");

const petsRoutes = Router();

petsRoutes.get("/name?", handlerPets);
petsRoutes.get("/detail/:id", handlerPetsDetail);
petsRoutes.post("/", handlerPetsPost);
petsRoutes.put("/", handlerPetsPut);
petsRoutes.delete("/deletePet/:id", handlerPetsDelete);

module.exports = petsRoutes;
