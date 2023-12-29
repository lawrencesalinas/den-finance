import Expense from '../../components/Expense/Expense'
import './dashBoard.scss'
import { useContext, useEffect, useState } from 'react'
import ExpenseDateFilter from '../../components/Expense/ExpenseDateFilter/ExpenseDateFilter'
import Charts from '../../components/Charts/Charts'
import TransactionContext from '../../context/transactions/TransactionContext'
import Sidebar from '../../components/Sidebar/Sidebar'


const DashBoard = () => {

    const { fetchTransactions, dispatch } = useContext(TransactionContext)

    useEffect(() => {
        const loadTransactions = async () => {
            await fetchTransactions()
        }
        loadTransactions()
    }, [])
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