"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./student");
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var student = new student_1.Student("Thi", "Hong", "Nguyen");
document.body.innerHTML = greeter(student);
