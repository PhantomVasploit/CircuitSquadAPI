const bcrypt = require('bcrypt');
const { Sequelize } = require('sequelize')

const sequelize = require('../config/db.config')

const Patient = sequelize.define(
    "Patient",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(255),
            allowNull: false,
            unique: true
        },
        phoneNumber: {
            type: Sequelize.STRING(255),
            allowNull: false,
            unique: true
        },
        address: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        dateOfBirth: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        healthCondtion: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        insuranceMembershipNumber: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        isPatient: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    },
    {
        hooks: {
            beforeCreate: async(patient)=>{
                const salt = await bcrypt.genSalt();
                patient.password = await bcrypt.hash(patient.password, salt);
            }
        }
    }
);

Patient.associations = (models)=>{
    Patient.belongsTo(models.Hospital);
    Patient.hasMany(models.Appointment);
    Patient.hasMany(models.Diagnosis);
    Patient.hasMany(models.Payment);
    Patient.hasMany(models.Service);
}

module.exports = Patient;