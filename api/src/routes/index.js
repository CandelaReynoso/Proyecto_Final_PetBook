const { Router } = require("express")
const petsRoutes = require("./petsRoutes.js")
const productsRoutes = require("./productsRoutes.js")
const userRoutes = require('./userRoutes.js');
const authRoutes = require("./authRoutes.js");
const categoriesRoutes = require("./categoriesRoutes.js");

const router = Router()

router.use("/pets", petsRoutes)
router.use("/products", productsRoutes)
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/categories', categoriesRoutes);




module.exports = router;