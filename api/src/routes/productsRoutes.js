const { Router } = require("express");
const { handlerProducts, postProductHandler } = require("../handlers/ProductsHandler")

const productsRoutes = Router();

productsRoutes.get("/", handlerProducts);
productsRoutes.post('/product', postProductHandler);

module.exports = productsRoutes;
