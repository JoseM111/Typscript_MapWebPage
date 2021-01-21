"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMap = void 0;
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// noinspection JSDeprecatedSymbols
var CustomMap = /** @class */ (function () {
    // #™━━━━━━━━━━━━━━━━━━━━━━━━
    /** ™- Constructor */
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // #━━━━━━━━━━━━━━━ methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    CustomMap.prototype.addMarker = function (marker) {
        /// -™ Destructuring
        var _a = marker.location, lat = _a.lat, lng = _a.lng;
        var googleMap = this.googleMap;
        var markerEvent = new google.maps.Marker({
            //..........
            map: googleMap,
            position: {
                //..........
                lat: lat,
                lng: lng
            }
        });
        /// - END OF: markerEvent
        this.infoWindowContent(marker, markerEvent);
        return markerEvent;
    };
    /// - END OF METHOD: addMarker
    /// -™ Helper function for addMarker
    CustomMap.prototype.infoWindowContent = function (marker, markerEvent) {
        var _this = this;
        /**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         * @EventListener:
         * • Adding an event listener for when the
         *   marker is clicked. Will display a popup
         *   with the `content` added to the infoWindow
         **━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
        markerEvent.addListener('click', function () {
            //___________
            var infoWindow = new google.maps.InfoWindow({
                //..........
                content: marker.markerContent()
            });
            infoWindow.open(_this.googleMap, markerEvent);
        });
    };
    return CustomMap;
}());
exports.CustomMap = CustomMap;
/** - END OF: @CustomMap */
