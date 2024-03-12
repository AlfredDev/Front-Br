import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../inventario/pages/Home'
import { LoginPage } from '../auth/pages/LoginPage'
import { InventarioRoutes } from '../inventario/Routes/InventarioRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path='login/*' element={
          <PublicRouter>
            <Routes>
              <Route path='/*' element={<LoginPage />} />
            </Routes>
          </PublicRouter>
        } />


        <Route path='/*' element={
          <PrivateRoute>
            <InventarioRoutes />
          </PrivateRoute>
        } />

        {/* <Route path='login' element={<LoginPage />} />
        <Route path='/*' element={<InventarioRoutes />} /> */}
      </Routes>
    </>
  )
}
