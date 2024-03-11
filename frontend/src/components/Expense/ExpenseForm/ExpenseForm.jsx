import React, { useContext, useState } from 'react'
import './expenseForm.scss'
import TransactionContext from '../../../context/transactions/TransactionContext'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { createTransaction } from '../../../context/transactions/TransactionAction'

const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(date)
}

const ExpenseForm = () => {
    const { user } = useAuthContext()
    const { dispatch } = useContext(TransactionContext)

    const [name, setName] = useState('')
    const [date, setDate] = useState(formatDate(new Date(), 'yyyy-MM-dd'))
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('meal')
    const [type, setType] = useState('expense')
    const [message, setMessage] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)


    const nameChangeHandler = (e) => {
        const value = e.target.value
        const isNameValid = value.trim().length >= 4
        const isAmountValid = amount !== ''

        if (!isNameValid) {
            setMessage('Name must be at least 4 characters')
            // setBtnDisabled(true)
        } else if (!isAmountValid) {
            setMessage('Please enter an amount')
            // setBtnDisabled(true)
        } else {
            setMessage(null)
            // setBtnDisabled(true)
        }
        setName(value)
    }

    const dateChnageHandler = (e) => {
        const value = e.target.value
        setDate(value) // value is already in 'YYYY-MM-DD' format
    }

    const amountChangeHandler = (e) => {
        const value = e.target.value
        const isNameValid = name.trim().length >= 4
        const isAmountValid = value !== ''

        setBtnDisabled(!(isNameValid && isAmountValid))

        if (!isAmountValid) {
            setMessage('Please enter an amount')
        } else if (!isNameValid) {
            setMessage('Name must be at least 4 characters')
        } else {
            setMessage(null)
        }

        setAmount(value)
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        const expenseData = {
            name: name,
            amount: amount,
            date: new Date(date),
            category: category,
            type: type
        }

        try {
            const newTransaction = await createTransaction(expenseData, user)

            // Dispatch an action to update the transactions in the state
            dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction })
            // alert('Item successfully added')
        } catch (error) {
            console.log(error)
        }


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
                    <input type='number' onChange={amountChangeHandler} value={amount} />
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
                    <button type='submit' disabled={btnDisabled}>Add</button>
                </div>
            </div>
            {message && <div className='message'>{message}</div>}
        </form >
    )
}

export default ExpenseForm