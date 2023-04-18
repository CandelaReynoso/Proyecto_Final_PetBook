const { DataTypes } = require("sequelize");


const Category = (sequelize) => {
  sequelize.define(
    "category",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: 'Category is required'
          }
        }
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {   tableName: 'categories',
        timestamps: false }
  );
};

module.exports = Category;
