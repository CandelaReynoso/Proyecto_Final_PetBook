const { Router } = require('express');
const { check } = require('express-validator');
const authHandlerPost = require('../handlers/authHandler');
const { validateAttributes } = require('../middlewares/validateAttributes');


const authRoutes = Router();

authRoutes.post('/login',[
    check('email','Email is required').isEmail(),
    check('password','Password is required').not().isEmpty(),
    validateAttributes
] ,authHandlerPost);

module.exports = authRoutes;