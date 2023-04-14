const { Router } = require("express")
const petsRoutes = require("./petsRoutes.js")
const productsRoutes = require("./productsRoutes.js")
const userRoutes = require('./userRoutes.js');

const router = Router()

router.use("/pets", petsRoutes)
router.use("/products", productsRoutes)
router.use('/users', userRoutes);




module.exports = router