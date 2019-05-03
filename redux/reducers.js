import { combineReducers } from 'redux';
import * as types from "./actionTypes";
import { identifier } from '@babel/types';

/* Current shape of state:
 {
  user: "David",
  currentChat: id 
  chatRooms: [ { id: 1,
    name: 'Tea Chats',
    users: ['David', 'Nick'] },
    { id: 2,
      name: 'Coffee Chats',
      users: ['David', 'Ryan'] } ]
  messages: [
    { id: 0, user: 'David', message: 'ayyyyy', emojis: { David: ':joy:', Nick: ':laughing:' } },
    { id: 1, user: 'Nick', message: 'lmao', emojis: [] }
  ]
} */

const initialState = {
  user: '',
  currentChat: 0,
  chatRooms: [],
  messages: [],
};

function messageReducer(state = initialState, action) {  
  console.log("messageReducer");
  console.log(state); 
    switch (action.type) {
    case types.ADD_MESSAGE:
      return {...state, messages: state.messages.concat(action.payload) };
    default:
       return state;
  }
}

function userReducer(state = initialState, action) {
  console.log("userReducer");
  console.log(state); 
  switch (action.type) {
     case types.SET_CURRENT_USER:
     return {...state, user: action.payload };
     case types.SET_CURRENT_CHAT:
     return {...state, currentChat: action.payload };
     case types.ADD_CHATROOM:
     return {...state, chatRooms: state.chatRooms.concat(action.payload) };
  default:
     return state;
}
}

  const rootReducer = combineReducers({
     messageReducer, userReducer
  });

  export default rootReducer;