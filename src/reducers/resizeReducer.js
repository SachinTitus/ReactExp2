const resizeReducer = (state = {
    windowWidth: 0,
    windowHeight: 0
}, action) => {
    switch (action.type) {
        case "UPDATE_WINDOW_DIMENSIONS":
            state = {
                ...state,
                windowHeight: action.value
            };
            break;
    }
    return state;
};
export default resizeReducer;