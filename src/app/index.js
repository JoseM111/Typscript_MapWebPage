"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts NOTE!!! npm install ts-node --save-dev
var UserModel_1 = require("../models/UserModel");
var CompanyModel_1 = require("../models/CompanyModel");
var CustomMap_1 = require("../API/CustomMap");
var HelperFunctions_1 = require("../API/HelperFunctions");
function main() {
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // section Google-API
    var customMap = new CustomMap_1.CustomMap('map');
    var user = new UserModel_1.UserModel();
    var company = new CompanyModel_1.CompanyModel();
    HelperFunctions_1.addOnMap(customMap, user);
    HelperFunctions_1.addOnMap(customMap, company);
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
}
// @main
main();
