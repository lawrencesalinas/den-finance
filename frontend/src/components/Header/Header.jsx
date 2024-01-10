import './header.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import logo from '../../assets/logo.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { useAuthContext } from '../../hooks/useAuthContext'



const Header = () => {
    const [open, setOpen] = useState(true)

    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }
    return (
        <header className="header-nav">
            {user ? (
                <div className="logo-container">
                    <Link to='/dashboard' ><img src={logo} alt="logo" /></Link>
                </div>
            ) : <div className="logo-container">
                <Link to='/' ><img src={logo} alt="logo" /></Link>
            </div>}

            <ul className='list-items'>
                {user ? (
                    <>
                        <li>
                            {/* <Link className='user-icon' to='/login'>Hi {user.name}</Link> */}
                            <Link className='user-icon' style={{ border: 'none' }} to='/dashboard'><PersonOutlineIcon /><span className='login-text' style={{ display: 'flex', alignItems: 'center' }}>Hi {user.name}</span></Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} className='logout-text' > Sign out</Link>
                        </li>

                    </>
                ) : (
                    <>
                        <li>
                            <Link className='user-icon' to='/login'><PersonOutlineIcon /> <span className='login-text'>Login</span></Link>
                        </li>
                    </>)
                }
            </ul>
        </header>
    )
}

export default Header