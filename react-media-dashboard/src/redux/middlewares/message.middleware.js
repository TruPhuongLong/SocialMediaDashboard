import { typeAction } from '../actions/type.action';

export const messageMiddleware = store => next => action => {

    switch (action.type) {
        case typeAction.ERROR:
            window.alert(action.payload.error);
            return;
        case typeAction.SUCCESS:
            window.alert('success')
            return;
        case typeAction.SIGNUP:
            window.alert('signup success')
            return;
        case typeAction.POST_COMMENT:
            return;
        case typeAction.PATCH_COMMENT:
            return;
        case typeAction.DELETE_COMMENT:
            return;
    }

    next(action);
}