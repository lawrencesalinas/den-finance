import React, { useContext, useEffect, useState } from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import TransactionContext from '../../../context/transactions/TransactionContext'

function ExpensesList() {

    const { filterTransactions } = useContext(TransactionContext)
    const [sortedTransactions, setSortedTransactions] = useState([])
    let expensesContent = <p>No expenses found</p>

    useEffect(() => {
        // Sort transactions by date in ascending order
        const sorted = [...filterTransactions].sort((a, b) => {
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
        setSortedTransactions(sorted)
    }, [filterTransactions])


    // const sortedTransactions = filterTransactions?.sort((a, b) => 

    return (
        <tbody>
            {filterTransactions && filterTransactions.length > 0 && sortedTransactions.map((item, index) => {
                let sign = ''
                if (item?.type === 'expense') {
                    sign = '-'
                } else {
                    sign = '+'
                }
                return (

                    <ExpenseItem
                        key={index}
                        id={item?.id}
                        date={item?.date}
                        name={item?.name}
                        category={item?.category}
                        amount={item?.amount}
                        sign={sign}
                    />
                )
            })}
        </tbody>
    )
}

export default ExpensesList