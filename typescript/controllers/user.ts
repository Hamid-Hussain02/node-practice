import { Request, Response} from 'express';

var process = require('process'); 
 let _path = process.cwd()
const usersModel = require(_path + "/models").User

//const usersModel = require("../models").User;
const teamModel = require(_path + "/models").Team;




 //return all users
 // one to one relation
const getUsers = async (req: Request , res: Response ) => {
  try{
      let users =await usersModel.findByPk(req.body.id)
//   let users = await usersModel.findAll();
console.log(users)
  
  res.status(200).send(users);
  }
  catch (error: any) { 
    res.status(400).json({error: error.toString()});
  }
};
const assignTeam = async (req: Request , res: Response ) => {
    try{
     let user =await usersModel.findByPk(req.body.id)
       let team = await teamModel.findByPk(req.body.team_id)
    // let users = await usersModel.findAll();
  user.addTeam(team)
  console.log(user,team)
    
    res.status(200).send("user added in team successfully");
    } 
    catch (error: any) { 
      res.status(400).json({error: error.toString()});
    }
  };

  const getUserTeams = async (req: Request , res: Response ) => {
    try{
       let user =await usersModel.findByPk(req.body.id)
      // let team = await teamModel.findByPk(req.body.team_id)
  //   let users = await usersModel.findAll();
  let result = await user.getTeams()
    
    res.status(200).send(result);
    }
    catch (error: any) { 
      res.status(400).json({error: error.toString()});
    }
  };

const addUser = async (req: Request , res: Response ) => {
    try{
    let userSave = new usersModel(req.body);
    await userSave.save();
    res.status(200).send(userSave);
    }
    catch (error: any) { 
      res.status(400).json({error: error.toString()});
    }
  };

  const updateUser = async (req: Request , res: Response ) => {
    try{
        let user ={
          name:String,
          email:String
        }
        if(req.body.name)  user.name = req.body.name;
        if(req.body.email)  user.email = req.body.email;
        usersModel.update(user,{
          where: {
            id: req.body.id
          }});
    // await userSave.save();
    res.status(200).send("User updated successfully");
    }
    catch (error: any) { 
      res.status(400).json({error: error.toString()});
    }
  };

  const deleteUser = async (req: Request , res: Response ) => {
    try{
        // console.log(object);
        usersModel.destroy({
          where: {
            id: req.body.id
          }});
    // await userSave.save();
    res.status(200).send("User deleted Successfully");
    }
    catch (error: any) { 
      res.status(400).json({error: error.toString()});
    }
  };
  

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    assignTeam,
    getUserTeams
};