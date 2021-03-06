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
 * class which contains organization table(model) for the project -2
 * using an ORM framework ( object relational mapping framework) to call models(table) DB -4
 * Defining the model here that will be migrated to the database -4
 */

 //-1
const {
  Model
} = require('sequelize');
//-2
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here, foreignkey relationship
      Organization.hasMany(models.user, { foreignKey: "orgId" });
    }
  };
  //-4
  Organization.init({
    companyName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNo: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Organization',
  });
  return Organization;
};