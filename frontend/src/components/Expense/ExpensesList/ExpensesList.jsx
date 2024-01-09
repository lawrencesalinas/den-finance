import React, { useContext } from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import TransactionContext from '../../../context/transactions/TransactionContext'

function ExpensesList() {

    const { transactions, filterTransactions } = useContext(TransactionContext)
    let expensesContent = <p>No expenses found</p>

    const sortedTransactions = filterTransactions?.sort((a, b) => {
        // Compare the primary 'date' field
        if (a.date < b.date) {
            return 1
        } else if (a.date > b.date) {
            return -1
        } else {
            // If 'date' fields are equal, compare 'createdAt' field
            let createdAtA = new Date(a.createdAt)
            let createdAtB = new Date(b.createdAt)
            return createdAtB - createdAtA  // newer 'createdAt' first
        }
    })

    return (
        <tbody>
            {filterTransactions && filterTransactions.length > 0 && sortedTransactions.map((item) => {
                let sign = ''
                if (item.type === 'expense') {
                    sign = '-'
                } else {
                    sign = '+'
                }
                return (

                    <ExpenseItem
                        key={item.id}
                        id={item.id}
                        date={item.date}
                        name={item.name}
                        category={item.category}
                        amount={item.amount}
                        sign={sign}
                    />
                )
            })}
        </tbody>
    )
}

export default ExpensesList