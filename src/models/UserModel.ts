// @ts-ignore
import faker from 'faker'

export class UserModel {
    //: - ©Member-PROPERTIES
    // #™━━━━━━━━━━━━━━━━━━━━━━━━
    name: string
    location: {
        //..........
        lat: number,
        lng: number
    }

    // #™━━━━━━━━━━━━━━━━━━━━━━━━

    /** ™- Constructor */
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
}
/** - END OF: @UserModel */
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
