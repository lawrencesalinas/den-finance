import React, { useState } from 'react'
import './expenseHeader.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import AddIcon from '@mui/icons-material/Add'

import SearchIcon from '@mui/icons-material/Search'
import apiUrl from '../../../apiConfig'


const ExpenseHeader = ({ toggleModalHandler, toggleFilterModalHandler }) => {


    return (
        <div className='expenseHeader' >
            <div className="header">
                <h2>Transactions</h2>
                <div className="icons">
                    <div className="icon search" onClick={toggleFilterModalHandler}><span>Search </span><SearchIcon /></div>
                    <div className="icon" onClick={toggleModalHandler}> <AddIcon /></div>

                </div>
            </div>
        </div>
    )
}

export default ExpenseHeader