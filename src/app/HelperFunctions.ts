import {CustomMap, GoogleMapMarker, IMarkerType} from "../API/CustomMap"

// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const addOnMap = (custom: CustomMap, newMarker: IMarkerType): GoogleMapMarker =>  {
    // sections Adds marker on the map
    const result: GoogleMapMarker = custom.addMarker(newMarker)
    console.log(result)

    return result
}
/** - END OF: @addOnMap */
