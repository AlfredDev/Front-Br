import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../auth/context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';

export const Home = () => {

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLoggout = () => {
    logout();
    navigate('/login', {
      replace: true,
    })
  }


  return (
    <div className=''>


      <button onClick={onLoggout}>
        Salir
      </button>

    </div>
  )
}
