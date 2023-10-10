import Expense from "./components/Expense/Expense"
import Home from "./pages/Home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import './app.scss'
import Navbar from "./components/Navbar/Navbar"
import DashBoard from "./pages/Dashboard/Dashboard"
import { TransactionProvider } from "./context/transactions/TransactionContext"



function App() {

  const Layout = () => {
    return (
      <div>
        {/* <Navbar /> */}
        <Outlet />
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <DashBoard />
        },
      ]
    },
  ])

  return (
    <TransactionProvider>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </TransactionProvider>
  )
}

export default App
