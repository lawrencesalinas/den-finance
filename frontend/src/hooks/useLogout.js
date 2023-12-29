import { useAuthContext } from './useAuthContext'

export const useLogout = () => {

    const logout = () => {
        const { dispatch } = useAuthContext()

        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({ type: 'LOGOUT' })
    }

    return { logout }
}