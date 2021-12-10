//ACTION TYPES
import { LOADER } from "../actions/actionTypes";

const initialState = {
    user: [{
        id: 1,
        userName: 'Bryan',
        passWord: 'qwerty'
    }],
    isProcessing: false
}

const authReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case LOADER:
            return {
                ...state,
                isProcessing: payload
            }
        default:
            return state
    }

}

export default authReducer;

