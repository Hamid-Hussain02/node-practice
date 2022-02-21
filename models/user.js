'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Company, { foreignKey: 'id' })
      this.hasOne(models.Team, { foreignKey: 'id' })
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [2,10]
      }
    },
    contact: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    company: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};