"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModel = void 0;
// @ts-ignore
var faker_1 = require("faker");
var CompanyModel = /** @class */ (function () {
    // #™━━━━━━━━━━━━━━━━━━━━━━━━
    /** ™- Constructor */
    // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    function CompanyModel() {
        //..........
        /** ™- Destructuring */
        var whichName = faker_1.default.name, _a = faker_1.default.address, latitude = _a.latitude, longitude = _a.longitude;
        var _b = faker_1.default.company, catchPhrase = _b.catchPhrase, companyName = _b.companyName;
        this.companyName = whichName.firstName();
        this.companyName = companyName();
        this.catchPhrase = catchPhrase();
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
    CompanyModel.prototype.markerContent = function () {
        //..........
        return "<div>\n                    <h1>Company Name: " + this.companyName + "</h1> \n                    <h3>Company Phrase:</h3><p><strong>" + this.catchPhrase + "</p>\n                </div>";
    };
    return CompanyModel;
}());
exports.CompanyModel = CompanyModel;
/** - END OF: @CompanyModel */
