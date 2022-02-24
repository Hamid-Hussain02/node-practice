import { Request, Response} from 'express';


var process = require('process'); 
 let _path = process.cwd()

const usersModel = require(_path +"/models").User;
const teamModel = require(_path +"/models").Team;
const companyModel = require(_path + "/models").Company;




 //return all users with bank account details
 // one to one relation
 export const getTeams = async (req:Request, res:Response) => {
  try{
  let teams = await teamModel.findAll({include:usersModel,});
  res.status(200).send(teams);
  }
  catch (error) { 
    res.status(400).json({error: error.toString()});
  }
};




// module.exports = {
//     getTeams
// };