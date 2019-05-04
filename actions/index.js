import * as types from "./actionTypes";

// Action Creators
export function setCurrentUser(user) {
    return {
        type: types.SET_CURRENT_USER,
        payload: user
    };
}

export function setCurrentChat(chatId) {
    return {
        type: types.SET_CURRENT_CHAT,
        payload: chatId
    };
}

export function addMessage(id, cid, message, user, isSelf, emojis) {
    return {
        type: types.ADD_MESSAGE,
        payload: { "id": id,
                   "chats_id" : cid,
                   "message": message,
                   "user": user, 
                   "isSelf": isSelf,
                   "emojis": emojis }
    };
}

export function addChatRoom(id, name, users) {
    return {
        type: types.ADD_CHATROOM,
        payload: { "id": id,
                   "name": name, 
                   "users": users }
    };
}