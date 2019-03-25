import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

export const GET_ERRORS = "GET_ERRORS";
export const USER_LOADING = "USER_LOADING";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

// Set logged in user
function setCurrentUser(decoded) {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

// User loading
// function setUserLoading () {
//     return {
//         type: USER_LOADING,
//     }
// }

function getErrors (err) {
    return {
        type: GET_ERRORS,
        payload: err.response.data,
    }
}

// Register user
export function registerUser (userData, history) {
    return (dispatch) => {
        return axios
            .post("http://localhost:5000/api/users/register", userData)
            .then((res) => history.push('/login')) // re-direct to login on successful register
            .catch((err) => dispatch(getErrors(err)));
    }
}

// Login - get user token
export function loginUser (userData) {
    return (dispatch) => {
        axios
            .post("http://localhost:5000/api/users/login", userData)
            .then((res) => {
                // save to localStorage
                // Set token to localStorage
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                // Set token to Auth header
                setAuthToken(token);
                // Decode token to get user data
                const decoded = jwt_decode(token);
                // set current user
                dispatch(setCurrentUser(decoded));
            })
            .catch((err) => dispatch(getErrors(err)));
    }
}

// Log user out
export function logoutUser () {
    return (dispatch) => {
        // Remove token from local storage
        localStorage.removeItem("jwtToken");
        // Remove auth header for future requests
        setAuthToken(false);
        // Set current user to empty object {} which will set isAuthenticated to false
        dispatch(setCurrentUser({}));
    }
}