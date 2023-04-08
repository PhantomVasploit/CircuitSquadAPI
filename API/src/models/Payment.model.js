const { Sequelize } = require("sequelize");
const sequelize = require("../config/db.config");

const Payment = sequelize.define(
    "Payment",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        paymentMethod: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        amount: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        freezeTableName: true
    }
);

Payment.associations = models=>{
    Payment.belongsTo(models.Patient);
    Payment.belongsTo(models.Service);
}

module.exports = Payment;