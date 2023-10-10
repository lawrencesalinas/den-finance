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

    // const dummyExpense = [
    //     {
    //         id: 1,
    //         date: new Date(2023, 8, 8),
    //         name: 'Target',
    //         amount: 350.32,
    //         category: 'Shopping',
    //     },
    //     {
    //         id: 2,
    //         date: new Date(2023, 8, 8),
    //         name: 'Target',
    //         amount: 400.32,
    //         category: 'Meal',
    //     },
    //     {
    //         id: 3,
    //         date: new Date(2023, 5, 12),
    //         name: 'Target',
    //         amount: 135.32,
    //         category: 'Grocery',
    //     },
    //     {
    //         id: 4,
    //         date: new Date(2021, 7, 12),
    //         name: 'Walmart',
    //         amount: 35.32,
    //         category: 'Utility',
    //     },
    //     {
    //         id: 5,
    //         date: new Date(2021, 8, 12),
    //         name: 'Walmart',
    //         amount: 435.32,
    //         category: 'Other',
    //     },
    //     {
    //         id: 6,
    //         date: new Date(2021, 9, 12),
    //         name: 'Walmart',
    //         amount: 235.32,
    //         category: 'Recreation',
    //     },
    //     {
    //         id: 7,
    //         date: new Date(2021, 5, 12),
    //         name: 'Walmart',
    //         amount: 335.32,
    //         category: 'Vehicle',
    //     },
    //     {
    //         id: 8,
    //         date: new Date(2021, 5, 8),
    //         name: 'Walmart',
    //         amount: 335.32,
    //         category: 'School',
    //     },
    // ]


    const { transactions, filterTransactions, fetchTransactions, dispatch } = useContext(TransactionContext)
    console.log(filterTransactions, 'fi,tered')
    // const [expenseData, setExpenseData] = useState(dummyExpense)
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString())
    const [filteredMonth, setFilteredMonth] = useState('Year')

    // useEffect(() => {
    //     fetchTransactions()
    // }, [])



    const yearFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const monthFilterHandler = (selectedMonth) => {
        setFilteredMonth(selectedMonth)
    }

    const addExpenseHandler = (expense) => {
        // setExpenseData((prev) => {
        //     return [expense, ...prev]
        // })
    }

    // console.log(expenseData)
    // console.log(filteredYear)
    // console.log(filteredMonth)

    // const filteredExpenses = expenseData.filter(expense => {
    //     console.log(filteredMonth)
    //     console.log(expense.date.getMonth())
    //     if (filteredMonth === 'Year') {
    //         return expenseData
    //     } else {
    //         return expense.date.getFullYear().toString() === filteredYear.toString() && expense.date.getMonth().toString() === filteredMonth.toString()
    //     }
    // })

    return (
        <div className="DashBoard">
            <ExpenseDateFilter
                selectedYear={filteredYear}
                selectedMonth={filteredMonth}
                monthChangeFilter={monthFilterHandler}
                yearChangeFilter={yearFilterHandler} onChangeMonth={monthFilterHandler} />
            {/* <Charts filteredExpenses={filteredExpenses} /> */}
            <Expense addExpenseHandler={addExpenseHandler} />
        </div>
    )
}

export default DashBoard