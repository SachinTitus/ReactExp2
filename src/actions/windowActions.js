
export function setWindowResize(dimensions) {
    return{
        type: "UPDATE_WINDOW_DIMENSIONS",
        payload: dimensions
    }
}