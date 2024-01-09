import "./login.scss"
import { useEffect, useState } from 'react'
// import { toast } from 'react-toastify'
// import { useSelector, useDispatch } from 'react-redux'
// import { register, reset } from '../features/auth/authSlice'
import { Link, useNavigate } from "react-router-dom"
// import visibilityIcon from '../assets/svg/visibilityIcon.svg'
// import Spinner from "../components/shared/Spinner"
// import Header from "../components/layouts/Header"


import { useLogin } from '../../hooks/useLogin'

function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const { username, password } = formData
    const { login, error, isLoading } = useLogin()
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        await login(username, password)

        navigate('/dashboard')
    }

    return (
        <>
            <div data-aos='fade-in'>
                {/* <Header linkcolor='#fff' bgcolor='#181818' /> */}
            </div>
            <div className="Register" data-aos='fade-in' >
                <h1>Welcome Back!</h1>
                <form className="form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input className='emailInput' type="email" name='username' id='email' value={username} placeholder='Enter your email' onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <input className='passwordInput' type={showPassword ? 'text' : 'password'} name='password' id='password' value={password} placeholder='Enter your password' onChange={onChange} required />
                    </div>
                    <div className="signupbtns">
                        <div className="signuphead">
                            <button disabled={isLoading} className="signupbtn">LOGIN {" "}</button>
                            {error && <div className="error">{error}</div>}
                        </div>

                        <h4 className='or'><span>OR</span></h4>

                        <div className="signuphead">
                            <Link to='/login'>
                                <button className="create-act-btn">SIGN UP</button>
                            </Link>
                        </div>
                        {/* OAtuh */}
                    </div>
                </form>
            </div>
        </>


    )
}

export default Login