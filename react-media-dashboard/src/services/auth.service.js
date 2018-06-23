import {post, get} from './data.service';
import { URL_GET_USERS, URL_SIGNUP, URL_LOGIN } from '../libs/constant';


export const login = (model) => {
    return post(URL_LOGIN, model);
}

export const signup = (model) => {
    return post(URL_SIGNUP, model);
}

export const logout = (url) => {
    
}

export const getUsers = () => {
    return get(URL_GET_USERS);
}