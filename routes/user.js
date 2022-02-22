const express = require("express");
const userMiddleware = require('../middlewares/user')
const router = express.Router();
const teamController = require("../controllers/team");
const usersController = require("../controllers/user");
const email = require("../jobs/email");
const event = require("../events/event");


router.get("/", usersController.getUsers);
router.post("/create", usersController.addUser);
router.post("/update", usersController.updateUser);
router.post("/delete", usersController.deleteUser);
// router.post("/",[userMiddleware.validateUser,userMiddleware.isHamid], userController.getCompanies);
router.post("/assignteam", usersController.assignTeam);
router.post("/sendemail", email.scheduleEmail);
router.post("/sendEvent", event.registerEvent);


module.exports = router;