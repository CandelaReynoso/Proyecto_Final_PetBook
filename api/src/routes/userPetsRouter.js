const { Router } = require("express");

const {
    handlergetUserpets,
    handlerPostUserPets,
    handlerPostAdopted,
    handlerGetShowHistory,
    hanldeGetacceptStories,
    hanldePostShow,
    handleGetHistoryNotifications
} = require("../handlers/userPetsHandler");

const userPetsRoutes = Router();

userPetsRoutes.get('/showHistory', handlerGetShowHistory);
userPetsRoutes.get('/Pets', handlergetUserpets);
userPetsRoutes.post('/adopt', handlerPostAdopted);
userPetsRoutes.post('/update', handlerPostUserPets);
userPetsRoutes.get('/acceptStories', hanldeGetacceptStories);
userPetsRoutes.post('/updateShow', hanldePostShow);
userPetsRoutes.get('/historyNotifications', handleGetHistoryNotifications);

module.exports = userPetsRoutes;

