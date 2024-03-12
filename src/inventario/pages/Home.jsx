import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../auth/context/AuthContext'
import { useNavigate } from 'react-router-dom';

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
    <>
      Home
      <br />
      <button onClick={onLoggout}>
        Salir
      </button>

    </>
  )
}
