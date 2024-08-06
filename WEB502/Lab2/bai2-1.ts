/* enum Role { ADMIN, READ_ONLY, AUTHOR };
const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: string,
    roletuple: [number, string]
} = {
    name: 'Typescript',
    age: 11,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
    roletuple: [12, 'author']
}

let favouriteActivities: any[];
favouriteActivities = [5, 'Sport', true];

if (person.role === Role.AUTHOR) {
    console.log('is author');
}

person.roletuple.push('admin');
person.roletuple[1] = 10;
person.roletuple = [0, 'admin', 'user']; */