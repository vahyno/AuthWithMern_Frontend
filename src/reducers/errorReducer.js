import { GET_ERRORS } from '../actions/authActions';

export default function errorReducer (state={}, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
};

