import {combineReducers} from 'redux';
import {postReducer} from './post.reducer';

export const rootReducer = combineReducers({postReducer});
