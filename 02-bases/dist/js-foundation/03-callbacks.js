"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const Users = [
    {
        id: 1,
        name: 'Jhon Doe'
    },
    {
        id: 2,
        name: 'Jaen Doe'
    },
    {
        id: 3,
        name: 'Dennys Ferrer'
    }
];
const getUserById = (id, callbacks) => {
    const user = Users.find(user => {
        return user.id === id;
    });
    if (!user) {
        return callbacks(`User not found with id: ${id}`);
    }
    return callbacks(undefined, user);
};
exports.getUserById = getUserById;
