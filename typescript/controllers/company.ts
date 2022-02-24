import { Request, Response} from 'express';


var process = require('process'); 
 let _path = process.cwd()



// const { Model } = require("sequelize/types");

const usersModel = require(_path + "/models").User;
const companyModel = require(_path + "/models").Company;
const teamModel = require(_path + "/models").Team;



 //return all users with bank account details
 // one to one relation
const getCompanies = async (req:Request, res:Response) => {
  try{
  let companies = await companyModel.findAll({
  include: [{
    model: teamModel,
    include: [usersModel]
  }]

  });
  
      res.status(200).send(companies);
  }
  catch (error) { 
    res.status(400).json({error: error.toString()});
  }
};


module.exports = {
  getCompanies
};