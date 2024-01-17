import apiUrl from "../../utils/apiConfig"

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

// Action creators
export const login = (user) => ({
    type: LOGIN,
    payload: user,
})

export const logout = () => ({
    type: LOGOUT,
})

export const loginUser = async (username, password, dispatch) => {
    try {
        const response = await fetch(`${apiUrl}/api/users/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })

        const json = await response.json()

        if (!response.ok) {
            console.log(json.error)
            throw new Error(json.error)
        }

        // save the user to local storage
        localStorage.setItem('user', JSON.stringify(json))

        // update AuthContext or dispatch the LOGIN action
        dispatch(login(json))

        return json
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const signup = async (userData) => {
    try {
        // Implement sign-up logic, e.g., sending a POST request to the server
        // with user data and handling the response
        const response = await fetch(`${apiUrl}/api/users/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })

        if (!response.ok) {
            // Handle sign-up error
            const errorData = await response.json()
            throw new Error(errorData.message)
        }

        const user = await response.json()

        return user
    } catch (error) {
        // Handle any errors that occurred during the sign-up process
        throw error
    }
}