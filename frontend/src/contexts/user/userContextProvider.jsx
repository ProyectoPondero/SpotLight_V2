import { createContext, useContext, useReducer } from 'react';
import { login, logout } from '../../api/authFetch.js';
import { userType } from './userTypes';
import { userReducer } from './userReducer';
import toast from 'react-hot-toast';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const initialState = {
        user: null,
        isLogged: false,
        isLoading: false,
    };

    const [state, dispatch] = useReducer(userReducer, initialState);

    const handleLoading = async () => {
        dispatch({
            type: authTypes.LOADING
        });
    };

    const authLogin = async (user) => {
        handleLoading();
        try {
            const response = await login(user);
            if (response) {
                dispatch({
                    type: userType.LOGIN,
                    payload: response
                });
                handleLoading();
                return toast.success(`Bienvenido ${response.data.userName}`);
            }
            handleLoading();
        } catch (error) {
            handleLoading();
            console.error("Error al iniciar sesión:", error);
        }
    };

    const authSession = async () => {
        handleLoading();
        try {
            const response = await session();
            if (response.ok) {
                dispatch({
                    type: userType.LOGIN,
                    payload: response
                });
                handleLoading();
            }
            handleLoading();
        } catch (error) {
            handleLoading();
            console.error("Error al obtener la sesión:", error);
        }
    };

    const authLogout = async () => {
        handleLoading();
        try {
            const response = await logout();
            if (response.ok) {
                toast.success(`Hasta luego ${state.user.userName}`);
                dispatch({
                    type: userType.LOGOUT,
                });
                handleLoading();
            }
            handleLoading();
        } catch (error) {
            handleLoading();
            console.error("Error al cerrar sesión:", error);
            throw new Error("Error al cerrar sesión");
        }
    };

    return (
        <UserContext.Provider value={{ state, authLogin, authSession, authLogout }}>
            {children}
        </UserContext.Provider>
    );
};

export const authContext = () => useContext(UserContext);