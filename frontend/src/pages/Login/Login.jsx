import "./login.scss"
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../context/auth/AuthAction"
import { AuthContext } from "../../context/auth/AuthContext"
import { useAuthContext } from "../../hooks/useAuthContext"
// import visibilityIcon from '../assets/svg/visibilityIcon.svg'
// import Spinner from "../components/shared/Spinner"
// import Header from "../components/layouts/Header"




function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const { username, password } = formData
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    const { dispatch } = useAuthContext()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const login = async () => {
        setIsLoading(true)
        setError(null)

        try {
            const user = await loginUser(username, password, dispatch) // Call loginUser function

            dispatch({ type: 'LOGIN', payload: user })

            setIsLoading(false)
            navigate('/dashboard') // Navigate to the dashboard after successful login
        } catch (error) {
            console.error(error)
            setIsLoading(false)
            setError('Invalid username or password. Please try again.')
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await login()
    }

    return (
        <>
            <div>
                {/* <Header linkcolor='#fff' bgcolor='#181818' /> */}
            </div>
            <div className="Register" data-aos='fade-in' >
                <h1>Welcome Back!</h1>
                <form className="form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            className='emailInput'
                            type="email"
                            name='username'
                            id='email'
                            value={username}
                            placeholder='Enter your email'
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className='passwordInput'
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            id='password'
                            value={password}
                            placeholder='Enter your password'
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="signupbtns">
                        <div className="signuphead">
                            <button disabled={isLoading} className="signupbtn">LOGIN {" "}</button>
                        </div>
                        <br />
                        {error && <div style={{ color: 'red' }} className="error">{error}</div>}

                        <h4 className='or'><span>OR</span></h4>

                        <div className="signuphead">
                            <Link to='/register'>
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