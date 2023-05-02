const { DataTypes } = require("sequelize");

const Donations = (sequelize) => {
    sequelize.define(
        "donations",
        {
            donationId: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
              },
            amount: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            anonymous:{
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            userID:{
                type: DataTypes.UUID,
            },
            type:{
                type: DataTypes.ENUM("donation", "product", "subscription"),
                allowNull: false
            }
            }
        
    )
}

module.exports = Donations;