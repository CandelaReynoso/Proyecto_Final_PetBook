const getPetByNameController = require("../controllers/getPetByNameController");
const getAllPetsController = require("../controllers/getAllPetsController");
const getPetsDetailController = require("../controllers/getPetsDetailController");
const postPetsController = require("../controllers/postPetsController");
const putPetsController = require("../controllers/putPetsController");
const deletePetController = require("../controllers/deletePetController");

const handlerPets = async (req, res) => {
  let { name } = req.query;
  try {
    const response = name
      ? await getPetByNameController(name)
      : await getAllPetsController();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerPetsDetail = async (req, res) => {
  let { id } = req.params;

  try {
    const response = await getPetsDetailController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerPetsPost = async (req, res) => {
  let {} = req.body;
  try {
    const response = await postPetsController();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerPetsPut = async (req, res) => {
  let {} = req.body;
  try {
    const response = await putPetsController();
    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

const handlerPetsDelete = async (req, res) => {
  let { id } = req.params;
  try {
    const response = await deletePetController(id);
    res.status(200).json(response);
  } catch (error) {
    request.status(400).json({ error: error.message });
  }
};

module.exports = {
  handlerPets,
  handlerPetsDetail,
  handlerPetsPost,
  handlerPetsPut,
  handlerPetsDelete,
};
