import * as ActionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    isAuthenticated: false || localStorage.getItem('token'),
    username: localStorage.getItem('username'),
    jwtToken: localStorage.getItem('token'),
    authRedirectPath: '/menu',
    error:false,
    errMsg:'',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN: {
            const { username, token } = action.payload;
            const newState = {
                ...state,
                isAuthenticated: true,
                username,
                jwtToken: token,
            }
            return newState;
        }
        case ActionTypes.REGISTER: {
            const { username, token } = action.payload;
            const newState = {
                ...state,
                isAuthenticated: true,
                username,
                jwtToken: token,
            }
            return newState;
        } case ActionTypes.LOGOUT: {
            const newState = {
                ...state,
                isAuthenticated: false,
                user: null,
                jwtToken: null,
            }
            return newState;
        } case ActionTypes.ERROR:{
            return updateObject(state, {
                error: true,
                errMsg: action.payload.msg
            });
        }
        default: {
            return state;
        }
    }
}

export default reducer;