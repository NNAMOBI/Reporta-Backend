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
 * class which contains contactUs table(model) for the project -2
 * using an ORM framework ( object relational mapping framework) to call models(table) DB -4
 * Defining the model here that will be migrated to the database -4
 */

//-1
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contactUs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      contactUs.belongsTo(models.organization, { foreignKey: "orgId" });
    }
  };
  contactUs.init({
    companyName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNo: DataTypes.STRING,
    query: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contactUs',
  });
  return contactUs;
};