"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegExpBasedZipCodeValidator = exports.ParseIntBasedZipCodeValidator = void 0;
var ParseIntBasedZipCodeValidator = /** @class */ (function () {
    function ParseIntBasedZipCodeValidator() {
    }
    ParseIntBasedZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && parseInt(s).toString() === s;
    };
    return ParseIntBasedZipCodeValidator;
}());
exports.ParseIntBasedZipCodeValidator = ParseIntBasedZipCodeValidator;
// Export original validator but rename it
var ZipCodeValidator_1 = require("./ZipCodeValidator");
Object.defineProperty(exports, "RegExpBasedZipCodeValidator", { enumerable: true, get: function () { return ZipCodeValidator_1.ZipCodeValidator; } });
