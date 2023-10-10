import React, { useEffect, useState, useContext } from 'react'
import './expenseSearchFilter.scss'
import TransactionContext from '../../../context/transactions/TransactionContext'

const ExpenseSearchFilter = () => {
    const { transactions, filterTransactions, fetchTransactions, dispatch } = useContext(TransactionContext)
    // State for filters
    const [filters, setFilters] = useState({ min: '', max: '', name: '', type: 'all', category: '', amount: '' })
    // State for filtered items


    const { min, max, name, type, category } = filters
    // Handle filter change
    const handleFilterChange = (e) => {
        const { name, value } = e.target
        setFilters(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    // console.log(transactions)
    const filterItems = () => {
        const minVal = filters.min ? parseInt(filters.min, 10) : -Infinity
        const maxVal = filters.max ? parseInt(filters.max, 10) : Infinity

        const newFilteredItems = transactions.filter((item) => {
            return item.amount >= minVal &&
                item.amount <= maxVal &&
                (category === '' || item.category === category) && // filter for category
                (type === 'all' ? (item.type === 'expense' || item.type === 'income') : item.type === type) &&
                item.name.toLowerCase().includes(name.toLowerCase())
        })
        dispatch({ type: 'FILTER_TRANSACTIONS', payload: newFilteredItems })
    }

    const sumbitHandler = (e) => {
        e.preventDefault()
        filterItems()
    }

    useEffect(() => {
        fetchTransactions()
    }, [])



    return (
        <main className="expenseSearchFilter">
            <p>Filter by any of these transaction details.</p>
            <form onSubmit={sumbitHandler}>
                <div className="expense-search-form-group">
                    <label>Name</label>
                    <input type="text" value={name} name='name' placeholder='Search here' onChange={handleFilterChange} />
                </div>
                <div className="expense-search-form-group">
                    <label>Type</label>
                    <select name="type" value={type} onChange={handleFilterChange}>
                        <option value="all">All Transactions</option>
                        <option value="expense">Expenses</option>
                        <option value="income">Incomes</option>
                    </select>
                </div>
                <div className="expense-search-form-group">
                    <label>Amount</label>
                    <div className='expense-search-form-group'>
                        <div className="amount-form-group">
                            <label htmlFor="">From</label>
                            <input
                                type="number"
                                name="min"
                                value={min}
                                onChange={handleFilterChange}
                            />
                        </div>
                        <div className="amount-form-group">
                            <label>to:</label>
                            <input
                                type="number"
                                name="max"
                                value={max}
                                onChange={handleFilterChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="expense-search-form-group">
                    <label>Category</label>
                    <select name="category" value={category} onChange={handleFilterChange}>
                        <option value="">Select</option>
                        <option value="meal">Meal</option>
                        <option value="pets">Pets</option>
                        <option value="utility">Utility</option>
                        <option value="recreation">Recreation</option>
                        <option value="grocery">Grocery</option>
                        <option value="vehicle">Vehicle</option>
                        <option value="shopping">Shopping</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button id='cancel'>Cancel</button>
                <button id='submit' type='submit'>Search</button>
            </form>
        </main>
    )
}

export default ExpenseSearchFilter