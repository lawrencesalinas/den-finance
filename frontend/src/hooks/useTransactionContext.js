import { useContext } from 'react'
import TransactionContext from '../context/transactions/TransactionContext'

export const useTransactionsContext = () => {
    const context = useContext(TransactionContext)

    if (!context) {
        throw Error('useTransactionContext must be inside an TransactionContextProvider')
    }

    return context
}