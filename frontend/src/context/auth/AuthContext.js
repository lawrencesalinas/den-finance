import { createContext, useContext, useReducer, useEffect } from "react"
import authReducer from './AuthReducer'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isAuthenticated: false,
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))

        if (user) {
            dispatch({ type: 'LOGIN', payload: user })
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <AuthContext.Provider value={{ ...state, dispatch, logout }}>
            {children}
        </AuthContext.Provider >
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider')
    }
    return context
}