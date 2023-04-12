const {Router} = require("express")
const petsRoutes = require("./petsRoutes.js")

const router = Router()

router.use("/pets", petsRoutes)
router.use("/products", productsRoutes)




module.exports= router