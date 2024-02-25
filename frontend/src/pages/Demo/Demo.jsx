import Expense from '../../components/Expense/Expense'
import './dashBoard.scss'
import { useEffect } from 'react'
import ExpenseDateFilter from '../../components/Expense/ExpenseDateFilter/ExpenseDateFilter'
import Charts from '../../components/Charts/Charts'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useTransactionsContext } from '../../hooks/useTransactionContext'
import { useAuthContext } from '../../hooks/useAuthContext'
import { fetchTransactions } from '../../context/transactions/TransactionAction'

const DashBoard = () => {

    const { dispatch } = useTransactionsContext()
    const { user } = useAuthContext()

    // useEffect(() => {
    //     console.log('here')
    //     const getUserTransactions = async () => {
    //         try {
    //             const transactions = await fetchTransactions(user)

    //             // Dispatch the fetched transactions to your context
    //             dispatch({ type: 'SET_TRANSACTIONS', payload: transactions })
    //         } catch (error) {
    //             console.error('Error fetching user transactions:', error)
    //         }

    //     }

    //     if (user) {
    //         getUserTransactions()
    //     }

    // }, [user, dispatch])
    return (
        <div className="dashboard-wrapper">
            <Sidebar />
            <div className="DashBoard">
                <ExpenseDateFilter />
                <Charts />
                <Expense />
            </div>
        </div>
    )
}

export default DashBoard