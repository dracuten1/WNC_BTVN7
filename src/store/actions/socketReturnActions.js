import * as ActionType from './actionTypes';
import { w3cwebsocket as W3CWebSocket } from "websocket";

let client = null;

export const findOpponent = () => {
    const data = {

    }
    return {
        type: ActionType.FIND_OPPONENT,
        payload: data
    }
}
export const connectServer = () => {
    client = new W3CWebSocket('ws://localhost:8627');
    client.onopen = () => {
        console.log('WebSocket Client Connected');
        return {
            type: ActionType.CONECTED,
            payload: ''
        }
    };
}
