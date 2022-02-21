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

const addUser = async (req, res) => {
    try{
    let userSave = new usersModel(req.body);
    await userSave.save();
    res.status(200).send(userSave);
    }
    catch (error) { 
      res.status(400).json({error: error.toString()});
    }
  };

  const updateUser = async (req, res) => {
    try{
        let object={}
        if(req.body.name)  object.name = req.body.name;
        if(req.body.email)  object.email = req.body.email;
        if(req.body.password)  object.password = req.body.password;
        console.log(object);
        usersModel.update(object,{
          where: {
            id: req.body.user_id
          }});
    // await userSave.save();
    res.status(200).send("User updated successfully");
    }
    catch (error) { 
      res.status(400).json({error: error.toString()});
    }
  };

  const deleteUser = async (req, res) => {
    try{
        // console.log(object);
        usersModel.destroy({
          where: {
            id: req.body.user_id
          }});
    // await userSave.save();
    res.status(200).send("User deleted Successfully");
    }
    catch (error) { 
      res.status(400).json({error: error.toString()});
    }
  };
  

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
};