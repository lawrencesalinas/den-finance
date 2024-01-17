const transactionReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TRANSACTIONS':
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
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
                filterTransactions: [...state.filterTransactions, action.payload], // Add to filtered transactions
            }
        case 'DELETE_TRANSACTION':
            return {
                transactions: state.transactions.filter((x) => x.id !== action.payload.id),
                filterTransactions: state.filterTransactions.filter((x) => x.id !== action.payload.id) // Remove from filtered transactions
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