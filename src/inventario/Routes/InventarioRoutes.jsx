import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { LoginPage } from '../../auth/pages/LoginPage'
import { Header } from '../components/Header'
import LeftBar from '../components/LeftBar'
import styled from "styled-components";
import { useState } from 'react'
import Celulares from '../pages/Celulares'

export const InventarioRoutes = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <>
            <Container className={sidebarOpen ? "sidebarState active" : ""}>
              <LeftBar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <div className="flex-1">
                    <Header />
                    <Routes>
                        <Route path='home' element={<Home />} />
                        <Route path='login' element={<LoginPage />} />
                        <Route path='/*' element={<Navigate to="/home" />} />
                        <Route path='/celulares' element={<Celulares/>} />
                    </Routes>
                </div>
            </Container>
                
        </>
    )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  transition:all 0.3s ;
  &.active {
    grid-template-columns: 250px auto;
  }
`;
