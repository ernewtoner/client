import * as types from '../constants/actionTypes';

const chatsInitialState = {
    currentChat: null,
    chats: []
};

function chatsReducer(state = chatsInitialState, action) {
    console.log('chatsReducer');
    console.log(state);
    const { payload, type } = action;
    switch (type) {
        case types.GET_CHATS:
            return {
                ...state,
                chats: payload
            };
        case types.SET_CURRENT_CHAT:
            return {
                ...state,
                currentChat: payload
            };
        case types.CREATE_CHAT:
            return {
                ...state,
                chats: state.chats.concat(payload)
            };
        case types.CREATE_USER_IN_CHAT:
            const { cid, users_id, display_name } = payload;
            const user = { 
                display_name,
                id: users_id 
            };
            // Concat user Object {"display_name": "abc", "id": 1, } to the users array of the appropriate Chat object
            const cidIndex = state.chats.findIndex(item => item.id === cid);
            return {
                ...state,
                chats: {
                    ...state.chats,
                    [chats[cidIndex].users]: [...state.chats[cidIndex].users, user]
                }
            };
        default:
            return state;
    }
}

export default chatsReducer;
