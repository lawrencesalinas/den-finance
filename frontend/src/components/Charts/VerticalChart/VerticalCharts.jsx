import React, { useContext } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import TransactionContext from '../../../context/transactions/TransactionContext'

export default function VerticalBarCharts({ data }) {

    const { transactions, getMonthAbbreviation, CustomTooltip } = useContext(TransactionContext)

    const aggregateDataByMonth = () => {
        const aggregatedData = {}

        const expenseData = transactions.filter(data => {
            return data?.type === 'expense'
        })
        expenseData.forEach(record => {
            const dateObj = new Date(record.date)
            const month = dateObj.getMonth()
            const key = `${getMonthAbbreviation(month)}`

            if (aggregatedData[key]) {
                aggregatedData[key] += record?.amount
            } else {
                aggregatedData[key] = record?.amount
            }
        })

        const sortedData = Object.entries(aggregatedData).map(([month, amount]) => ({ month, amount })).sort((a, b) => new Date(a.month) - new Date(b.month))

        // 2. Filter out the last three months
        return sortedData.slice(-3)
    }

    const aggregatedData = aggregateDataByMonth(transactions)

    return (
        <ResponsiveContainer width='100%' height={200}>
            <BarChart
                layout="vertical"
                data={aggregatedData}
                margin={{ top: 5, right: 30, left: 0, bottom: 20 }}
            >
                <XAxis type="number" tick={{ fontSize: 10 }} tickFormatter={(tick) => `$${tick}`} />
                <YAxis dataKey="month" type="category" interval={0} tick={{ fontSize: 10 }}
                />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    )
}
