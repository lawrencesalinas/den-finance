import React, { useContext, useState } from 'react'
import './expenseDateFilter.scss'
import TransactionContext from '../../../context/transactions/TransactionContext'
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded'
const ExpenseDateFilter = ({ monthChangeFilter, yearChangeFilter, selectedYear, selectedMonth }) => {

    const { transactions, date, dispatch } = useContext(TransactionContext)

    const yearDropDownChangeHandler = (e) => {
        const newYear = { ...date, year: e.target.value }
        dispatch({ type: 'SET_DATE', payload: newYear })
    }

    const monthDropDownChangeHandler = (e) => {
        const newMonth = { ...date, month: parseFloat(e.target.value) }
        dispatch({ type: 'SET_DATE', payload: newMonth })
    }

    const filterDateHandler = () => {
        const newFilteredItems = transactions.filter((item) => {
            return new Date(item.date).getFullYear() == date.year &&
                (date.month === -1 || new Date(item.date).getMonth() == date.month)
        })
        dispatch({ type: 'FILTER_TRANSACTIONS', payload: newFilteredItems })
    }

    const years = ['2020', '2021', '2022', '2023']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return (
        <div className="expense-filter">
            <div className="expense-filter__control">
                <label>Year</label>
                <select value={date.year} onChange={yearDropDownChangeHandler}>
                    {years.map((year, index) => (
                        <option key={index} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="expense-filter__control">
                <label>Month</label>
                <select value={date.month} onChange={monthDropDownChangeHandler}>
                    <option value="-1">All months</option>
                    {months.map((month, index) => (
                        <option key={index} value={index}>
                            {month}
                        </option>
                    ))}
                </select>
            </div>
            <button id='dateSubmit' fontSize='medium' onClick={filterDateHandler}><span><ArrowRightAltRoundedIcon /></span></button>
        </div>
    )
}

export default ExpenseDateFilter