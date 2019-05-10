import * as types from '../constants/actionTypes';

const messageInitialState = {
    messages: []
};

function messageReducer(state = messageInitialState, action) {
    console.log('messageReducer');
    console.log(state);
    const { payload, type } = action;

    switch (type) {
        case types.GET_MESSAGES:
            return {
                ...state,
                messages: payload
            };
        case types.CREATE_MESSAGE:
            return {
                ...state,
                messages: state.messages.concat(payload)
            };
        default:
            return state;
    }
}

export default messageReducer;
