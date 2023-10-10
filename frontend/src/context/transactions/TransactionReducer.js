const transactionReducer = (state, action) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                transactions: action.payload,
                filterTransactions: action.payload,
                loading: false
            }
        case 'FILTER_TRANSACTIONS':
            return {
                ...state,
                filterTransactions: action.payload
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'SET_DATE':
            return {
                ...state,
                date: action.payload
            }
        default:
            return state
    }
}

export default transactionReducer