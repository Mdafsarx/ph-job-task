import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login";
import Cash from "../Pages/Cashout/Cash";
import CashIn from "../Pages/Cashin/CashIn";
import SendMoney from "../Pages/SendMoney/SendMoney";
import Balance from "../Pages/Balance/Balance";
import History from "../Pages/History/History";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <div>error.........</div>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cash-in',
                element: <CashIn />
            },
            {
                path: '/cash-out',
                element: <Cash />
            },
            {
                path: '/send-money',
                element: <SendMoney />
            },
            {
                path: '/balance',
                element: <Balance />
            },
            {
                path: '/History',
                element: <History />
            },

        ]
    },


            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },

])