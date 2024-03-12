import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { LoginPage } from '../../auth/pages/LoginPage'
import { Header } from '../components/Header'
import { LeftBar } from '../components/LeftBar'


export const InventarioRoutes = () => {
    return (
        <div className='flex'>      
            <LeftBar/>
            {/* <Header /> */}
            <Routes>
                <Route path='home' element={<Home />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='/*' element={<Navigate to="/home" />} />
            </Routes>
        </div>
    )
}
