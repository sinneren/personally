import {
    BOARDS_REQUEST,
    BOARDS_GET,
    BOARDS_ADDED,
    BOARDS_FAIL,
    BOARDS_TASK_ADDED,
    BOARDS_EDITED,
    BOARDS_DELETED,
    BOARDS_TASK_EDITED,
    BOARDS_TASK_DELETED,
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
                data: action.payload.response_data,
                request: false,
            }
        case BOARDS_ADDED:
            state.data.push(action.payload.item)
            return {
                ...state,
                request: false,
            }
        case BOARDS_TASK_ADDED:
            state.data.map(item => {
                if (item.id === action.payload.id) {
                    item.tasks.push(action.payload.item);
                }
            })
            return {
                ...state,
                request: false,
            }
        case BOARDS_FAIL:
            return {
                ...state,
                request: false,
                error_message: action.payload.error_message,
            }
        case BOARDS_EDITED:
            return {
                ...state,
                request: false,
                error_message: action.payload.error_message,
            }
        case BOARDS_DELETED:
            return {
                ...state,
                request: false,
                error_message: action.payload.error_message,
            }
        case BOARDS_TASK_EDITED:
            return {
                ...state,
                request: false,
                error_message: action.payload.error_message,
            }
        case BOARDS_TASK_DELETED:
            return {
                ...state,
                request: false,
                error_message: action.payload.error_message,
            }
        default:
            return state
    }
}