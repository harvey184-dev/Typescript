"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StaticZipCodeValidator_1 = require("./StaticZipCodeValidator");
var strings = ["Hello", "98052", "101"];
// Use function validate
strings.forEach(function (s) {
    console.log("\"".concat(s, "\" ").concat((0, StaticZipCodeValidator_1.default)(s) ? "matches" : "does not match"));
});
