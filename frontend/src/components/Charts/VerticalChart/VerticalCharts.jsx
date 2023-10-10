import React from "react"
import '../charts.scss'
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts"


function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

const combineByCategory = (data) => {
    return data.reduce((acc, curr) => {
        if (acc[curr.category]) {
            acc[curr.category] += curr.amount
        } else {
            acc[curr.category] = curr.amount
        }
        return acc
    }, {})
}


export default function VerticalCharts({ data }) {


    const uniqueCategories = [...new Set(data.map(item => item.category))]


    const processedData = Object.entries(combineByCategory(data)).map(([category, amount]) => ({
        category,
        amount,
    }))
    const IntegerTickFormatter = (tick) => {
        return `$${Math.round(tick)}`
    }

    const categories = [
        { category: 'Meal' },
        { category: 'Shoppimg' },
        { category: 'Recreation' },
        { category: 'Utility' },
        { category: 'Grocery' },
        { category: 'Vehicle' },
        { category: 'Other' },
    ]
    return (
        <ResponsiveContainer
            width='100%'
            height={400}
        >
            <ComposedChart
                className="verticalChart"
                layout="vertical"
                data={processedData}
                margin={{
                    top: 100,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="amount" type="number" tickFormatter={IntegerTickFormatter} domain={[0, 'dataMax + 1']} />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Legend />
                {uniqueCategories.map((category, index) => (
                    <Bar key={category} dataKey="category" fill={getRandomColor()} name={category} />
                    // <Bar dataKey="category" barSize={20} fill="#413ea0" />
                ))}
                {/* <Bar dataKey="category" barSize={20} fill="#413ea0" />
                <Bar dataKey="amount" barSize={20} fill="#413ea0" /> */}
            </ComposedChart >
        </ResponsiveContainer>
    )
}