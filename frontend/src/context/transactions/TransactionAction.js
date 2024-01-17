import apiUrl from "../../utils/apiConfig"

// const setLoading = () => dispatch({ tpye: 'SET_LOADING', })

export const fetchTransactions = async (user) => {
    try {
        const response = await fetch(`${apiUrl}/api/expenses/`, {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${user.token}`
            }
        })
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await response.json()

        const convertedData = data.map(item => ({
            ...item,
            amount: Number(item.amount)
        }))

        return convertedData
    } catch (error) {
        console.error('Error fetching transactions:', error)
    }
}

export const createTransaction = async (data, user) => {
    try {
        // setLoading(true)

        const response = await fetch(`${apiUrl}/api/expenses/create/`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            const responseData = await response.json()

            return responseData
            // alert('Item succesfully added')
            console.log('success')
        } else {
            throw new Error('Failed to create transaction.')
        }

    } catch (error) {
        console.log(error)
    } finally {
        // setLoading(false)
    }
}