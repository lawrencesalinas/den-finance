import React, { useState } from 'react'
import './expenseDateFilter.scss'

const ExpenseDateFilter = ({ monthChangeFilter, yearChangeFilter, selectedYear, selectedMonth }) => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const yearDropDownChangeHandler = (e) => {
        yearChangeFilter(e.target.value)
    }

    const monthDropDownChangeHandler = (e) => {
        monthChangeFilter(e.target.value)
    }
    const years = ['2020', '2021', '2022', '2023']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return (
        <div className="expense-filter">
            <div className="expense-filter__control">
                <label>Year</label>
                <select value={selectedYear} onChange={yearDropDownChangeHandler}>
                    {years.map((year, index) => (
                        <option key={index} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="expense-filter__control">
                <label>Month</label>
                <select value={selectedMonth} onChange={monthDropDownChangeHandler}>
                    <option value="Year">All Year</option>
                    {months.map((month, index) => (
                        <option key={index} value={index}>
                            {month}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    )
}

export default ExpenseDateFilter