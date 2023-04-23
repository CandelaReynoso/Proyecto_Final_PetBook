const {getPetsUserController, getHistoryUserPet} = require("../controllers/getUserPetsController");
const { postUserPetsController, postAdoptUserPetsController } = require("../controllers/postUserPetsController");


const handlergetUserpets = async (req, res) => {
    const { idUser } = req.query;
    try {
        const pets = await getPetsUserController(idUser);
        res.status(200).json(pets);
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

const handlerPostUserPets = async (req, res) => {
    const { idUser, idPet, history } = req.body;
    try {
        const data = await postUserPetsController(idUser, idPet, history);

        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const handlerPostAdopted = async (req, res) => {
    const { idUser, idPet } = req.body;

    try {
        const data = await postAdoptUserPetsController(idUser, idPet);

        res.status(200).send("succes");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const handlerGetShowHistory = async (req, res) => {
    try {
        const data = await getHistoryUserPet();

        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
}



module.exports = {
    handlergetUserpets,
    handlerPostUserPets,
    handlerPostAdopted,
    handlerGetShowHistory
}