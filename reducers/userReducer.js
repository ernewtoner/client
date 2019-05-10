import * as types from '../constants/actionTypes';

const userInitialState = {
    currentUser: {}
};

function userReducer(state = userInitialState, action) {
    console.log('userReducer');
    console.log(state);
    const { payload, type } = action;
    switch (type) {
        case types.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            };
        default:
            return state;
    }
}

export default userReducer;
