import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'



const initialState = {
    logged: false,
}

export const AuthProvide = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, initialState);
    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name,
            }

        }
        dispatch(action)

    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login: login,
        }}>
            {children}
        </AuthContext.Provider>
    )

}