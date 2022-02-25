const usersModel = require("../models").User;
const teamModel = require("../models").Team;
const companyModel = require("../models").Company;




 //return all users with bank account details
 // one to one relation
const getTeams = async (req, res) => {
  try{
  let teams = await teamModel.findAll({include:usersModel,});
  res.status(200).send(teams);
  }
  catch (error) { 
    res.status(400).json({error: error.toString()});
  }
};




module.exports = {
    getTeams
};