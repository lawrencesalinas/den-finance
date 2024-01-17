import React, { useContext } from 'react'
import PieCharts from './PieChart/PieCharts'
import BarCharts from './BarChart/BarChart'
import VerticalCharts from './VerticalChart/VerticalCharts'
import TransactionContext from '../../context/transactions/TransactionContext'
import './charts.scss'

const Charts = () => {

    const { filterTransactions, transactions, date } = useContext(TransactionContext)

    const totalExpenses = transactions
        .filter(record => record?.type === 'expense')
        .reduce((acc, record) => acc + parseInt(record?.amount), 0).toFixed(2)

    let totalAmount = transactions.reduce((acc, record) => acc + parseInt(record?.amount), 0).toFixed(2)
    totalAmount = totalAmount - totalExpenses

    return (
        <div className="charts">
            <div className="chart">
                <PieCharts />
            </div>
            <div className="chart">
                <BarCharts />
            </div>
            <div className="chart">
                <VerticalCharts data={transactions} />
            </div>
            <div className="total-expenses-tag">
                <div className='expenses red'>
                    <h3>Total Expenses </h3>
                    <h2>$-{totalExpenses}</h2>
                </div>
                <div className='expenses green'>
                    <h3>Total Balance </h3>
                    <h2>${totalAmount}</h2>
                </div>
            </div>

        </ div>
    )
}

export default Charts