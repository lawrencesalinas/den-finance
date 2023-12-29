const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":
            return { user: null }
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}

export default authReducer