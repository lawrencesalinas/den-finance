import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss'
import logo from '../../assets/logo.png'

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <img src={logo} alt="" />
                <h1>Your personal finance tracking solution.</h1>
                <p>Welcome to DenFinance, the ultimate solution for mastering your finances.
                    Our app makes tracking expenses, budgeting, and financial planning both easy and efficient.</p>
                <Link to='/register'>Sign up now</Link>
            </div>
        </div>
    )
}

export default Home

