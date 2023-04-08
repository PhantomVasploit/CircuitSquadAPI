'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Hospitals',
      'ministryOfHealthId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'MinistryOfHealth',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Hospitals',
      'ministryOfHealthId'
    )
  }
};
