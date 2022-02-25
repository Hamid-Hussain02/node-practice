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
      Company.hasMany(models.User,{foreignKey:'company'});
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
          len:[2-20]
      }
    },

    owner: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
          isAlphanumeric: true,
          notNull: true,
          notEmpty: true,
          len:[2-20]
      }
    },
    user_id: {
      type:DataTypes.INTEGER   
    },
    team_id: {
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};