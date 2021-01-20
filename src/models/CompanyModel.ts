// @ts-ignore
import faker from 'faker'

export class CompanyModel {
    //: - ©Member-PROPERTIES
    // #™━━━━━━━━━━━━━━━━━━━━━━━━
    companyName: string
    catchPhrase: string
    location: {
        //..........
        lat: number,
        lng: number
    }
    // #™━━━━━━━━━━━━━━━━━━━━━━━━

    /** ™- Constructor */
    constructor() {

        //..........
        /** ™- Destructuring */
        const {name: whichName, address: {latitude, longitude}} = faker
        const {company: {catchPhrase: catchPhrase, companyName: companyName}} = faker

        this.companyName = whichName.firstName()
        this.companyName = companyName()
        this.catchPhrase = catchPhrase()
        this.location = {
            //..........
            lat: parseFloat(latitude()),
            lng: parseFloat(longitude())
        }
        /// - END OF: location
    }

    /// - END OF: constructor
}
/** - END OF: @CompanyModel */
