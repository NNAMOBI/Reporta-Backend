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
 * Files which contains the user table(model) for the project -2
 * using an ORM framework (object relational mapping framework) to call models(table) DB -3
 * Defining the model here that will be migrated to the database -4
 * * Up method is to migrate a table and its attributes -5
 * Down method is to destroy a table and attributes-6
 */
 
module.exports = {
  up: async (queryInterface, Sequelize) => {  //-5
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usertype: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phoneNo: {
        type: Sequelize.STRING
      },
      status: {
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

        }
        // field: 'org_id'

      }
    });
  },
  down: async (queryInterface, Sequelize) => { //-6
    await queryInterface.dropTable('users');
  }
};