const usersModel = require("../models").User;
const teamModel = require("../models").Team;




 //return all users with bank account details
 // one to one relation
const getUsers = async (req, res) => {
  try{
  let users = await usersModel.findAll();
  
  res.status(200).send(users);
  }
  catch (error) { 
    res.status(400).json({error: error.toString()});
  }
};


module.exports = {
    getUsers
};