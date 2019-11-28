import axios from 'axios'
import {
    GET_DATA_SUCCESS,
    SET_SELECTED_DATA
} from '../constants/actionTypes'
import { BASE_URL } from '../config'

export function getBooksSuccess(payload) {
    return { type: GET_DATA_SUCCESS, payload }
}

export function getBooksData() {
    return dispatch => {

        return axios
            .get(BASE_URL)
            .then(response => {
                if (response && response.data) {
                    dispatch(getBooksSuccess(response.data.items))
                }
            })
            .catch(error => { })
    }
}


export function setSelectedData(payload) {
    return { type: SET_SELECTED_DATA, payload }
}
