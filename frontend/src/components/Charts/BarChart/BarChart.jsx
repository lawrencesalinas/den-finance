import React, { useContext } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import TransactionContext from '../../../context/transactions/TransactionContext'

export default function BarCharts({ filterType }) {

    const { filterTransactions, date, getMonthAbbreviation, CustomTooltip } = useContext(TransactionContext)

    const aggregateData = (data) => {

        const expenseData = data.filter(data => {
            return data.type === 'expense'
        })

        const aggregatedData = {}

        expenseData.forEach(record => {
            let key = record.date

            if (date.month === -1) {
                const dateObj = new Date(record.date)
                const month = getMonthAbbreviation(dateObj.getMonth())  // Months are 0-indexed
                key = `${month}`
            } else {
                const dateObj = new Date(record.date)
                const date = dateObj.getDate()
                key = `${date}`
            }

            if (aggregatedData[key]) {
                aggregatedData[key] += record.amount
            } else {
                aggregatedData[key] = record.amount
            }
        })

        return Object.entries(aggregatedData).map(([date, amount]) => ({ date, amount }))
    }

    const aggregatedData = aggregateData(filterTransactions, filterType)

    // Step 2: Sort aggregated data by date or month
    aggregatedData.sort((a, b) => new Date(a.date) - new Date(b.date))



    return (
        <ResponsiveContainer width='100%' height={400}>
            <BarChart className="barChart" data={aggregatedData} margin={{ top: 20, right: 20, left: 0 }}>
                <YAxis
                    tick={{ fontSize: 10 }}
                    tickFormatter={(tick) => `$${tick}`} />
                <XAxis
                    tick={{ fontSize: 10 }}
                    dataKey='date' interval={0} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey='amount' fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    )
}
