import { userType } from "./userTypes";

// Reducer para manejar el estado del usuario
export const userReducer = (state, action) => {
    switch (action.type) {
        // Caso para iniciar sesión
        case userType.logIn: {
            return {
                ...state,
                usuario: action.payload.data,
                isLogged: true,
            };
        }

        // Caso para cerrar sesión
        case userType.logOut: {
            return {
                ...state,
                usuario: null,
                isLogged: false,
            };
        }

        // Caso por defecto, retorna el estado actual
        default:
            return state;
    }
};