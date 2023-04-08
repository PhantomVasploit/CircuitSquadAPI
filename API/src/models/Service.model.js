const { Sequelize } = require("sequelize");
const sequelize = require("../config/db.config");

const Service = sequelize.define(
    "Service",
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
        amount: {
            type: Sequelize.STRING(255),
            allowNull: false
        }
    }
);

Service.associations = models =>{
    Service.belongsTo(models.Patient);
    Service.belongsTo(models.Doctor);
    Service.hasOne(models.Payment);
}

module.exports = Service