'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Payment',
      'serviceId', 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Services',
          key : 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Payment',
      'serviceId'
    )
  }
};
