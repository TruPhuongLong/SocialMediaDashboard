import { typeAction } from './type.action';
import { login, signup, logout } from '../../services/auth.service';
import {errorAction} from './error.action';

export const loginAction = (model) => {
    return login(model)
        .then(user => {
            if(user){
                return {
                    type: typeAction.LOGIN,
                    payload: {
                        islogin: true,
                        user,
                    }
                }
            }else{
                return errorAction('auth fail');
            }            
        })
}

export const logoutAction = () => {
    return logout()
        .then(res => {
            return {
                type: typeAction.LOGOUT,
                payload: {
                    islogin: false,
                    user: {}
                }
            }
        })
}

export const signupAction = (model) => {
    return signup(model)
        .then(res => {
            return {
                type: typeAction.SIGNUP
            }
        })
}