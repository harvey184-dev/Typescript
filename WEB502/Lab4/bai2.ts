interface Named {
    readonly name?: string;
    outputname?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}
let user1: Greetable;

user1 = new Person();

user1.greet('Hi there - I am');
console.log(user1);