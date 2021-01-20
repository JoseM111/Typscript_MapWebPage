"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMap = void 0;
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var CustomMap = /** @class */ (function () {
    // #™━━━━━━━━━━━━━━━━━━━━━━━━
    /** ™- Constructor */
    function CustomMap(divID) {
        //..........
        this.googleMap = new google.maps.Map(document.getElementById(divID), {
            //..........
            zoom: 1,
            center: {
                //..........
                lat: 0,
                lng: 0
            }
        });
    }
    /// - END OF: constructor
    // #............ Methods ............
    CustomMap.prototype.addMarker = function (marker) {
        /// -™ Destructuring
        var _a = marker.location, lat = _a.lat, lng = _a.lng;
        var googleMap = this.googleMap;
        return new google.maps.Marker({
            //..........
            map: googleMap,
            position: {
                //..........
                lat: lat,
                lng: lng
            }
        });
    };
    return CustomMap;
}());
exports.CustomMap = CustomMap;
/** - END OF: @CustomMap */
