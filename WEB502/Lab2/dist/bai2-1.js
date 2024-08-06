var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Typescript',
    age: 11,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
    roletuple: [12, 'author']
};
let favouriteActivities;
favouriteActivities = [5, 'Sport', true];
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
person.roletuple.push('admin');
person.roletuple[1] = 10;
person.roletuple = [0, 'admin', 'user'];
