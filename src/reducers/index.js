import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users';
import boards from './boards';

export default combineReducers({
    users,
    boards,
    routing: routerReducer
})