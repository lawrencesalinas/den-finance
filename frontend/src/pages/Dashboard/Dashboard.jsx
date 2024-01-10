import Expense from '../../components/Expense/Expense'
import './dashBoard.scss'
import { useContext, useEffect, useState } from 'react'
import ExpenseDateFilter from '../../components/Expense/ExpenseDateFilter/ExpenseDateFilter'
import Charts from '../../components/Charts/Charts'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useTransactionsContext } from '../../hooks/useTransactionContext'
import { useAuthContext } from '../../hooks/useAuthContext'


const DashBoard = () => {

    const { fetchTransactions, dispatch } = useTransactionsContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const loadTransactions = async () => {
            const response = await fetchTransactions(user)

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: response
            })
        }

        if (user) {
            loadTransactions()
        }
    }, [user, dispatch])
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