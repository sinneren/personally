import { URL } from '../constants/default';
import {
    BOARDS_REQUEST,
    BOARDS_GET,
    BOARDS_ADDED,
    BOARDS_FAIL,
    BOARDS_EDITED,
    BOARDS_DELETED,
} from '../constants/boards';
import axios from 'axios';

export function getBoards(id) {
    return dispatch => {
        dispatch({
            type: BOARDS_REQUEST,
            error_message: ''
        });
        axios
            .get(URL + `users/${id}/boards`)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: BOARDS_GET,
                        response_data: response.data
                    });
                }
            })
            .catch(response => {
                dispatch({
                    type: BOARDS_FAIL,
                    error_message: 'err'
                });
            })
    }
}