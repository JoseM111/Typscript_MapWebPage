// @ts-ignore
import faker from 'faker'
import {IMarkerType} from "../API/CustomMap"

export class UserModel implements IMarkerType {
    //: - ©Member-PROPERTIES
    // #™━━━━━━━━━━━━━━━━━━━━━━━━
    name: string
    location: {
        //..........
        lat: number,
        lng: number
    }
    // #™━━━━━━━━━━━━━━━━━━━━━━━━

    /**| ™- Constructor |*/
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    constructor() {
        /** ™- Destructuring name * address */
        const {name: whichName, address: {latitude, longitude}} = faker

        this.name = whichName.firstName()
        this.location = {
            //..........
            lat: parseFloat(latitude()),
            lng: parseFloat(longitude())
        }
        /// - END OF: location
    }
    /// - END OF: constructor
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    // #━━━━━━━━━━━━━━━ Method conforming to IMarkerType ━━━━━━━━━━━━━━━

    markerContent(): string {
        //..........
        return `<p><strong>User Name: ${this.name}</p>`
    }
    /// - END OF: markerContent
}
/** - END OF: @UserModel */
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
