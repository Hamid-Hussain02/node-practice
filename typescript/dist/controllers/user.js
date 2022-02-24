"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var process = require('process');
let _path = process.cwd();
const usersModel = require(_path + "/models").User;
//const usersModel = require("../models").User;
const teamModel = require(_path + "/models").Team;
//return all users
// one to one relation
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let users = yield usersModel.findByPk(req.body.id);
        //   let users = await usersModel.findAll();
        console.log(users);
        res.status(200).send(users);
    }
    catch (error) {
        res.status(400).json({ error: error.toString() });
    }
});
const assignTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield usersModel.findByPk(req.body.id);
        let team = yield teamModel.findByPk(req.body.team_id);
        // let users = await usersModel.findAll();
        user.addTeam(team);
        console.log(user, team);
        res.status(200).send("user added in team successfully");
    }
    catch (error) {
        res.status(400).json({ error: error.toString() });
    }
});
const getUserTeams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield usersModel.findByPk(req.body.id);
        // let team = await teamModel.findByPk(req.body.team_id)
        //   let users = await usersModel.findAll();
        let result = yield user.getTeams();
        res.status(200).send(result);
    }
    catch (error) {
        res.status(400).json({ error: error.toString() });
    }
});
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userSave = new usersModel(req.body);
        yield userSave.save();
        res.status(200).send(userSave);
    }
    catch (error) {
        res.status(400).json({ error: error.toString() });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = {
            name: String,
            email: String
        };
        if (req.body.name)
            user.name = req.body.name;
        if (req.body.email)
            user.email = req.body.email;
        usersModel.update(user, {
            where: {
                id: req.body.id
            }
        });
        // await userSave.save();
        res.status(200).send("User updated successfully");
    }
    catch (error) {
        res.status(400).json({ error: error.toString() });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(object);
        usersModel.destroy({
            where: {
                id: req.body.id
            }
        });
        // await userSave.save();
        res.status(200).send("User deleted Successfully");
    }
    catch (error) {
        res.status(400).json({ error: error.toString() });
    }
});
module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    assignTeam,
    getUserTeams
};
//# sourceMappingURL=user.js.map