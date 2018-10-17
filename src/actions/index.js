import {
    USERS_REQUEST,
    USERS_FAIL,
    USERS_SUCCESS,
    USER_REG_SUCCESS,
    USER_AUTH_SUCCESS,
} from '../constants/users';
import { URL } from '../constants/default';
import axios from 'axios';
import sha256 from 'sha256';

export function getUserList() {
    return dispatch => {
        dispatch({
            type: USERS_REQUEST,
            error_message: ''
        });
        axios
            .get(URL + 'users')
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: USERS_SUCCESS,
                        response_data: response.data
                    });
                }
            })
            .catch(response => {
                dispatch({
                    type: USERS_FAIL,
                    error_message: 'err'
                });
            })
    }
}
export function pushNewUser(state) {
    return dispatch => {
        dispatch({
            type: USERS_REQUEST,
            error_message: ''
        });
        axios
            .get(URL + 'users?search=' + state.username)
            .then(response => {
                if (response.data.length > 0) {
                    dispatch({
                        type: USERS_FAIL,
                        error_message: 'Пользователь с логином "' + state.username + '" уже зарегистрирован.'
                    });
                } else {
                    const data = {
                        ...state,
                        password: sha256(state.password)
                    }
                    axios
                        .post(URL + 'users', data)
                        .then(response => {
                            if (response.status === 201) {
                                dispatch({
                                    type: USER_REG_SUCCESS,
                                    payload: {
                                        reg: true,
                                        id: response.data.id
                                    }
                                });
                            } else {
                                dispatch({
                                    type: USERS_FAIL,
                                    error_message: 'err'
                                });
                            }
                        })
                }
            })
            .catch(response => {
                dispatch({
                    type: USERS_FAIL,
                    error_message: 'err'
                });
            })
    }
}
export function signIn(state) {
    return dispatch => {
        dispatch({
            type: USERS_REQUEST,
            error_message: ''
        });
        axios
            .get(URL + 'users?search=' + state.username)
            .then(response => {
                if (response.data.length === 0) {
                    dispatch({
                        type: USERS_FAIL,
                        error_message: 'Пользователь с логином "' + state.username + '" НЕ зарегистрирован.'
                    });
                } else {
                    let hash_password = sha256(state.password);
                    let res = response.data.filter(users => (users.username === state.username && users.password === hash_password));
                    if (res.length > 0) {
                        dispatch({
                            type: USER_AUTH_SUCCESS,
                            payload: {
                                auth: true,
                                id: res[0].id
                            }
                        });
                    } else {
                        dispatch({
                            type: USERS_FAIL,
                            error_message: 'Логин или пароль не совпадают'
                        });
                    }
                }
            })
            .catch(response => {
                dispatch({
                    type: USERS_FAIL,
                    error_message: 'err'
                });
            })
    }
}