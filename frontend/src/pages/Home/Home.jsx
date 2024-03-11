import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss'
import logo from '../../assets/logo.png'
import mobile1 from '../../assets/mobile-1.png'
import mobile2 from '../../assets/mobile-2.png'
import desktop from '../../assets/denfinance-lg.png'
import transactions from '../../assets/transactions-lg.png'
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
            <section className="image-section-1">
                <picture>
                    <source media="(min-width: 768px)" srcSet={desktop} />
                    <img src={mobile1} alt="mobile-graph" />
                </picture>
            </section>
            <section className="cards-section">
                <div className="card">
                    <img src="" alt="" className="card-icon" />
                    <img src="" alt="" className="card-image" />
                    <h3 class="card-title">Stay on top of your upcoming bills</h3>
                    <p class="card-text">Get an effortless breakdown of your finances to see where your money is going and how to improve. We’ll notify you of important events that need your attention so you’re never caught off guard.</p>
                </div>
                <div className="card">
                    <img src="" alt="" className="card-icon" />
                    <img src="" alt="" className="card-image" />
                    <h3 class="card-title">Income Insights</h3>
                    <p class="card-text">Explore your income patterns with Income Insights. Track and analyze your earnings from various sources over time. Use interactive charts to set income goals and strategies for growth. Gain the knowledge to maximize your earnings and secure your financial future.</p>
                </div>
            </section>

            <section className="image-section-2">
                <picture>
                    <source media="(min-width: 768px)" srcSet={transactions} />
                    <img src={mobile2} alt="bar-graph" />
                </picture>
            </section>
        </div>
    )
}



export default Home

