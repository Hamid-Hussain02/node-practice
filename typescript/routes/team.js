const express = require("express");
var process = require('process'); 
 let _path = process.cwd()

const userMiddleware = require(_path +'/middlewares/user')
const router = express.Router();
const teamController = require("../dist/controllers/team");


router.get("/", teamController.getTeams);
// router.post("/",[userMiddleware.validateUser,userMiddleware.isHamid], userController.getCompanies);


module.exports = router;