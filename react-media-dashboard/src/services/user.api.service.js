const users = [
    {email: 'peter@gmail.com', username: 'peter', _id: 1},
    {email: '2peter@gmail.com', username: '2peter', _id: 2},
    {email: '3peter@gmail.com', username: '3peter', _id: 3}
]

export const getUsers = () => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(users);
        }, 1000);
    });
}

