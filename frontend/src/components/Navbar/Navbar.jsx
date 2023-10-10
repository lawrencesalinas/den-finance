import './navbar.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [open, setOpen] = useState(true)

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="items">
                        <div className="item">About</div>
                        <div className="item">Contact</div>
                    </div>
                </div>
                <div className="center">
                    <Link to={'/'}><h1>DENSTORE</h1></Link>
                </div>
                <div className="right">
                    <div className="search">
                        <input type="text" placeholder='Search...' />
                        {/* <SearchOutlinedIcon /> */}
                    </div>
                    <div className="items">
                        <div className="item" onClick={() => setOpen(!open)}>
                            login
                        </div>
                        <div className="item">
                            Get started
                        </div>
                    </div>
                </div>
            </div>
            {/* {open && <Cart />} */}
        </div>
    )
}

export default Navbar