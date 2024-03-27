import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Home } from '../pages/Home'
import { LoginPage } from '../../auth/pages/LoginPage'
import { Header } from '../components/Header'
import LeftBar from '../components/LeftBar'
import styled from "styled-components";
import { useState } from 'react'
import Celulares from '../pages/Celulares'
import { Computadoras } from '../pages/Computadoras'
import { AddCompu } from '../pages/AddCompu'
import Configuracion from '../pages/Configuracion'
import Usuarios from '../pages/Usuarios'
import AgregarUsuario from '../pages/AgregarUsuario'
import Empleados from '../pages/Empleados'
import AddEmpleado from '../pages/AddEmpleado'
import Departamentos from '../pages/Departamentos'
import SistemasOperativos from '../pages/SistemasOperativos'
import Office from '../pages/Office'
import Marcas from '../pages/Marcas'
import Antivirus from '../pages/Antivirus'
import Correos from '../pages/Correos'
import { Ipads } from '../pages/Ipads'
import { Impresoras } from '../pages/Impresoras'
import { MicroImpresoras } from '../pages/MicroImpresoras'
import { Pantallas } from '../pages/Pantallas'
import { Radios } from '../pages/Radios'
import { Telefonos } from '../pages/Telefonos'
import { TvBox } from '../pages/TvBox'
import { TvHuesped } from '../pages/TvHuesped'
import { Llaves } from '../pages/Llaves'

export const InventarioRoutes = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const pathnameWithoutSlash = location.pathname.substring(1); // Elimina la barra inicial
  const capitalizedPathname = pathnameWithoutSlash.charAt(0).toUpperCase() + pathnameWithoutSlash.slice(1);

  return (
    <>
      <Container className={sidebarOpen ? "sidebarState active" : ""}>
        <LeftBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="flex-1">
          <Header ruta={capitalizedPathname} />
          <Routes>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='/*' element={<Navigate to="/home" />} />
            <Route path='/celulares' element={<Celulares />} />
            <Route path='/Computadoras' element={<Computadoras />} />
            <Route path='/computadora' element={<AddCompu />} />
            <Route path='/correos' element={<Correos />} />
            <Route path='/configuracion' element={<Configuracion />} />
            <Route path='/configuracion/usuarios' element={<Usuarios />} />
            <Route path='/configuracion/empleados' element={<Empleados />} />
            <Route path='/configuracion/departamentos' element={<Departamentos />} />
            <Route path='/configuracion/sistemasOperativos' element={<SistemasOperativos />} />
            <Route path='/configuracion/antivirus' element={<Antivirus />} />
            <Route path='/configuracion/office' element={<Office />} />
            <Route path='/configuracion/marcas' element={<Marcas />} />
            <Route path='/ipads' element={<Ipads />} />
            <Route path='/impresoras' element={<Impresoras />} />
            <Route path='/micro-impresoras' element={<MicroImpresoras />} />
            <Route path='/Pantallas' element={<Pantallas />} />
            <Route path='/Radios' element={<Radios />} />
            <Route path='/telefonos' element={<Telefonos />} />
            <Route path='/TvBox' element={<TvBox />} />
            <Route path='/TvHuesped' element={<TvHuesped />} />
            <Route path='/llaves' element={<Llaves />} />
          </Routes>
        </div>
      </Container>

    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 70px auto;
  transition:all 0.3s ;
  &.active {
    grid-template-columns: 250px auto;
  }
`;
