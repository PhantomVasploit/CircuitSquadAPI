const { Sequelize, Model } = require("sequelize");
const sequelize = require("../config/db.config");
const Patient = require("./Patient.model");
const Service = require("./Service.model");

class Payment extends Model{};
Payment.init(
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        paymentMethod: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        patientId: {
            type: Sequelize.INTEGER,
            references: {
                model: Patient,
                key: 'id'
            }
        },
        serviceId: {
            type: Sequelize.INTEGER,
            references: {
                model: Service,
                key: 'id'
            }
        }
    },
    {
        sequelize,
        modelName: 'payment',
        freezeTableName: true
    }
)

Payment.belongsTo(Patient);
Patient.hasMany(Payment);
Payment.belongsTo(Service);
Service.hasOne(Payment);

module.exports = Payment;