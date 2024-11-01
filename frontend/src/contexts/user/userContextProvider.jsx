import { createContext, useContext, useEffect, useReducer } from 'react';
import { login, session, logout } from '../../api/authFetch.js';
import { userType } from './userTypes';
import { userReducer } from './userReducer';
import toast from 'react-hot-toast';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const initialState = {
        user: undefined,
    };

    const [state, dispatch] = useReducer(userReducer, initialState);

    const authLogin = async (user) => {
        try {
            const response = await login(user);
            if (response) {
                dispatch({
                    type: userType.LOGIN,
                    payload: response
                });
                toast.success(`Bienvenido ${response.data.userName}`);
                return response;
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    const authSession = async () => {
        try {
            const response = await session();
            if (response.user) {
                dispatch({
                    type: userType.LOGIN,
                    payload: { data: response.user },
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
            const response = await logout();
            if (response.ok) {
                toast.success(`Hasta luego ${state.user.userName}`);
                dispatch({
                    type: userType.LOGOUT,
                });
            }
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            throw new Error("Error al cerrar sesión");
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