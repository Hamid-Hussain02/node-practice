'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTeam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserTeam.init({
    user_id: {
      type:DataTypes.INTEGER,
      validate:{
        min:1,
        max:20
      
      }
    },
    team_id: {
      type:DataTypes.INTEGER,
    validate:{
      min:1,
      max:20
    
    }
  }
    
  
  }, {
    sequelize,
    modelName: 'UserTeam',
  });
  return UserTeam;
};