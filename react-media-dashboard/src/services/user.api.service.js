import { URL_GET_USERS } from '../libs/constant';

export const getUsers = () => {
    return fetch(URL_GET_USERS)
    .then(users => users.json())
    .catch(error => console.log(error));
}

