const { Router } = require("express");
const { getHandlerProducts, postProductHandler } = require("../handlers/ProductsHandler")

const productsRoutes = Router();

productsRoutes.get("/", getHandlerProducts);
productsRoutes.post('/', postProductHandler);

module.exports = productsRoutes;
