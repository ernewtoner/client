import { combineReducers } from 'redux';
import * as actionTypes from "./actionTypes";

const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {
    console.log(state);
    console.log(state.count);
    switch(action.type) {
      case actionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
      case actionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  }

  const rootReducer = combineReducers({
     counterReducer,
  });

  export default rootReducer;