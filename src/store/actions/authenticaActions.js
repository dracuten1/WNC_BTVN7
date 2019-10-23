import * as ActionType from './actionTypes';

export const register = (user) => {
    return (dispatch) => {
        setTimeout(() => {
            console.log('Register successful',user);
            dispatch({
                type: ActionType.REGISTER,
                payload: user
            });
        }, 2000);
    }
}

export const login = (user) => {
    return (dispatch) => {
        setTimeout(() => {
            console.log('Login successful',user);
            dispatch({
                type: ActionType.LOGIN,
                payload: user
            });
        }, 2000);
    }
}
export const logout = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: ActionType.LOGOUT
            });
        }, 2000);
    }
}