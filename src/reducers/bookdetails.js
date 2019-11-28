import { GET_DATA_SUCCESS, SET_SELECTED_DATA } from '../constants/actionTypes'
import { booksInitialState } from './initialState'

export default function (state = booksInitialState, action) {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {
                ...state,
                booksData: action.payload
            }

        case SET_SELECTED_DATA:
            return {
                ...state,
                selectedData: action.payload
            }

        default:
            return state
    }
}
