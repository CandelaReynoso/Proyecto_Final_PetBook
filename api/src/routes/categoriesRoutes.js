const { Router } = require('express');
const { check } = require('express-validator');
const { validateAttributes } = require('../middlewares/validateAttributes');
const { validateJWT } = require('../middlewares/validateJWT');
const { categoryHandlerPost } = require('../handlers/categoryHandler');

const categoriesRoutes = Router();

// get all categories - public
categoriesRoutes.get('/', (req, res)=>{
    
    res.status(200).json({msg: 'todo ok categories route'})
})

// get one category - public
categoriesRoutes.get('/:id', (req, res)=>{
    
    res.status(200).json({msg: 'todo ok categories route id'})
})

// create categories - admin
categoriesRoutes.post('/',[ 
    validateJWT,
    check('name', 'Name of category is required').not().isEmpty(),
    validateAttributes
 ], categoryHandlerPost);

// update categories - admin
categoriesRoutes.put('/:id', (req, res)=>{
    
    res.status(200).json({msg: 'todo ok categories route put'})
})

// delete categories - admin
categoriesRoutes.delete('/:id', (req, res)=>{
    
    res.status(200).json({msg: 'todo ok categories route delete'})
})

module.exports = categoriesRoutes;