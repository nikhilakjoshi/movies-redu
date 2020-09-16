import React from 'react'
import { Navigate } from "react-router-dom"
import MainLayout from "src/Layouts/MainLayout";
import LoginView from "src/Views/auth/LoginView"

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: 'login', element: <LoginView /> },
            { path: '/', element: <Navigate to="/login" />}
        ]
    }
]

export default routes