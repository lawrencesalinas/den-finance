import React, { useState } from 'react'
import './expenseForm.scss'

const ExpenseForm = ({ onSaveExpenseData }) => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')


    const nameChangeHandler = (e) => {
        const value = e.target.value
        setName(value)
    }

    const dateChnageHandler = (e) => {
        const value = e.target.value
        setDate(value)
    }
    const amountChangeHandler = (e) => {
        const value = e.target.value
        setAmount(value)
    }
    const categoryChangeHandler = (e) => {
        const value = e.target.value
        setCategory(value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const expenseData = {
            name: name,
            amount: amount,
            date: new Date(date),
            category: category
        }

        onSaveExpenseData(expenseData)

        setName('')
        setAmount('')
        setDate('')
        setCategory('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="expenseForm">
                <div className="expenseForm-control">
                    <label>Date</label>
                    <input type='date' onChange={dateChnageHandler} value={date} min='2019-01-01' />
                </div>
                <div className="expenseForm-control">
                    <label>Name</label>
                    <input onChange={nameChangeHandler} value={name} type='text' />
                </div>
                <div className="expenseForm-control">
                    <label>Amount</label>
                    <input type='text' onChange={amountChangeHandler} value={amount} />
                </div>
                <div className="expenseForm-control">
                    <label>Category</label>


                    <select name="Category" onChange={(e) => {
                        const selectedCategory = e.target.value
                        setCategory(selectedCategory)
                    }}>
                        <option value="Meal">Meal</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Utility">Utility</option>
                        <option value="Grocery" selected>Grocery</option>
                        <option value="Recreation" selected>Recreation</option>
                        <option value="Vehicle" selected>Vehicle</option>
                        <option value="Others" selected>Others</option>
                    </select>
                    {/* <input type='text' onChange={categoryChangeHandler} value={category} /> */}
                </div>
                <div className="expenseForm-actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm