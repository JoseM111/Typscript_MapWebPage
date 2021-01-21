// section typealias
// #™━━━━━━━━━━━━━━━━━━━━━━━━
type GoogleMaps = google.maps.Map
export type GoogleMapMarker = google.maps.Marker
// #™━━━━━━━━━━━━━━━━━━━━━━━━

// section interface IMarkerType
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 export interface IMarkerType {
     //: - ©Global-PROPERTIES
     // #™━━━━━━━━━━━━━━━━━━━━━━━━
     location: {
         lat: number,
         lng: number
     }
     // #™━━━━━━━━━━━━━━━━━━━━━━━━
     /// -™ Function to be implemented
     markerContent(): string
}
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


// noinspection JSDeprecatedSymbols
export class CustomMap {
    //: - ©Member-PROPERTIES
    // #™━━━━━━━━━━━━━━━━━━━━━━━━
    private readonly googleMap: GoogleMaps
    // #™━━━━━━━━━━━━━━━━━━━━━━━━

    /** ™- Constructor */
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    // #━━━━━━━━━━━━━━━ methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    addMarker(marker: IMarkerType): GoogleMapMarker {
        /// -™ Destructuring
        const { lat, lng } = marker.location
        const { googleMap } = this

        const markerEvent = new google.maps.Marker({
            //..........
            map: googleMap,
            position: {
                //..........
                lat: lat,
                lng: lng
            }
        })
        /// - END OF: markerEvent

        this.infoWindowContent(marker, markerEvent)
        return markerEvent
    }
    /// - END OF METHOD: addMarker

    /// -™ Helper function for addMarker
    private infoWindowContent(marker: IMarkerType, markerEvent: GoogleMapMarker) {
        /**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         * @EventListener:
         * • Adding an event listener for when the
         *   marker is clicked. Will display a popup
         *   with the `content` added to the infoWindow
         **━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
        markerEvent.addListener('click', () => {
            //___________
            const infoWindow = new google.maps.InfoWindow({
                //..........
                content: marker.markerContent()
            })

            infoWindow.open(this.googleMap, markerEvent)
        })
    }
    /// - END OF: infoWindowContent
}
/** - END OF: @CustomMap */
