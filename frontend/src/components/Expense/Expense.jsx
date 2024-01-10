import React, { useContext, useState } from 'react'
import './expense.scss'
import ExpenseHeader from './ExpenseHeader/ExpenseHeader'
import NewExpense from './NewExpense/NewExpense'
import ExpensesList from './ExpensesList/ExpensesList'
import ExpenseSearchFilter from './ExpenseSearchFilter/ExpenseSearchFilter'
import TransactionContext from '../../context/transactions/TransactionContext'

const Expense = ({ addExpenseHandler, filteredExpenses, }) => {

    const { transactions, filterTransactions } = useContext(TransactionContext)

    const [showAddExpenseModal, setAddExpenseModal] = useState(false)
    const [showFilterModal, setShowFilterModal] = useState()

    const toggleModalHandler = () => {
        setAddExpenseModal((prev => !prev))
    }

    const toggleFilterHandler = () => {
        setShowFilterModal((prev => !prev))
    }

    return (
        <div className='expense'>
            <ExpenseHeader toggleModalHandler={toggleModalHandler} toggleFilterModalHandler={toggleFilterHandler} />
            {showAddExpenseModal && (
                <NewExpense addExpenseHandler={addExpenseHandler} />
            )}
            {showFilterModal && (
                <ExpenseSearchFilter toggleFilterModal={setShowFilterModal} />
            )}

            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <ExpensesList />
            </table>
        </div>
    )
}

export default Expense