import { createContext, useReducer, } from "react"
import transactionReducer from "./TransactionReducer"

const TransactionContext = createContext()

export const TransactionProvider = ({ children }) => {
    const initialState = {
        transactions: [],
        filterTransactions: [],
        loading: false,
        date: { year: new Date().getFullYear(), month: new Date().getMonth() }
    }

    const [state, dispatch] = useReducer(transactionReducer, initialState)

    const fetchTransactions = async () => {
        try {
            setLoading()
            const response = await fetch(`/api/expenses/`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: data
            })
        } catch (error) {
            console.error('Error fetching transactions:', error)
        }
    }


    const setLoading = () => dispatch({ tpye: 'SET_LOADING', })

    return (
        <TransactionContext.Provider
            value={{
                transactions: state.transactions,
                filterTransactions: state.filterTransactions,
                loading: state.loading,
                date: state.date,
                fetchTransactions,
                dispatch
            }}
        >
            {children}
        </TransactionContext.Provider >
    )
}

export default TransactionContext