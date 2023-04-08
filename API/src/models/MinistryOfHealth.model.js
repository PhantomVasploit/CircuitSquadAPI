const { Sequelize } = require('sequelize')
const bcrypt = require('bcrypt');

const sequelize = require('../config/db.config');

const MinistryOfHealth = sequelize.define(
    "MinistryOfHealth",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
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
        isMinistryOfHealth: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    }, 
    {
        hooks: {
            beforeCreate: async(ministryOfHealth)=>{
                const salt = await bcrypt.genSalt();
                ministryOfHealth.password = await bcrypt.hash(ministryOfHealth.password, salt);
            }
        },
        freezeTableName: true
    }
);

MinistryOfHealth.associations = function(models){
    MinistryOfHealth.hasMany(models.Hospital);
}

module.exports = MinistryOfHealth;



