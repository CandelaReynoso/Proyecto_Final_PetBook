const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "email",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Name es required'
          }
        }
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user: {
        type: DataTypes.UUID,
        allowNull: false,
      }
    },
    { timestamps: false }
  );
};

