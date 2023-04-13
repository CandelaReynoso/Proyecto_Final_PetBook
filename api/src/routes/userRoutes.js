const { Router } = require('express');
const { userHandlerGet, userHandlerPost, userHandlerPut, userHandlerDelete } = require('../handlers/userHandler');

const userRoutes = Router();

userRoutes.get('/', userHandlerGet );

userRoutes.post('/', userHandlerPost );

userRoutes.put('/:id', userHandlerPut );

userRoutes.delete('/', userHandlerDelete );

module.exports = userRoutes;