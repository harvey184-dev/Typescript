import { Person } from "./person";
import { Student } from "./student";

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let student: Person = new Student("Thi", "Hong", "Nguyen");
document.body.innerHTML = greeter(student);
