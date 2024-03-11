import React from 'react'
import { Link } from 'react-router-dom'
import { LoginForm } from '../components/LoginForm'
import './Login.css'
export const LoginPage = () => {
  return (
    <div className="w-screen min-h-screen flex items-start ">
      <div className="relative w-1/2 h-screen flex flex-col">
        <img src='/src/assets/img.svg' className='img-bg' />
      </div>
      <div className='w-1/2 bg-[#edf1f5] h-screen flex flex-col p-20 pt-10'>
        <LoginForm />
      </div>
    </div>
  )
}
