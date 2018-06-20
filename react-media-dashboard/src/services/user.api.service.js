import axios from 'axios';
import { URL_GET_USERS } from '../libs/constant';

export const getUsers = () => {
    return axios.get(URL_GET_USERS)
    .then(res => res.data)
    .catch(error => console.log(error));
}

