import { LOADER } from "./actionTypes";

export const showProcessing = (action) => (dispatch) => {
    dispatch({
        type: LOADER,
        payload: action
    })
}