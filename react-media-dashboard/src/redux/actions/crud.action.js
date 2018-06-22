import {typeAction} from './type.action';

export const add = (payload) => {
    return {
        type: typeAction.ADD,
        payload
    }
}

export const remove = (payload) => {
    return {
        type: typeAction.REMOVE,
        payload
    }
}