import {
    USERS_REQUEST,
    USERS_FAIL,
    USERS_SUCCESS,
    USER_REG_SUCCESS,
    USER_AUTH_SUCCESS,
} from '../constants/users';

const initialState = {
    data: [],
    reg: false,
    request: false,
    auth: false,
    user: null,
};

export default function users(state = initialState, action) {
    switch (action.type) {
        case USERS_REQUEST:
            return {
                ...state,
                request: true,
            }
        case USERS_SUCCESS:
            return {
                ...state,
                data: action.response_data,
                request: false
            }
        case USERS_FAIL:
            return {
                ...state,
                request: false
            }
        case USER_REG_SUCCESS:
            return {
                ...state,
                request: false,
                id: action.payload.id,
                reg: action.payload.reg
            }
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                request: false,
                auth: action.payload.auth,
                user: action.payload.user,
            }
        default:
            return state
    }
}