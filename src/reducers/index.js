import { combineReducers } from 'redux';
import users from './users';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    users,
    routing: routerReducer
})