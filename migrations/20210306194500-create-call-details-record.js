'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('callDetailsRecords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      time_start: {
        type: Sequelize.STRING
      },
      time - answered: {
        type: Sequelize.STRING
      },
      from - no: {
        type: Sequelize.STRING
      },
      to - no: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      reason - terminated: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('callDetailsRecords');
  }
};