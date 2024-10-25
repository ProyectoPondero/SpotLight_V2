import React from 'react';
import { UserContext } from './UserContext';
import { loginUser, logoutUser } from '../services/auth.service';
import { userType } from './userTypes';
import { userReducer } from './userReducer';

// Proveedor de contexto para el usuario
export const UserContextProvider = ({ children }) => {
    // Estado inicial del contexto de usuario
    const initialState = {
        usuario: null,
        isLogged: false,
    };

    // Hook useReducer para manejar el estado del usuario
    const [state, dispatch] = React.useReducer(userReducer, initialState);

    // Función para iniciar sesión
    const login = async (user) => {
        try {
            const response = await loginUser(user);
            if (response) {
                dispatch({
                    type: userType.logIn,
                    payload: response
                });
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    // Función para cerrar sesión
    const logout = async () => {
        try {
            const response = await logoutUser();
            if (response) {
                dispatch({
                    type: userType.logOut,
                });
            }
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            throw new Error("Error al cerrar sesión");
        }
    };

    // Proveer el estado y las funciones a través del contexto
    return (
        <UserContext.Provider value={{ state, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};