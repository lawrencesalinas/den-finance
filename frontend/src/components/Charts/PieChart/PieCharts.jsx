import React, { useContext, useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import TransactionContext from "../../../context/transactions/TransactionContext"

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={'middle'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}


export default function PieCharts() {

    const { filterTransactions, CustomTooltip } = useContext(TransactionContext)

    const aggregateData = (transactions) => {
        const aggregatedData = {}

        const expenseData = transactions.filter(data => {
            return data.type === 'expense'
        })

        expenseData.forEach((transaction) => {
            let key = transaction.category

            if (aggregatedData[key]) {
                aggregatedData[key] += transaction.amount
            } else {
                aggregatedData[key] = transaction.amount
            }
        })

        return Object.entries(aggregatedData).map(([category, amount]) => ({ category, amount }))
    }

    const aggregatedData = aggregateData(filterTransactions)



    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#634a6b']

    return (
        <ResponsiveContainer
            width='100%'
            height={400}
        >
            <PieChart>
                <Pie
                    data={aggregatedData}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={130}
                    fill="#8884d8"
                    dataKey="amount"
                    nameKey="category"
                >
                    {aggregatedData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
            </PieChart>
        </ResponsiveContainer >
    )
}
