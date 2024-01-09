import React, { useContext } from 'react'
import { useTransactionsContext } from '../../hooks/useTransactionContext'
import ExpenseItem from '../../components/Expense/ExpenseItem/ExpenseItem'

function Expenses() {

    const { transactions, filterTransactions } = useTransactionsContext()

    let expensesContent = <p>No expenses found</p>
    if (filterTransactions.length === 0) {
        return <p style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>We couldn't find any transactions that matched the filter criteria you chose. Please check your choices and try again.</p>
    }

    return (
        <div>
            {filterTransactions.map((item) => {
                let sign = ''
                if (item.type === 'expense') {
                    sign = '-'
                } else {
                    sign = '+'
                }
                return <ExpenseItem
                    key={item.id}
                    date={item.date}
                    name={item.name}
                    category={item.category}
                    amount={item.amount}
                    sign={sign}
                />
            })}


        </div>

    )
}

export default Expenses