import Home from "./pages/Home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import './app.scss'
import Header from "./components/Header/Header"
import DashBoard from "./pages/Dashboard/Dashboard"
import { TransactionProvider } from "./context/transactions/TransactionContext"
import { AuthProvider } from "./context/auth/AuthContext.js"
import Sidebar from "./components/Sidebar/Sidebar.jsx"
import Login from "./pages/Login/Login.jsx"
import Register from "./pages/Register/Register.jsx"
import Expenses from "./pages/Expenses/Expenses.jsx"
import Footer from "./components/Footer/Footer.jsx"



function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Header />
        {/* <Sidebar /> */}
        <Outlet />
        {/* <Sidebar /> */}
        {<Footer />}
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
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/expenses',
          element: <Expenses />
        },
        {
          path: '/register',
          element: <Register />
        },

      ]
    },
  ])

  return (
    <AuthProvider>
      <TransactionProvider>
        <div className="app">
          <RouterProvider router={router} />
        </div>
      </TransactionProvider>
    </AuthProvider>
  )
}

export default App
