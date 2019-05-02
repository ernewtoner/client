import { combineReducers } from 'redux';
import * as types from "./actionTypes";
//import { fromJS } from 'immutable';

/*const initialState = fromJS({
  count: 0/*,
  userID: 0,
  messages: [],
});*/

const initialState = {
  count: 0,
  userID: 0,
  messages: [],
};

function counterReducer(state = initialState, action) {
    console.log(state);
    console.log(state.count);
    switch(action.type) {
      case types.INCREMENT:
      return { ...state, count: state.count + 1 };
      case types.DECREMENT:
      return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  }

function messageReducer(state = initialState, action) {
    console.log(state);   
    switch (action.type) {
    case types.ADD_MESSAGE:
      return {...state, messages: state.messages.concat(action.payload) };
    default:
       return state;
  }
}

function userReducer(state = initialState, action) {
  console.log(state); 
  switch (action.type) {
    case types.SET_CURRENT_USERID:
     return {...state, userID: action.payload };
  default:
     return state;
}
}

  const rootReducer = combineReducers({
     counterReducer, messageReducer, userReducer
  });

  export default rootReducer;