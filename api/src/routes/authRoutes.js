const { Router } = require('express');
const { check } = require('express-validator');
const {authHandlerPost, googleSignIn} = require('../handlers/authHandler');
const { validateAttributes } = require('../middlewares/validateAttributes');


const authRoutes = Router();

authRoutes.post('/login',[
    check('email','Email is required').isEmail(),
    check('password','Password is required').not().isEmpty(),
    validateAttributes
] ,authHandlerPost);

authRoutes.post('/google',[
    check('id_token','Google token is required').not().isEmpty(),
    validateAttributes
] ,googleSignIn);

module.exports = authRoutes;