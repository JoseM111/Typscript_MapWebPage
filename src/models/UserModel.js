"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
// @ts-ignore
var faker_1 = require("faker");
var UserModel = /** @class */ (function () {
    // #™━━━━━━━━━━━━━━━━━━━━━━━━
    /**| ™- Constructor |*/
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    function UserModel() {
        /** ™- Destructuring name * address */
        var whichName = faker_1.default.name, _a = faker_1.default.address, latitude = _a.latitude, longitude = _a.longitude;
        this.name = whichName.firstName();
        this.location = {
            //..........
            lat: parseFloat(latitude()),
            lng: parseFloat(longitude())
        };
        /// - END OF: location
    }
    /// - END OF: constructor
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // #━━━━━━━━━━━━━━━ Method conforming to IMarkerType ━━━━━━━━━━━━━━━
    UserModel.prototype.markerContent = function () {
        //..........
        return "<p><strong>User Name: " + this.name + "</p>";
    };
    return UserModel;
}());
exports.UserModel = UserModel;
/** - END OF: @UserModel */
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
