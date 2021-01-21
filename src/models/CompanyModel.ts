// @ts-ignore
import faker from 'faker'
import {IMarkerType} from "../API/CustomMap"

export class CompanyModel implements IMarkerType {
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
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    // #━━━━━━━━━━━━━━━ Method conforming to IMarkerType ━━━━━━━━━━━━━━━

    markerContent(): string {
        //..........
        return `<div>
                    <h1>Company Name: ${this.companyName}</h1> 
                    <h3>Company Phrase:</h3><p><strong>${this.catchPhrase}</p>
                </div>`
    }
    /// - END OF: markerContent
}
/** - END OF: @CompanyModel */
