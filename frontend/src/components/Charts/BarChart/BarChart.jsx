import { BarChart, Bar, ResponsiveContainer, YAxis, Legend, XAxis, CartesianGrid, Tooltip } from "recharts"

const aggregateDataByMonth = (data) => {

    const months = [
        { name: 'Jan', amount: 0 },
        { name: 'Feb', amount: 0 },
        { name: 'Mar', amount: 0 },
        { name: 'Apr', amount: 0 },
        { name: 'May', amount: 0 },
        { name: 'Jun', amount: 0 },
        { name: 'Jul', amount: 0 },
        { name: 'Aug', amount: 0 },
        { name: 'Sep', amount: 0 },
        { name: 'Oct', amount: 0 },
        { name: 'Nov', amount: 0 },
        { name: 'Dec', amount: 0 },
    ]

    data.forEach(item => {
        const monthIndex = item.date.getMonth() // getMonth returns month index from 0 to 11
        months[monthIndex].amount += item.amount
    })
    return months
}

export default function BarCharts({ data }) {

    const aggregateData = aggregateDataByMonth(data)

    return (
        <ResponsiveContainer
            width='100%'
            height={400}
        >
            <BarChart
                className="barChart"
                data={aggregateData}
            >
                <YAxis tickFormatter={(tick) => `$${tick}`} />
                <XAxis
                    dataKey='name'
                    interval={0}
                />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar
                    dataKey='amount' fill="#8884d8"
                />

            </BarChart >
        </ResponsiveContainer >
    )
}