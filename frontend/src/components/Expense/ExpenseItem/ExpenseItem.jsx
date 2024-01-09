import React, { useState, useTransition } from 'react'
import './expenseItem.scss'
import apiUrl from '../../../apiConfig'


import CreateIcon from '@mui/icons-material/Create'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useTransactionsContext } from '../../../hooks/useTransactionContext'
import { useAuthContext } from '../../../hooks/useAuthContext'


function ExpenseItem({ id, date, name, amount, category, sign }) {
    const { dispatch } = useTransactionsContext()
    const { user } = useAuthContext()

    const dateData = new Date(date)
    const day = String(dateData.getDate()).padStart(2, '0')
    const month = String(dateData.getMonth() + 1).padStart(2, '0') // Months are 0-indexed in JavaScript
    const year = dateData.getFullYear()

    const formattedDate = `${year}-${month}-${day}`

    const handleDeleteClick = async () => {
        const response = await fetch(`${apiUrl}/api/expenses/delete/${id}`, {
            method: "DELETE",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`
            },
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: "DELETE_TRANSACTION", payload: json })
        }
    }

    return (
        <tr className='expenseItem' >
            <td>{formattedDate} </td>
            <td>{name}</td>
            <td style={sign === '+' ? { color: '#007BBA' } : { color: '#FF8042' }}>{sign}${amount}</td>
            <td>{category}</td>
            <td>< CreateIcon sx={{ fontSize: 15 }} /></td>
            <td onClick={handleDeleteClick}><DeleteOutlineIcon sx={{ fontSize: 15 }} /></td>
        </ tr>
    )
}

export default ExpenseItem