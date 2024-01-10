import React, { useContext, useState } from 'react'
import './expenseDateFilter.scss'
import TransactionContext from '../../../context/transactions/TransactionContext'
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded'
const ExpenseDateFilter = () => {

    const { transactions, date, dispatch, getMonthAbbreviation } = useContext(TransactionContext)

    const [displayDate, setDisplayDate] = useState(`${getMonthAbbreviation(date?.month)} ${date?.year}`)

    const yearDropDownChangeHandler = (e) => {
        const newYear = { ...date, year: e.target.value }
        dispatch({ type: 'SET_DATE', payload: newYear })

        console.log(date.year, 'year')
        console.log(newYear, 'New Year')
        console.log(date.month, 'month')
        const newFilteredItems = transactions.filter((item) => {

            return new Date(item.date).getFullYear() == newYear.year &&
                (date.month === -1 || new Date(item.date).getMonth() == newYear.year)
        })

        setDisplayDate(`${getMonthAbbreviation(date.month)} ${date.year}`)
        dispatch({ type: 'FILTER_TRANSACTIONS', payload: newFilteredItems })
    }

    const monthDropDownChangeHandler = (e) => {
        const newMonth = { ...date, month: parseFloat(e.target.value) }
        dispatch({ type: 'SET_DATE', payload: newMonth })

        const newFilteredItems = transactions.filter((item) => {
            return new Date(item.date).getFullYear() == date.year &&
                (newMonth.month === -1 || new Date(item.date).getMonth() == newMonth.month)
        })

        setDisplayDate(`${getMonthAbbreviation(date.month)} ${date.year}`)
        dispatch({ type: 'FILTER_TRANSACTIONS', payload: newFilteredItems })
    }

    const filterDateHandler = () => {
        const newFilteredItems = transactions.filter((item) => {
            return new Date(item.date).getFullYear() == date.year &&
                (date.month === -1 || new Date(item.date).getMonth() == date.month)
        })
        setDisplayDate(`${getMonthAbbreviation(date.month)} ${date.year}`)
        dispatch({ type: 'FILTER_TRANSACTIONS', payload: newFilteredItems })
    }

    const years = ['2020', '2021', '2022', '2023', '2024']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return (
        <div className="expense-filter">
            <div className="expense-filter__control">
                <label>Year</label>
                <select value={date?.year} onChange={yearDropDownChangeHandler}>
                    {years.map((year, index) => (
                        <option key={index} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="expense-filter__control">
                <label>Month</label>
                <select value={date?.month} onChange={monthDropDownChangeHandler}>
                    <option value="-1">All months</option>
                    {months.map((month, index) => (
                        <option key={index} value={index}>
                            {month}
                        </option>
                    ))}
                </select>
            </div>
            {/* <button id='dateSubmit' onClick={filterDateHandler}><span><ArrowRightAltRoundedIcon /></span></button> */}
            <h2>{displayDate}</h2>
        </div>
    )
}

export default ExpenseDateFilter