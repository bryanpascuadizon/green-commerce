const initialState = {
    firstIndex: 0,
    lastIndex: 0
}

export const paginationreducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        default:
            return { ...state }
    }
}

