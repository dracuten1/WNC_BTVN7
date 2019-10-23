import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    isLogin: false,
    user: null,
    jwtToken: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN: {
            const { user, token } = action.payload;
            const newState = {
                ...state,
                isLogin: true,
                user,
                jwtToken: token,
            }
            return newState;
        }
        default: {
            return 0;
        }
    }
}

export default reducer;