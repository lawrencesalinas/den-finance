import React, { useState } from 'react'
import './expenseHeader.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import AddIcon from '@mui/icons-material/Add'
import CreateIcon from '@mui/icons-material/Create'


const ExpenseHeader = ({ toggleModalHandler }) => {
    const addExpenseHandler = () => {
    }

    return (
        <div className='expenseHeader' >
            <div className="header">
                <h2>Transactions</h2>
                <div className="icons">
                    <div className="icon" onClick={toggleModalHandler}>Search</div>
                    <div className="icon" onClick={toggleModalHandler}> <AddIcon /></div>
                    <div className="icon"><CreateIcon /></div>
                    <div className="icon"><DeleteOutlineIcon /></div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseHeader