interface User {
    id: number,
    name: string
}



const Users: User[] = [
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
]


export const getUserById = (id: number, callbacks: (error?:string, user?:User) => void) => {
    const user = Users.find(user => {
        return user.id === id;
    });
    if (!user){
        
        return callbacks(`User not found with id: ${id}`); 
    }
    return callbacks(undefined, user);
}

