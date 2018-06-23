import { post, get } from './data.service';
import { URL_GET_USERS, URL_SIGNUP, URL_LOGIN,URL_LOGOUT, ACCESS_TOKEN } from '../libs/constant';

export let user = {};

export const login = (model) => {
    return post(URL_LOGIN, model)
        .then(res => {
            const {token, _user} = res;
            localStorage.setItem(ACCESS_TOKEN, token);
            user = _user;
            user.islogin = true;
            return user;
        })
}

export const signup = (model) => {
    return post(URL_SIGNUP, model);
}

export const logout = (url) => {
    return get(URL_LOGOUT)
    .then(res => {
        user = {};
        localStorage.setItem(ACCESS_TOKEN, null);
    })
}

export const getUsers = () => {
    return get(URL_GET_USERS);
}