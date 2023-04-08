const { Sequelize } = require('sequelize');

const sequelize = require('../config/db.config');

const Diagnosis = sequelize.define(
    "Diagnosis",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        diagnosisType: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        result: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        glucoseLevel: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        healthCondition: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        bloodPressure: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        bloodCount: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        urineAnalysis: {
            type: Sequelize.STRING(255),
            allowNull: true
        },
        bloodGroup: {
            type: Sequelize.STRING(255),
            allowNull: false
        }
    },
    {
        freezeTableName: true
    }
);

Diagnosis.associations = models=>{
    Diagnosis.belongsTo(models.Patient);
    Diagnosis.hasMany(models.Medication);
    Diagnosis.belongsTo(models.Diagnosis);
}

module.exports = Diagnosis;