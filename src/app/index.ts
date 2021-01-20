// index.ts NOTE!!! npm install ts-node --save-dev
import {UserModel} from "../models/UserModel"
import {CompanyModel} from "../models/CompanyModel"
import {CustomMap} from "../API/CustomMap"
import {addOnMap} from "./HelperFunctions"

function main()
{
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    // section Google-API
    const customMap = new CustomMap('map')
    const user = new UserModel()
    const company = new CompanyModel()

    addOnMap(customMap, user)
    addOnMap(customMap, company)

// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
}
// @main
main()

