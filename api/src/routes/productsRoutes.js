const { Router } = require("express");
const {handlerProducts} = require("../handlers/ProductsHandler")

const productsRoutes = Router();

productsRoutes.get("/", handlerProducts)

module.exports = productsRoutes;
