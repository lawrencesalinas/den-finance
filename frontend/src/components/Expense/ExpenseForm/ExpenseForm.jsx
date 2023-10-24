import React, { useContext, useState } from 'react'
import './expenseForm.scss'
import TransactionContext from '../../../context/transactions/TransactionContext'

const ExpenseForm = () => {
    const { createTransaction, dispatch } = useContext(TransactionContext)

    const [name, setName] = useState('')
    const [date, setDate] = useState(new Date())
    const [amount, setAmount] = useState('0')
    const [category, setCategory] = useState('meal')
    const [type, setType] = useState('expense')


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

    const submitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            name: name,
            amount: amount,
            date: new Date(date),
            category: category,
            type: type
        }

        createTransaction(expenseData)

        setName('')
        setAmount('')
        setDate(new Date())
        setCategory(type)
        setType('expense')
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
                        <option value="Grocery" >Grocery</option>
                        <option value="Recreation" >Recreation</option>
                        <option value="Vehicle" >Vehicle</option>
                        <option value="Others" >Others</option>
                    </select>
                </div>

                <div className="expenseForm-control">
                    <label>Type</label>
                    <select name="Type" onChange={(e) => {
                        const selectedType = e.target.value
                        setType(selectedType)
                    }}>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                </div>
                <div className="expenseForm-actions">
                    <button type='submit'>Add</button>
                </div>
            </div>


        </form >
    )
}

export default ExpenseForm