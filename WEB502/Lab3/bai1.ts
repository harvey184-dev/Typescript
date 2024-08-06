function sumWithoutParams(): number {
    return 5 + 10;
}

const sumWithoutParamsArrow = (): number => 5 + 10;

const sum = (a: number = 0, b: number = 0, ...rest: number[]): number => {
    return a + b + rest.reduce((acc, val) => acc + val, 0);
}

const hobbies: string[] = ['sport', 'cooking'];
const activehobbies: string[] = ['hiking'];

activehobbies.push(...hobbies);

activehobbies.push(...hobbies);

console.log(activehobbies);
