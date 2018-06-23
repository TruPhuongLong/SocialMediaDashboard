import { post, get } from './data.service';
import { URL_GET_USERS, URL_SIGNUP, URL_LOGIN, URL_LOGOUT, ACCESS_TOKEN } from '../libs/constant';
import { throws, rejects } from 'assert';

export const login = (model) => {
    return post(URL_LOGIN, model)
        .then(res => {
            const { token, _user } = res;
            if(token && _user){
                localStorage.setItem(ACCESS_TOKEN, token);
                return _user;
            }
        })
        .catch(error => console.log(error));
}

export const signup = (model) => {
    return post(URL_SIGNUP, model);
}

export const logout = () => {
    return get(URL_LOGOUT)
        .then(res => {
            localStorage.setItem(ACCESS_TOKEN, null);
            return res;
        })
}

export const getUsers = () => {
    return get(URL_GET_USERS);
}