'use strict';
const { set } = require('express/lib/response');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Team.hasMany(models.User,{foreignKey:'team_id'});
      Team.hasOne(models.Company,{foreignKey:'team_id'});
      Team.belongsToMany(models.User,{through:'UserTeams',foreignKey:'team_id'});
    }
  }
  Team.init({
    name: {
      type:DataTypes.STRING,
      validate:{
        len:[2-20]
      },
      set(value){
        this.setDataValue('name',value.toLowerCase())
      }
    },
    company: {
      type:DataTypes.STRING,
      validate:{
        len:[2-20]
      }

    },
    user_id: {
      type:DataTypes.INTEGER,
    validate:{
      min:2,
      max:20
    }
  }
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};