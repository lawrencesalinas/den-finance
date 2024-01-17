import { createContext, useEffect, useReducer, } from "react"
import transactionReducer from "./TransactionReducer"
import apiUrl from "../../utils/apiConfig"
import { fetchTransactions } from "./TransactionAction"
import { useAuthContext } from "../auth/AuthContext"


const TransactionContext = createContext()

export const TransactionProvider = ({ children }) => {

    const initialState = {
        transactions: [],
        filterTransactions: [],
        loading: false,
        date: { year: new Date().getFullYear(), month: new Date().getMonth() }
    }

    const { user } = useAuthContext()

    const [state, dispatch] = useReducer(transactionReducer, initialState)


    useEffect(() => {
        console.log('here')
        const getUserTransactions = async () => {
            try {
                const transactions = await fetchTransactions(user)

                // Dispatch the fetched transactions to your context
                dispatch({ type: 'SET_TRANSACTIONS', payload: transactions })
            } catch (error) {
                console.error('Error fetching user transactions:', error)
            }

        }

        if (user) {
            getUserTransactions()
        }

    }, [user, dispatch])



    const getMonthAbbreviation = (monthNumber) => {
        if (monthNumber === -1) {
            return ''
        } else {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            return months[monthNumber]
        }
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', fontSize: '10px' }}>
                    <p className="label">{`$${parseInt(payload[0].value).toFixed(2)}`}</p>
                </div>
            )
        }
        return null
    }

    return (
        <TransactionContext.Provider
            value={{
                transactions: state.transactions,
                filterTransactions: state.filterTransactions,
                loading: state.loading,
                date: state.date,
                getMonthAbbreviation,
                CustomTooltip,
                dispatch
            }}
        >
            {children}
        </TransactionContext.Provider >
    )
}

export default TransactionContext