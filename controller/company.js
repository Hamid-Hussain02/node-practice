const usersModel = require("../models").User;
const companyModel = require("../models").Company;



 //return all users with bank account details
 // one to one relation
const getCompanies = async (req, res) => {
  try{
  let companies = await companyModel.findAll({include:usersModel});
  res.status(200).send(companies);
  }
  catch (error) { 
    res.status(400).json({error: error.toString()});
  }
};


module.exports = {
  getCompanies
};