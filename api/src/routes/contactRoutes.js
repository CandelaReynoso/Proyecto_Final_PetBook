const { Router } = require('express');
const { contactHandlerGet, contactHandlerPost, contactHandlerPut, contactHandlerDelete } = require('../handlers/contactHandler');
const { check } = require('express-validator');
const { validateAttributes } = require('../middlewares/validateAttributes');
const { isRoleValid, isEmailValid, userByIdExists } = require('../helpers/dbValidators');
const { validateJWT } = require('../middlewares/validateJWT');
const { isAdminRole, isRole } = require('../middlewares/validateRoles');


const contactRoutes = Router();

contactRoutes.get('/', contactHandlerGet );

contactRoutes.get('/:id', contactHandlerGet );

contactRoutes.post('/', [
    //validateJWT,
    check('name','Name is required').not().isEmpty(),
    check('lastname','Last Name is required').not().isEmpty(),
    //check('email', 'Email not valid').isEmail(),
    //check('email').custom(isEmailValid), // validate email
    //check('role', 'role not valid').isIn(['admin_role','user_role']),
    //check('role').custom(isRoleValid), // validate role
    validateAttributes  // middleware that validates attributes before passing to the handler
],contactHandlerPost );

contactRoutes.put('/:id', [
    check('id', 'Not a valid ID').isUUID(),
    check('id').custom( userByIdExists ),
    check('role').custom(isRoleValid), // validate role
    validateAttributes
], contactHandlerPut );

contactRoutes.delete('/:id', [
    validateJWT,
    isAdminRole,
    //isRole('admin_role','user_role'),
    check('id', 'Not a valid ID').isUUID(),
    check('id').custom( userByIdExists ),
    validateAttributes
], contactHandlerDelete );

module.exports = contactRoutes;