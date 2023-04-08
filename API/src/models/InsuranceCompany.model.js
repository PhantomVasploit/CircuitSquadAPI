const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = require('../config/db.config');

const InsuaranceCompany = sequelize.define(
    "InsuranceCompany",
    {
        name: {
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
        password: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        isInsuaranceCompany: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    },
    {
        hooks: {
            beforeCreate: async (insuranceCompany)=>{
                const salt = await bcrypt.genSalt();
                insuranceCompany.password = await bcrypt.hash(insuranceCompany.password, salt);
            }
        },
        freezeTableName: true
    }
);


module.exports = InsuaranceCompany;