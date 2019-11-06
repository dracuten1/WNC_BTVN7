import * as ActionTypes from './actionTypes';

export const sqaureSelected = (payLoadsData) => {
    return {
        type: ActionTypes.CHOSE_POSITION,
        square: payLoadsData,
    };
};

export const machineChose = () => {
    return {
        type: ActionTypes.MACHINE_CHOSE,
    };
};
export const initGame = (payLoadsdata) => {
    return {
        type: ActionTypes.INIT_GAME,
        payLoads: payLoadsdata
    };
};
export const setStep = (data) => {
    return {
        type: ActionTypes.SET_STEP,
        step:data
    };
};