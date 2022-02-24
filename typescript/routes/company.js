const express = require("express");
const userMiddleware = require('../middlewares/user')
const router = express.Router();
const userController = require("../dist/controllers/company");

 router.get("/", userController.getCompanies);
// router.post("/",[userMiddleware.validateUser,userMiddleware.isHamid], userController.getCompanies);

module.exports = router;