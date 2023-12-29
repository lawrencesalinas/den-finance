import './header.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'


const Header = () => {
    const [open, setOpen] = useState(true)
    const [user, setUser] = useState(true)
    return (
        <header className="header-nav">
            {user ? (
                <div className="logo-container">
                    <Link to='/dashboard' ><img src={logo} alt="" /></Link>
                </div>
            ) : <div className="logo-container">
                <Link to='/' ><img src={logo} alt="" /></Link>
            </div>}

            <ul>
                {user ? (
                    <>
                        <li>
                            <Link className='login' to='/profile'><PersonOutlineIcon /> <span className='login-text'>Login</span></Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link className='login' to='/login'><PersonOutlineIcon /> <span className='login-text'>Login</span></Link>
                        </li>
                    </>)
                }

            </ul>
        </header>
    )
}

export default Header