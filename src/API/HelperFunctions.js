"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOnMap = void 0;
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var addOnMap = function (custom, newMarker) {
    // sections Adds marker on the map
    var result = custom.addMarker(newMarker);
    console.log(result);
    return result;
};
exports.addOnMap = addOnMap;
/** - END OF: @addOnMap */
