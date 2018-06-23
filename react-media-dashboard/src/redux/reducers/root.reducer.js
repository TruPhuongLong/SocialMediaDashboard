import {combineReducers} from 'redux';
import {postReducer} from './post.reducer';
import {userReducer} from './user.reducer';
import {authReducer} from './auth.reducer';

export const rootReducer = combineReducers({userReducer, postReducer, authReducer});
