import React from 'react'
import PieCharts from './PieChart/PieCharts'
import BarCharts from './BarChart/BarChart'
import VerticalCharts from './VerticalChart/VerticalCharts'

const Charts = ({ filteredExpenses }) => {
    return (
        <div className="charts">
            <div className="chart">
                <PieCharts data={filteredExpenses} />
            </div>
            <div className="chart">
                <BarCharts data={filteredExpenses} />
            </div>
            <div className="chart">
                <VerticalCharts data={filteredExpenses} />
            </div>
        </ div>
    )
}

export default Charts