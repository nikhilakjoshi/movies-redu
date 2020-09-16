import React from 'react'
import { Navigate } from "react-router-dom"
import Layout from "src/redux-saga/Layout";
import SearchPage from "src/redux-saga/SearchPage"
import MovieDetails from "src/redux-saga/MovieDetails";
const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/search', element: <SearchPage />},
            { path: '/movie/*', element: <MovieDetails /> },
            { path: '/', element: <Navigate to="/search" /> },
        ]
    }
]

export default routes