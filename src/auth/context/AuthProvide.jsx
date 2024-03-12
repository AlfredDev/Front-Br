import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'
import axios from 'axios'



// const initialState = {
//     logged: false,
// }

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user,
    }
}

export const AuthProvide = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    // const login = async (username, password) => {

    //     try {
    //         const response = await axios.post('http://localhost:8080/auth/login', { username, password });
    //         const user = response.data;

    //         const action = {
    //             type: types.login,
    //             payload: user

    //         }
    //         localStorage.setItem('user', JSON.stringify(user));
    //         dispatch(action)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const login = (name = '') => {

        const user = { id: 'ABC', name }

        const action = {
            type: types.login,
            payload: user

        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action)
    }


    const logout = () => {
        localStorage.removeItem('user');
        const action = { type: types.logout };
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )

}