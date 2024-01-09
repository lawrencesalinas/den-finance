import { createContext, useReducer, useEffect } from "react"
import authReducer from './AuthReducer'
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))

        if (user) {
            dispatch({ type: 'LOGIN', payload: user })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider >
    )
}

export default AuthContext