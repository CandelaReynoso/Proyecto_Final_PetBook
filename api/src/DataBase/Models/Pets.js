const { DataTypes, BOOLEAN } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "pet",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        isUnique: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      breed: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      height: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lifeSpan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      specie: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adopted: {
        type: BOOLEAN,
        defaultValue: false,
      },
      created: {
        type: BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};

// Atributos (API usada en PI): id, name (puede ser null), breed, image, weight, height, lifespan, gender, adopted (por defecto es false), created (boolean)
