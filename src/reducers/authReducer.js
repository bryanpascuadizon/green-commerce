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
        default:
            return state
    }

}

export default authReducer;

