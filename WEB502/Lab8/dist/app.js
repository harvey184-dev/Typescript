"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var class_validator_1 = require("class-validator");
var product_model_1 = require("./product.model");
var products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 }
];
var newProd = new product_model_1.Product('', -5.99);
(0, class_validator_1.validate)(newProd).then(function (errors) {
    if (errors.length > 0) {
        console.log('VALIDATION ERRORS!');
        console.log(errors);
    }
    else {
        console.log(newProd.getInformation());
    }
});
