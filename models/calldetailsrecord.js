'use strict';
/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM004
 * Course: Software Engineering Project
 * 
 */


/**
 * * importing libraries: - 1
 * class which contains cdr table(model) for the project -2
 * using an ORM framework ( object relational mapping framework) to call models(table) DB -4
 * Defining the model here that will be migrated to the database -4
 */

//-1
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class callDetailsRecord extends Model { //-2
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //2
    static associate(models) {
      // define association here
      callDetailsRecord.belongsTo(models.organization, { foreignKey: "orgId" });
      callDetailsRecord.belongsTo(models.user, { foreignKey: "userId" });
    }
  };
  //-4
  callDetailsRecord.init({
    time_start: DataTypes.STRING,
    time_Answered: DataTypes.STRING,
    time_End: DataTypes.STRING,
    from_no: DataTypes.STRING,
    ended_call: DataTypes.STRING,
    to_no: DataTypes.STRING,
    duration: DataTypes.STRING,
    reason_terminated: DataTypes.TEXT,
    date: DataTypes.STRING,
    orgId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'callDetailsRecord',
  });
  return callDetailsRecord;
};