const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "dog",
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
        // allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      raza: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      peso: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
    },
    { timestamps: false }
  );
};
