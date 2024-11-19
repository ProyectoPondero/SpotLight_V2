import { createContext, useContext, useEffect, useReducer } from 'react';
import { loginService, sessionService, logoutService } from '../../api/API.service.js';
import { userType } from './userTypes';
import { userReducer } from './userReducer';
import toast from 'react-hot-toast';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const initialState = {
        user: undefined,
    };

    const [state, dispatch] = useReducer(userReducer, initialState);
    console.log(state);
    const authLogin = async (user) => {
        try {
            const response = await loginService(user);
            if (response) {
                dispatch({
                    type: userType.LOGIN,
                    payload: response
                });
                toast.success(`Bienvenido ${response.data.username}!`);
                await authSession();
                return response;
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            toast.error("Error al iniciar sesión. Por favor, inténtelo de nuevo.");
        }
    };

    const authSession = async () => {
        try {
            const response = await sessionService();
            if (response.user) {
                dispatch({
                    type: userType.SESSION,
                    payload: response,
                });
            } else {
                dispatch({
                    type: userType.LOGOUT,
                });
            }
        } catch (error) {
            console.error("Error al obtener la sesión:", error);
            dispatch({
                type: userType.LOGOUT,
            });
        }
    };

    const authLogout = async () => {
        try {
            const response = await logoutService();
            if (response.ok) {
                toast.success(`Hasta luego ${state.user.username}!`);
                dispatch({
                    type: userType.LOGOUT,
                });
            }
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            toast.error("Error al cerrar sesión. Por favor, inténtelo de nuevo.");
        }
    };

    useEffect(() => {
        authSession();
    }, []);

    return (
        <UserContext.Provider value={{ state, authLogin, authSession, authLogout }}>
            {children}
        </UserContext.Provider>
    );
};

export const authContext = () => useContext(UserContext);