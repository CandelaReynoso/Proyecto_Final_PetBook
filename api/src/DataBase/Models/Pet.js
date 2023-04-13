const { DataTypes, BOOLEAN } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "pet",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adopted: {
        type: BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};

