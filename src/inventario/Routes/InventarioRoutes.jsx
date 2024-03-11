import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { LoginPage } from '../../auth/pages/LoginPage'

export const InventarioRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='home' element={<Home />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='/*' element={<Navigate to="/home" />} />
            </Routes>
        </>
    )
}
