const getDogByNameController = require("../controllers/getDogByNameController")
const getAllDogsController = require("../controllers/getAllDogsController")
const getDogsDetailController = require("../controllers/getDogsDetailController")
const postDogsController = require("../controllers/postDogsController")
const putDogsController = require("../controllers/putDogsController")
const deleteDogController = require("../controllers/deleteDogController")


const handlerDogs = async (req, res) => {
  let { name } = req.query;
  try {
    const response = name
      ? await getDogByNameController(name)
      : await getAllDogsController();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerDogsDetail = async (req, res) => {
  let { id } = req.params;

  try {
    const response = await getDogsDetailController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerDogsPost = async (req, res) => {
  let { image,name,raza,peso} = req.body;
  try {
    const response = await postDogsController(image,name,raza,peso);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerDogsPut = async (req, res) => {
  let { id, name, image } = req.body;
  try {
    const response = await putDogsController(id, name, image);
    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

const handlerDogsDelete = async (req, res) => {
  let { id } = req.params;
  try {
    const response = await deleteDogController(id);
    res.status(200).json(response);
  } catch (error) {
    request.status(400).json({ error: error.message });
  }
};

module.exports = {
  handlerDogs,
  handlerDogsDetail,
  handlerDogsPost,
  handlerDogsPut,
  handlerDogsDelete,
};
