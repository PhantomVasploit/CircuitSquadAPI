const bcrypt = require('bcrypt');
const { Sequelize, Model } = require('sequelize')

const sequelize = require('../config/db.config');
const Hospital = require('./Hospital.model');


class Patient extends Model{};
Patient.init({
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
    },
    hospitalId: {
        type: Sequelize.INTEGER,
        references: {
            model: Hospital,
            key: 'id'
        }
    }
},
{
    sequelize,
    modelName: 'patients',
    hooks: {
        beforeCreate: async(patient)=>{
            const salt = await bcrypt.genSalt();
            patient.password = await bcrypt.hash(patient.password, salt);
        }
    }
})

Patient.belongsTo(Hospital);
Hospital.hasMany(Patient);

module.exports = Patient;