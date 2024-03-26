import React, { useContext, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { RecoveryPassword } from '../../inventario/components/RecoveryPassword';

export const LoginForm = () => {

    const { onInputChange, usuario, password } = useForm({
        usuario: '',
        password: '',
    });


    const navigate = useNavigate();
    const {login} = useContext(AuthContext)

    const onLogin = () => {

        login(usuario, password);

        navigate('/', {
            replace: true,
        })
    }


    const [showModal,setShowModal] = useState(false);


    return (
        <div className=" bg-white  rounded-md shadow-md pt-5  flex flex-col items-center w-full h-screen">
            <h1 className='text-2xl text-[#060606] font-bold mt-5'>
                Bienvenido
            </h1>
            <div className="bg-sky-300 mt-5">
                <img src='/src/assets/logo.jpg' className="object-fill h-40 w-50 ..." />
            </div>
            <form className="sm:w-1/2 mt-10">
                <div className="mb-10">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-[#E3EBF3] leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Alfred"
                        name='usuario'
                        value={usuario}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Contraseña
                    </label>
                    <input className="shadow appearance-none border bg-[#E3EBF3]  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        placeholder="******************"
                        name='password'
                        value={password}
                        onChange={onInputChange}
                    />
                    <p className=" text-right text-sm text-[#DF8304] cursor-pointer  italic">¿Olvidaste la contraseña ?</p>
                </div>


            </form>
            <div className="flex items-center justify-center  w-1/2 pb-2">
                <button 
                className="w-full bg-[#DF8304] hover:bg-[#DF8354]hover:shadow-md text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="button"
                onClick={onLogin}
                >
                    Iniciar sesión
                </button>
            </div>
                {showModal ? <RecoveryPassword/> : null}

        </div>
    )
}
