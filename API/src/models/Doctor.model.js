const bcrypt = require('bcrypt');
const { Sequelize } = require('sequelize')

const sequelize = require('../config/db.config');
const Hospital = require('./Hospital.model');


const Doctor = sequelize.define(
    "Doctor", 
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: Sequelize.STRING(255),
            allowNull: false,
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
        licenseNumber: {
            type: Sequelize.STRING(255),
            allowNull: false,
            unique: true
        },
        specialization: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        isDoctor: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    }, 
    {
        hooks: {
            beforeCreate: async(user)=>{
                const salt = await bcrypt.genSalt();
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    });

    Doctor.associations = (models)=>{
        Doctor.belongsTo(models.Hospital);
        Doctor.hasMany(models.Appointment);
        Doctor.hasMany(models.Service);
        Doctor.hasMany(models.Diagnosis);
    }
    

module.exports = Doctor;

 