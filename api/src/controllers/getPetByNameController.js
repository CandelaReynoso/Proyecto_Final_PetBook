const { Pet } = require("../DataBase/db.js");
const { Op } = require("sequelize");

const getPetByNameController = async (name,page,size) => {
 
  console.log(name,page,size);
  const offset = +page * +size;
  const limit = +size;

  const response = await Pet.findAndCountAll({
    where: {
      name: {
        [Op.startsWith]: name,
      },
    },
    distinct: true,
    limit,
    offset,
  });

  if (response.length === 0) {
    throw new Error("No pets found.");
  }
  return response;
};

module.exports = getPetByNameController;