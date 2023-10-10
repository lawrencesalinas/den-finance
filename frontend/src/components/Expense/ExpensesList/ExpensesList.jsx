import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

function ExpensesList({ filteredExpenses }) {
    let expensesContent = <p>No expenses found</p>
    if (filteredExpenses.length === 0) {
        return <p style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>We couldn't find any transactions that matched the filter criteria you chose. Please check your choices and try again.</p>
    }

    return (
        <div>
            {filteredExpenses.map((item) => (
                <ExpenseItem
                    key={item.id}
                    date={item.date}
                    name={item.name}
                    category={item.category}
                    amount={item.amount}
                />
            ))}
        </div>

    )
}

export default ExpensesList