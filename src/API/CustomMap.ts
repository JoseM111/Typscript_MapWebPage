// section typealias
// #™━━━━━━━━━━━━━━━━━━━━━━━━
type GoogleMaps = google.maps.Map
export type GoogleMapMarker = google.maps.Marker
// #™━━━━━━━━━━━━━━━━━━━━━━━━

// section interface IMarkerType
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 export interface IMarkerType {
    //..........
    location: {
        lat: number,
        lng: number
    }
}
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export class CustomMap {
    //: - ©Member-PROPERTIES
    // #™━━━━━━━━━━━━━━━━━━━━━━━━
    private readonly googleMap: GoogleMaps
    // #™━━━━━━━━━━━━━━━━━━━━━━━━

    /** ™- Constructor */
    constructor(divID: string) {
        //..........
        this.googleMap = new google.maps.Map(
            document.getElementById(divID), {
                //..........
                zoom: 1,
                center: {
                    //..........
                    lat: 0,
                    lng: 0
                }
            })
    }
    /// - END OF: constructor

    // #............ Methods ............

    addMarker(marker: IMarkerType): GoogleMapMarker {
        /// -™ Destructuring
        const { lat, lng } = marker.location
        const { googleMap } = this

        return new google.maps.Marker({
            //..........
            map: googleMap,
            position: {
                //..........
                lat: lat,
                lng: lng
            }
        })
    }
    /// - END OF: addMarker

    // addCompanyMarker(company: CompanyModel): GoogleMapMarker {
    //     //..........
    //     return new google.maps.Marker({
    //         //..........
    //         map: this.googleMap,
    //         position: {
    //             //..........
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     })
    // }
    // /// - END OF: addCompanyMarker
}
/** - END OF: @CustomMap */
