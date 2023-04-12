require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const DogModel = require("./Models/Dogs")

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);


const { Dog } = sequelize.models;





DogModel(sequelize)



module.exports = {
  ...sequelize.models,
   sequelize,
};
