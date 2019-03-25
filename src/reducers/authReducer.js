import {
    SET_CURRENT_USER,
    USER_LOADING,
} from '../actions/authActions';

const isEmpty = require('is-empty');

const intialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
}

export default function authReducer (state = intialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
            }
        case USER_LOADING:
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}