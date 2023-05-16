import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Main from './components/Layout/Main.jsx';
import OrdersReview from './components/OrdersReview/OrdersReview.jsx';

const router = createBrowserRouter([
    {
        path:'/'
        , element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('sData.json')
            },
            {
                path: '/review',
                element: <OrdersReview></OrdersReview>
            }
        ]

    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
)
