'use strict';
const { set, get } = require('express/lib/response');
const {
  Model
} = require('sequelize');
const userTeam = require('./userTeam');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Company, { foreignKey: 'user_id' })
      // this.hasOne(models.Team, { foreignKey: 'id' })
      this.belongsToMany(models.Team,{through:'UserTeams',foreignKey:'user_id'});
    }
  }
  User.init({      
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [2,10]
      },
      get(){
        let value = this.getDataValue('name')
        return value
      }
    },
    contact:
    { 
      type:DataTypes.INTEGER,
      validate:{
        isNumeric:true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique:true,
      validate: {
        isEmail: true,
      },
      set(value){
        this.setDataValue('email',value.toLowerCase())
      }
    },
    company: {
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      len:[2,20],
    },
    // get(value){
    //   this.setDataValue('company',value.toLowerCase())
    // },
    get() {
      var value = this.getDataValue('company');
      return value ? value.toUpperCase():null;
    },
  },  
    city: {
      type:DataTypes.STRING,
      validate:{
        len:[2,20]
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.name=user.name.toLowerCase();
      },
      afterValidate: (user, options) => {
        user.name = usr.name.toLowerCase();
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};