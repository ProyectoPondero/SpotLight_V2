import { userType } from "./userTypes";

// Reducer para manejar el estado del usuario
export const userReducer = (state, action) => {
    switch (action.type) {
        // Caso para manejar el inicio de sesión
        case userType.logIn:
            // Guardar los datos del usuario en localStorage
            localStorage.setItem(
                "userData",
                JSON.stringify({
                    isLogged: true,
                    token: action.token,
                    usuario: action.usuario,
                })
            );
            // Actualizar el estado con los datos del usuario
            return {
                isLogged: true,
                token: action.token,
                usuario: action.usuario,
            };

        // Caso para manejar el cierre de sesión
        case userType.logOut:
            // Eliminar los datos del usuario de localStorage
            localStorage.removeItem("userData");
            // Actualizar el estado para indicar que el usuario no está logueado
            return {
                isLogged: false,
            };

        // Caso por defecto si la acción no coincide con ningún caso
        default:
            break;
    }
};