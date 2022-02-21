'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.User,{foreignKey:'company_id'});
      Company.hasMany(models.Team,{foreignKey:'company_id'});
    }
  }
  Company.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          isAlphanumeric: true,
          notNull: true,
          notEmpty: true,
          min: 1,
          max: 255
      }
    },

    owner: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
          isAlphanumeric: true,
          notNull: true,
          notEmpty: true,
          min: 1,
          max: 255
      }
    }
   
   
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};