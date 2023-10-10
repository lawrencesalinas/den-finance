import { dark } from '@mui/material/styles/createPalette'
import Expense from '../../components/Expense/Expense'
import './dashBoard.scss'
import { useContext, useEffect, useState } from 'react'
import ExpenseDateFilter from '../../components/Expense/ExpenseDateFilter/ExpenseDateFilter'
import Charts from '../../components/Charts/Charts'
import axios from 'axios'
import TransactionContext from '../../context/transactions/TransactionContext'
import ExpenseSearchFilter from '../../components/Expense/ExpenseSearchFilter/ExpenseSearchFilter'

const DashBoard = () => {

    const { date, transactions, filterTransactions, fetchTransactions, dispatch } = useContext(TransactionContext)

    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString())
    const [filteredMonth, setFilteredMonth] = useState('Year')

    const addExpenseHandler = (expense) => {
        // setExpenseData((prev) => {
        //     return [expense, ...prev]
        // })
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <div className="DashBoard">
            <ExpenseDateFilter />
            {/* <Charts filteredExpenses={filteredExpenses} /> */}
            <Expense addExpenseHandler={addExpenseHandler} />
        </div>
    )
}

export default DashBoard