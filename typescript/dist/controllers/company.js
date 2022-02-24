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
// const { Model } = require("sequelize/types");
const usersModel = require(_path + "/models").User;
const companyModel = require(_path + "/models").Company;
const teamModel = require(_path + "/models").Team;
//return all users with bank account details
// one to one relation
const getCompanies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let companies = yield companyModel.findAll({
            include: [{
                    model: teamModel,
                    include: [usersModel]
                }]
        });
        res.status(200).send(companies);
    }
    catch (error) {
        res.status(400).json({ error: error.toString() });
    }
});
module.exports = {
    getCompanies
};
//# sourceMappingURL=company.js.map