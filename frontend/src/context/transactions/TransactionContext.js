import { createContext, useReducer, } from "react"
import transactionReducer from "./TransactionReducer"
import apiUrl from "../../apiConfig"

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
            const response = await fetch(`${apiUrl}/api/expenses/`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()
            const convertedData = data.map(item => ({
                ...item,
                amount: Number(item.amount)
            }))

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: convertedData
            })
        } catch (error) {
            console.error('Error fetching transactions:', error)
        }
    }

    const createTransaction = async (data) => {
        try {
            // setLoading(true)

            const response = await fetch('http://localhost:8000/api/create/', {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error('Failed to create transaction.')
            }

            const responseData = await response.json()
            // Optional: If you want to update the state after adding a transaction, you can dispatch an action here.
            console.log(responseData)

            // dispatch({
            //     type: 'ADD_TRANSACTION',
            //     payload: responseData // or result.newTransaction if your API returns the new transaction
            // })

            fetchTransactions()

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    const setLoading = () => dispatch({ tpye: 'SET_LOADING', })


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
                fetchTransactions,
                createTransaction,
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