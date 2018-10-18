import {
    BOARDS_REQUEST,
    BOARDS_GET,
    BOARDS_ADDED,
    BOARDS_FAIL,
    BOARDS_EDITED,
    BOARDS_DELETED,
} from '../constants/boards';

const initialState = {
    data: [],
    request: false,
}
export default function boards (state = initialState, action) {
    switch (action.type) {
        case BOARDS_REQUEST:
            return {
                ...state,
                request: true,
            }
        case BOARDS_GET:
            return {
                ...state,
                data: action.response_data,
                request: false,
            }
        case BOARDS_ADDED:
            state.data.push(action.payload.item)
            return {
                ...state,
                request: false,
            }
        case BOARDS_FAIL:
            return {
                ...state,
                request: false,
                error_message: action.error_message,
            }
        default:
            return state
    }
}