import React from 'react'
import './expenseItem.scss'

function ExpenseItem({ date, name, amount, category }) {
    const dateData = new Date(date)
    const day = String(dateData.getDate()).padStart(2, '0')
    const month = String(dateData.getMonth() + 1).padStart(2, '0') // Months are 0-indexed in JavaScript
    const year = dateData.getFullYear()



    const formattedDate = `${year}-${month}-${day}`
    return (
        < ul className='expenseItem' >
            <li>{formattedDate} </li>
            <li>{name}</li>
            <li>${amount}</li>
            <li>{category}</li>
        </ ul>
    )
}

export default ExpenseItem