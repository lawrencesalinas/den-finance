import React, { useContext, useState } from 'react'
import './expenseForm.scss'
import TransactionContext from '../../../context/transactions/TransactionContext'
import { useAuthContext } from '../../../hooks/useAuthContext'


const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(date)
}


const ExpenseForm = () => {
    const { user } = useAuthContext()
    const { createTransaction, dispatch } = useContext(TransactionContext)

    const [name, setName] = useState('')
    const [date, setDate] = useState(formatDate(new Date(), 'yyyy-MM-dd'))
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('meal')
    const [type, setType] = useState('expense')
    const [message, setMessage] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)


    const nameChangeHandler = (e) => {
        const value = e.target.value
        if (value === '') {
            setMessage(null)
            setBtnDisabled(true)
        } else if (value.trim().length < 3) {
            setMessage('Name must be at least 4 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(true)
        }
        setName(value)
        if (name !== '' && amount !== '') {
            setBtnDisabled(false)
        } else {
            setBtnDisabled(true)
        }
    }

    const dateChnageHandler = (e) => {
        const value = e.target.value
        setDate(value) // value is already in 'YYYY-MM-DD' format
    }
    const amountChangeHandler = (e) => {
        const value = e.target.value
        if (value === '') {
            setMessage('Please enter an amount')
            setBtnDisabled(true)
        } else {
            setMessage(null)
        }
        setAmount(value)
        if (name !== '' && amount !== '') {
            setBtnDisabled(false)
        } else if (name === '' || amount === '') {
            setBtnDisabled(true)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if (name.trim().length >= 4) {
            const expenseData = {
                name: name,
                amount: amount,
                date: new Date(date),
                category: category,
                type: type
            }
            createTransaction(expenseData, user)
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