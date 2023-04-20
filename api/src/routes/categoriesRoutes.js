const { Router } = require('express');
const { check } = require('express-validator');
const { validateAttributes } = require('../middlewares/validateAttributes');
const { validateJWT } = require('../middlewares/validateJWT');
const { categoryHandlerPost, categoryHandlerGet, categoryHandlerPut, categoryHandlerDelete } = require('../handlers/categoryHandler');
const { categoryExists } = require('../helpers/dbValidators');
const { isAdminRole, isRole } = require('../middlewares/validateRoles');

const categoriesRoutes = Router();

// get all categories - public
categoriesRoutes.get('/', categoryHandlerGet)

// get one category - public
categoriesRoutes.get('/:id', [
    check('id', 'Not a valid ID').isUUID(),
    check('id').custom(categoryExists),
    validateAttributes
],categoryHandlerGet)

// create categories - admin
categoriesRoutes.post('/',[ 
    validateJWT,
    check('name', 'Name of category is required').not().isEmpty(),
    validateAttributes
 ], categoryHandlerPost);

// update categories - admin
categoriesRoutes.put('/:id', [
    validateJWT,
    check('name', 'Name of category is required').not().isEmpty(),
    check('id', 'Not a valid ID').isUUID(),
    check('id').custom(categoryExists),
    validateAttributes
] ,categoryHandlerPut)

// delete categories - admin
categoriesRoutes.delete('/:id', [
    validateJWT,
    isAdminRole,
    //isRole('admin_role', 'user_role'),
    check('id', 'Not a valid ID').isUUID(),
    check('id').custom( categoryExists),
    validateAttributes
],categoryHandlerDelete);

module.exports = categoriesRoutes;