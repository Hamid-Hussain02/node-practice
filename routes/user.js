const express = require("express");
const userMiddleware = require('../middlewares/user')
const router = express.Router();
const userController = require("../controller/company");


router.get("/", userController.getCompanies);
// router.post("/",userMiddleware.validateUser, userController.getCompanies);


module.exports = router;