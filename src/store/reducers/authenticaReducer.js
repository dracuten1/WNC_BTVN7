import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    isLogin: false||localStorage.getItem('token'),
    username: localStorage.getItem('username'),
    jwtToken: localStorage.getItem('token'),
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN: {
            const { username, token } = action.payload;
            const newState = {
                ...state,
                isLogin: true,
                username,
                jwtToken: token,
            }
            return newState;
        }
        case ActionTypes.REGISTER: {
            const { username, token } = action.payload;
            const newState = {
                ...state,
                isLogin: true,
                username,
                jwtToken: token,
            }
            return newState;
        } case ActionTypes.LOGOUT: {
            const newState = {
                ...state,
                isLogin: false,
                user: null,
                jwtToken: null,
            }
            return newState;
        }
        default: {
            return 0;
        }
    }
}

export default reducer;