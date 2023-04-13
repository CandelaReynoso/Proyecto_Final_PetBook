const { Pet } = require("../DataBase/db.js");
const { Op } = require("sequelize");

const getPetByNameController = async (name) => {
  const response = await Pet.findAll({
    where: {
      name: {
        [Op.startsWith]: name,
      },
    },
  });

  if (response.length === 0) {
    window.alert("no pets found");
    return;
  }
  return response;
};

module.exports = getPetByNameController;