const Users = [
    {
        id: 1,
        name: 'Jhon Doe'
    }, 
    {
        id: 2,
        name: 'Jaen Doe'
    }
]


const getUserById = (id, callbacks) => {
    const user = Users.find(user => {
        return user.id === id;
    });
    if (!user){
        return callbacks(`User not found with id: ${id}`);
    }
    return callbacks(null, user);
}


module.exports = {
    getUserById
}