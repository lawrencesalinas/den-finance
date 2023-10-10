import React, { useState } from 'react'
import './newExpense.scss'

import ExpenseForm from '../ExpenseForm/ExpenseForm'
const NewExpense = ({ addExpenseHandler }) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        addExpenseHandler(expenseData)
    }
    return (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    )
}

export default NewExpense