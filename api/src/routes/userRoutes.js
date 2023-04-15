const { Router } = require('express');
const { userHandlerGet, userHandlerPost, userHandlerPut, userHandlerDelete } = require('../handlers/userHandler');
const { check } = require('express-validator');
const { validateAttributes } = require('../middlewares/validateAttributes');
const { isRoleValid, isEmailValid } = require('../helpers/dbValidators');


const userRoutes = Router();

userRoutes.get('/', userHandlerGet );

userRoutes.post('/', [
    check('nickname', 'nickname is required').not().isEmpty(),
    check('password', 'password >= 6 characters is required').isLength({min: 6}),
    //check('email', 'email not valid').isEmail(),
    check('email').custom(isEmailValid), // validate email
    //check('role', 'role not valid').isIn(['admin_role','user_role']),
    check('role').custom(isRoleValid), // validate role
    validateAttributes  // middleware that validates attributes before passing to the handler
],userHandlerPost );

userRoutes.put('/:id', userHandlerPut );

userRoutes.delete('/', userHandlerDelete );

module.exports = userRoutes;