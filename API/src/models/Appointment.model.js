const { Sequelize } = require('sequelize');

const sequelize = require('../config/db.config');

const Appointment = sequelize.define(
    "Appointment",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        notes: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }
);

Appointment.associations = models=>{
    Appointment.belongsTo(models.Patient);
    Appointment.belongsTo(models.Doctor);
}

module.exports = Appointment;