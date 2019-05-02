import * as types from "./actionTypes";

// Action Creators
export const increment = () => ({ type: types.INCREMENT });
export const decrement = () => ({ type: types.DECREMENT });

/* // @NOTE Fake data for now
const messages = [
    {
        id: 1,
        message: "hi i'm testing this app",
        user: 'michele',
        isSelf: true
    },
    {
        id: 2,
        message: 'cool it is working!',
        user: 'sonam',
        isSelf: false   
    }
];*/

let nextMessageId = 0
const nextUserId = 0

export function setCurrentUserID(userID) {
    return {
        type: types.SET_CURRENT_USERID,
        payload: userID,
    };
}

export function addMessage(message) {
    return {
        type: types.ADD_MESSAGE,
        payload: message,
    };
}

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
})

export const messageReceived = (message, user) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  user
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})