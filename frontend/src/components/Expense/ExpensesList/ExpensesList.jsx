import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

function ExpensesList({ filteredExpenses }) {
    let expensesContent = <p>No expenses found</p>
    if (filteredExpenses.length === 0) {
        return <h2>Found no expenses.</h2>
    }
    // expensesContent = 
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