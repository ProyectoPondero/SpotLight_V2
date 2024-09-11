import { userType } from "./userTypes";
import Cookies from 'js-cookie';

export const userReducer = (state, action) => {
    switch (action.type) {
        case userType.logIn:
            // Guardar datos del usuario en una cookie
            Cookies.set('userData', JSON.stringify({
                isLogged: true,
                token: action.token,
                usuario: action.usuario,
            }));
            return {
                isLogged: true,
                token: action.token,
                usuario: action.usuario,
            };
        case userType.logOut:
            // Eliminar cookie del usuario
            Cookies.remove('userData');
            return {
                isLogged: false,
            };

        default:
            // Retornar el estado actual si la acción no coincide
            return state;
    }
};