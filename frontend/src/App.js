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
import Sidebar from "./components/Sidebar/Sidebar.jsx"



function App() {

  const Layout = () => {
    return (
      <div className="app">
        {/* <Navbar /> */}
        <Sidebar />
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
          element: <Home />
        },
        {
          path: '/dashboard',
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
