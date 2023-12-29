import apiUrl from "../../apiConfig"
import axios from "axios"

const API_URL = `${apiUrl}/api/users`

// Register user
export const registerUser = async (userData) => {
    const response = await axios.post(API_URL, userData)

    // save response to local storage including token, wrap in JSON because local storage can only hold string
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    console.log(response)
    return response.data
}