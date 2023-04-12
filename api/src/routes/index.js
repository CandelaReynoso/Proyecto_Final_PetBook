const {Router} = require("express")
const dogsRoutes = require("../routes/dogsRoutes.js")

const router = Router()

router.use("/dog", dogsRoutes)



module.exports= router