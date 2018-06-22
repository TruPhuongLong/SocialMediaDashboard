import {post, get} from './data.service';
import { URL_GET_USERS } from '../libs/constant';


export const login = (url, model) => {
    
}

export const signup = (url, model) => {
    
}

export const logout = (url) => {
    
}

export const getUsers = () => {
    return get(URL_GET_USERS);
}