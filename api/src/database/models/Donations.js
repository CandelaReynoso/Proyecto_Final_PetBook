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
            userID:{
                type: DataTypes.STRING,
            }
            }
        
    )
}

module.exports = Donations;