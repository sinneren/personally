import { URL } from '../constants/default';
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
                        payload: {
                            response_data: response.data
                        }
                    });
                }
            })
            .catch(response => {
                console.log.bind(console)
                dispatch({
                    type: BOARDS_FAIL,
                    payload: {
                        error_message: response
                    }
                });
            })
    }
}
export function addBoard(id) {
    return dispatch => {
        dispatch({
            type: BOARDS_REQUEST,
            payload: {
                error_message: ''
            }
        });
        axios
            .post(URL + `users/${id}/boards`, {
                text: '',
                type: '',
                tasks: [],
            })
            .then(response => {
                if (response.status === 201) {
                    dispatch({
                        type: BOARDS_ADDED,
                        payload: {
                            item: response.data
                        }
                    });
                } else {
                    dispatch({
                        type: BOARDS_FAIL,
                        payload: {
                            error_message: 'err'
                        }
                    });
                }
            })
            .catch(response => {
                console.log.bind(console)
                dispatch({
                    type: BOARDS_FAIL,
                    payload: {
                        error_message: response
                    }
                });
            })
    }
}
export function updateBoard(user_id, board_id, data) {
    return dispatch => {
        dispatch({
            type: BOARDS_REQUEST,
            payload: {
                error_message: '',
            }
        })
        axios
            .put(URL + `users/${user_id}/boards/${board_id}`, data)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: BOARDS_EDITED,
                        payload: {
                            error_message: '',
                        }
                    });
                } else {
                    dispatch({
                        type: BOARDS_FAIL,
                        payload: {
                            error_message: 'err',
                        }
                    });
                }
            })
            .catch(response => {
                console.log.bind(console)
                dispatch({
                    type: BOARDS_FAIL,
                    payload: {
                        error_message: response
                    }
                });
            })
    }
}
export function deleteBoard(user_id, board_id) {
    return dispatch => {
        dispatch({
            type: BOARDS_REQUEST,
            payload: {
                error_message: '',
            }
        })
        axios
            .delete(URL + `users/${user_id}/boards/${board_id}`)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: BOARDS_DELETED,
                        payload: {
                            error_message: '',
                        }
                    });
                    axios
                        .get(URL + `users/${user_id}/boards`)
                        .then(response => {
                            if (response.status === 200) {
                                dispatch({
                                    type: BOARDS_GET,
                                    payload: {
                                        response_data: response.data
                                    }
                                });
                            }
                        })
                        .catch(response => {
                            console.log.bind(console)
                            dispatch({
                                type: BOARDS_FAIL,
                                payload: {
                                    error_message: response
                                }
                            });
                        })
                } else {
                    dispatch({
                        type: BOARDS_FAIL,
                        payload: {
                            error_message: 'err',
                        }
                    });
                }
            })
            .catch(response => {
                console.log.bind(console)
                dispatch({
                    type: BOARDS_FAIL,
                    payload: {
                        error_message: response
                    }
                });
            })

    }
}
export function addTasks(user_id, board_id) {
    return dispatch => {
        dispatch({
            type: BOARDS_REQUEST,
            payload: {
                error_message: '',
            }
        });
        axios
            .post(URL + `users/${user_id}/boards/${board_id}/tasks`, {
                text: '',
                type: '',
            })
            .then(response => {
                if (response.status === 201) {
                    dispatch({
                        type: BOARDS_TASK_ADDED,
                        payload: {
                            id: board_id,
                            item: response.data,
                        }
                    });
                } else {
                    dispatch({
                        type: BOARDS_FAIL,
                        payload: {
                            error_message: 'err'
                        }
                    });
                }
            })
            .catch(response => {
                console.log.bind(console)
                dispatch({
                    type: BOARDS_FAIL,
                    payload: {
                        error_message: response
                    }
                });
            })
    }
}
export function updateTask(user_id, board_id, id, data) {
    return dispatch => {
        dispatch({
            type: BOARDS_REQUEST,
            payload: {
                error_message: '',
            }
        })
        axios
            .put(URL + `users/${user_id}/boards/${board_id}/tasks/${id}`, data)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: BOARDS_TASK_EDITED,
                        payload: {
                            error_message: '',
                        }
                    });
                } else {
                    dispatch({
                        type: BOARDS_FAIL,
                        payload: {
                            error_message: 'err',
                        }
                    });
                }
            })
            .catch(response => {
                console.log.bind(console)
                dispatch({
                    type: BOARDS_FAIL,
                    payload: {
                        error_message: response
                    }
                });
            })
    }
}
export function deleteTask(user_id, board_id, id) {
      return dispatch => {
        dispatch({
            type: BOARDS_REQUEST,
            payload: {
                error_message: '',
            }
        })
        axios
            .delete(URL + `users/${user_id}/boards/${board_id}/tasks/${id}`)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: BOARDS_TASK_DELETED,
                        payload: {
                            error_message: '',
                        }
                    });
                } else {
                    dispatch({
                        type: BOARDS_FAIL,
                        payload: {
                            error_message: 'err',
                        }
                    });
                }
            })
            .catch(response => {
                console.log.bind(console)
                dispatch({
                    type: BOARDS_FAIL,
                    payload: {
                        error_message: response
                    }
                });
            })
    }
}