import * as ActionType from './actionTypes';
import axios from 'axios';

export const register = (user) => {
    return (dispatch) => {
        axios.post('localhost:3000/users/register', user).then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', user.name);
            dispatch({
                type: ActionType.REGISTER,
                payload: res.data
            });
        })
    }
}

export const login = (user) => {
    return (dispatch) => {
        axios.post('localhost:3000/users/login', user).then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', user.name);
            dispatch({
                type: ActionType.LOGIN,
                payload: res.data
            });
        })
    }
}
export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        dispatch({
            type: ActionType.LOGOUT
        });
    }
}