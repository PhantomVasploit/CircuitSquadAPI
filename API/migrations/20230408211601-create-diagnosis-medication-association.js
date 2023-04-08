'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Medications',
      'diagnosisId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Diagnosis',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Medications',
      'diagnosisId'
    )
  }
};
