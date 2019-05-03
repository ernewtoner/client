import { combineReducers } from 'redux';
import * as types from "./actionTypes";

/* Current shape of state:
 {
  user: "David",
  currentChat: id 
  chats: [ { id: 1,
    name: 'Tea Chats',
    users: ['David', 'Nick'] },
    { id: 2,
      name: 'Coffee Chats',
      users: ['David', 'Ryan'] } ]
  messages: [
    { id: 0, chats_id: 1, user: 'David', message: 'ayyyyy', emojis: { David: ':joy:', Nick: ':laughing:' } },
    { id: 1, chats_id: 1, user: 'Nick', message: 'lmao', emojis: {} }
  ]
} */

const messageInitialState = {
  messages: []
};

const userInitialState = {
  user: '',
  currentChat: 0,
  chats: []
};

function messageReducer(state = messageInitialState, action) {  
  console.log("messageReducer");
  console.log(state); 
    switch (action.type) {
    case types.ADD_MESSAGE:
      return {...state, messages: state.messages.concat(action.payload) };
    default:
       return state;
  }
}

function userReducer(state = userInitialState, action) {
  console.log("userReducer");
  console.log(state); 
  switch (action.type) {
     case types.SET_CURRENT_USER:
     return {...state, user: action.payload };
     case types.SET_CURRENT_CHAT:
     return {...state, currentChat: action.payload };
     case types.ADD_CHATROOM:
     return {...state, chats: state.chats.concat(action.payload) };
  default:
     return state;
}
}

  const rootReducer = combineReducers({
     messageReducer, userReducer
  });

  export default rootReducer;