const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = require('../config/db.config');
const Doctor = require('./Doctor.model');


const Hospital = sequelize.define(
    "Hospital",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isHospital: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    },
    {
        hooks: {
            beforeCreate: async (hospital)=>{
                const salt = await bcrypt.genSalt();
                hospital.password = await bcrypt.hash(hospital.password, salt);
            }
        }
    }
)

Hospital.associations = (models)=>{
    Hospital.belongsTo(models.MinistryOfHealth);
    Hospital.hasMany(models.Doctor);
    Hospital.hasMany(models.Patient);
}



module.exports = Hospital;