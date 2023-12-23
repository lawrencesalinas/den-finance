import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import PaidIcon from '@mui/icons-material/Paid'
import PriceChangeIcon from '@mui/icons-material/PriceChange'
import './sidebar.scss'

function Sidebar() {
    return (
        <div className='sidebar'>
            {/* <div className="profile">

            </div> */}

            <Link to='/dashboard'><HomeIcon /> <span>Dashboard</span> </Link>
            <Link to='/'><FormatListBulletedIcon /> <span>Transactions</span></Link>
            <Link to='/'><PaidIcon /><span>Income</span> </Link>
            <Link to='/'><PriceChangeIcon /><span>Expenses</span></Link>
        </div>
    )
}

export default Sidebar