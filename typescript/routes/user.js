const express = require("express");

var process = require('process'); 
 let _path = process.cwd()


const userMiddleware = require(_path +'/middlewares/user')
const router = express.Router();
const usersController = require("../dist/controllers/user");
// const email = require(_path +"/jobs/email");
// const event = require(_path +"/events/event");


router.get("/", usersController.getUsers);
router.post("/create", usersController.addUser);
router.post("/update", usersController.updateUser);
router.post("/delete", usersController.deleteUser);
// router.post("/",[userMiddleware.validateUser,userMiddleware.isHamid], userController.getCompanies);
router.post("/assignteam", usersController.assignTeam);
// router.post("/sendemail", email.scheduleEmail);
// router.post("/sendEvent", event.registerEvent);


module.exports = router;