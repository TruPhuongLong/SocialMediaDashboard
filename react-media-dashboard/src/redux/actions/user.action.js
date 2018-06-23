import { typeAction } from './type.action';
import { getUsers } from '../../services/auth.service';

export const getUsersAction = () => {
    return getUsers()
        .then(users => {
            return {
                type: typeAction.GET_USERS,
                payload: users
            }
        })
}