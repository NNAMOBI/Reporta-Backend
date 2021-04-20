'use strict';

/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM004
 * Course: Software Engineering Project
 * 
 */


/**
 * * Exporting the modules: - 1
 * Files which contains the Call details record table(model) for the project -2
 * using an ORM framework (object relational mapping framework) to call models(table) DB -3
 * Defining the model here that will be migrated to the database -4
 * * Up method is to migrate a table and its attributes -5, which is create the cdr table based on this fields
 * Down method is to destroy a table and attributes-6
 */
 
module.exports = {
  up: async (queryInterface, Sequelize) => { //-5
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
      time_end: {
        type: Sequelize.STRING
      },
      time_answered: {
        type: Sequelize.STRING
      },
      ended_call: {
       type: Sequelize.STRING
      },
      from_no: {
        type: Sequelize.STRING
      },
      to_no: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      reason_terminated: {
        type: Sequelize.TEXT
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
      },
      orgId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Organizations",
          Key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
        // field: 'org_id'

      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          Key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE

        }
        // field: 'org_id'

      }
    });
  },
  down: async (queryInterface, Sequelize) => {  //-6
    await queryInterface.dropTable('callDetailsRecords');
  }
};