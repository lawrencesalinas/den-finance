import Expense from '../../components/Expense/Expense'
import './dashBoard.scss'
import ExpenseDateFilter from '../../components/Expense/ExpenseDateFilter/ExpenseDateFilter'
import Charts from '../../components/Charts/Charts'
import Sidebar from '../../components/Sidebar/Sidebar'

const DashBoard = () => {

    return (
        <div className="dashboard-wrapper">
            <Sidebar />
            <div className="DashBoard">
                <ExpenseDateFilter />
                <Charts />
                <Expense />
            </div>
        </div>
    )
}

export default DashBoard