import {
    USERS_REQUEST,
    USERS_FAIL,
    USERS_SUCCESS,
    USER_REG_SUCCESS,
    USER_AUTH_SUCCESS,
    USER_SIGNOUT,
} from '../constants/users';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? {
    data: [],
    reg: false,
    request: false,
    auth: true,
    user: user,
    error_message: '',
} : {
    data: [],
    reg: false,
    request: false,
    auth: false,
    user: null,
    error_message: '',
};

export default function users(state = initialState, action) {
    switch (action.type) {
        case USERS_REQUEST:
            return {
                ...state,
                request: true,
                error_message: action.payload.error_message,
            }
        case USERS_SUCCESS:
            return {
                ...state,
                data: action.payload.response_data,
                request: false,
                error_message: action.payload.error_message,
            }
        case USERS_FAIL:
            return {
                ...state,
                request: false,
                error_message: action.payload.error_message,
            }
        case USER_REG_SUCCESS:
            return {
                ...state,
                request: false,
                id: action.payload.id,
                reg: action.payload.reg,
                error_message: action.payload.error_message,
            }
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                request: false,
                auth: action.payload.auth,
                user: action.payload.user,
                error_message: action.payload.error_message,
            }
        case USER_SIGNOUT:
            return {
                ...state,
                auth: action.payload.auth,
                user: null,
                error_message: action.payload.error_message,
            }
        default:
            return state
    }
}