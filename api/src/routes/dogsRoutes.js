const { Router } = require("express");
const {
  handlerDogs,
  handlerDogsDetail,
  handlerDogsPost,
  handlerDogsPut,
  handlerDogsDelete
} = require("../handlers/dogsHandler");

const dogsRoutes = Router();

dogsRoutes.get("/name?", handlerDogs);
dogsRoutes.get("/detail/:id", handlerDogsDetail);
dogsRoutes.post("/", handlerDogsPost);
dogsRoutes.put("/", handlerDogsPut);
dogsRoutes.delete("/deleteDog/:id", handlerDogsDelete);

module.exports = dogsRoutes;
