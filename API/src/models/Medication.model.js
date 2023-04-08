const { Sequelize } = require('sequelize');

const sequelize = require('../config/db.config')

const Medication = sequelize.define(
    "Medication",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        prescription: {
            type: Sequelize.STRING(255),
            allowNull: false
        }
    }
);

Medication.associations = models =>{
    Medication.belongsTo(models.Diagnosis);
}

module.exports = Medication;