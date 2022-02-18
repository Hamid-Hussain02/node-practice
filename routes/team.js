const express = require("express");
const userMiddleware = require('../middlewares/user')
const router = express.Router();
const teamController = require("../controllers/team");


router.get("/", teamController.getTeams);
// router.post("/",[userMiddleware.validateUser,userMiddleware.isHamid], userController.getCompanies);


module.exports = router;