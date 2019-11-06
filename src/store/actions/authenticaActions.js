import * as ActionType from './actionTypes';
import axios from '../../axios-backend';

export const register = (user) => {
    return (dispatch) => {
        axios.post('/auth/register', user).then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', user.id);
            dispatch({
                type: ActionType.REGISTER,
                payload: res.data
            });
        })
    }
}

export const login = (user) => {
    return (dispatch) => {
        axios.post('/auth/login', user).then(res => {
            if (res.data.err) {
                dispatch({
                    type: ActionType.ERROR,
                    payload: res.data
                });
            } else {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('username', res.data.user.id);
                dispatch({
                    type: ActionType.LOGIN,
                    payload: res.data
                });
            }
        })
    }
}
export const googleLogin = (response) => {
    console.log('Hello');
    console.log(response);
    const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
    const options = {
        method: 'POST',
        body: tokenBlob,
        cache: 'default'
    };
    return (dispatch) => {
        fetch('/auth/google', options).then(r => {
            r.json().then(data => {   
                console.log(data);
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.id);             
                dispatch({
                    type: ActionType.LOGIN,
                    payload: data
                })
            });
        })
    }
};
export const facebookLogin = (response) => {
    console.log('Hello');
    console.log(response);
    const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
    const options = {
        method: 'POST',
        body: tokenBlob,
        cache: 'default'
    };
    return (dispatch) => {
        fetch('/auth/facebook', options).then(r => {
            r.json().then(data => {   
                console.log(data);
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.id);             
                dispatch({
                    type: ActionType.LOGIN,
                    payload: data
                })
            });
        })
    }
};
export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        dispatch({
            type: ActionType.LOGOUT
        });
    }
}