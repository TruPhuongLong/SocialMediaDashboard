import { typeAction } from './type.action';

export const errorAction = (mes) => {
    return {
        type: typeAction.ERROR,
        payload: {
            error: mes
        }
    }
}