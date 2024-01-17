import "./register.scss"
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
// import visibilityIcon from '../assets/svg/visibilityIcon.svg'
// import Spinner from "../components/shared/Spinner"
// import Header from "../components/layouts/Header"
import { signup } from "../../context/auth/AuthAction"

function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { name, email, password, confirmPassword } = formData
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            throw Error('Passwords do not match')
        } else {
            try {
                // Call the signUp function directly
                const user = await signup({
                    name,
                    email,
                    password,
                })

                // Save the user data to localStorage
                localStorage.setItem('user', JSON.stringify(user))

                // Handle successful registration
                // You can navigate or display a success message here
                navigate('/dashboard')
            } catch (error) {
                // Handle registration error
                console.error(error)
                setError('User with this email already exists')
                // You can display an error message to the user here
            }
        }
    }

    // if (isLoading) {
    //     return <Spinner />
    // }

    return (
        <>
            <div className="Register" data-aos='fade-in' >
                <h1>Create Account</h1>
                <form className="form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input className='nameInput' type="text" name='name' id='name' value={name} placeholder='Enter your name' onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <input className='emailInput' type="email" name='email' id='email' value={email} placeholder='Enter your email' onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <input className='passwordInput' type={showPassword ? 'text' : 'password'} name='password' id='password' value={password} placeholder='Enter your password' onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <input className='passwordConfirmInput' type={showPassword ? 'text' : 'password'} name='confirmPassword' id='confirmPassword' value={confirmPassword} placeholder='Confirm password' onChange={onChange} required />
                    </div>
                    <div className="signupbtns">
                        <div className="signuphead">
                            <button className="signupbtn">SIGN UP {" "}</button>
                        </div>

                        <br />
                        {error && <div style={{ color: 'red' }} className="error">{error}</div>}

                        <h4 className='or'><span>OR</span></h4>

                        <div className="signuphead">
                            <Link to='/login'>
                                <button className="create-act-btn">SIGN IN</button>
                            </Link>
                        </div>
                        {/* OAtuh */}
                    </div>
                </form>



            </div>
        </>


    )
}

export default Register