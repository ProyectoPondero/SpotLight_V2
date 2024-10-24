import { API_URL } from "../config/env.config.js";

const URL = API_URL + `api/user/`;

// Función auxiliar para manejar las solicitudes fetch
const fetchData = async (endpoint, options) => {
    try {
        const response = await fetch(endpoint, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error en la solicitud:", error);
        throw error;
    }
};

// Registrar usuario
export const registerUser = async ({ userName, email, password }) => {
    return fetchData(URL + `register/`, {
        method: "POST",
        body: JSON.stringify({ userName, email, password }),
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    });
};

// Loguear usuario
export const loginUser = async ({ email, password }) => {
    return fetchData(URL + `login/`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    });
};

// Validar la sesion del usuario
export const sessionUser = async () => {
    return fetchData(URL + `session/`, {
        method: "GET",
        credentials: "include"
    });
};

// Validar la sesion del usuario
export const sessionName = async () => {
    const response = await fetchData(URL + `session/`, {
        method: "GET",
        credentials: "include"
    });

    // Asegúrate de que la respuesta tenga los datos del usuario
    if (response && response.userName) {
        return response.userName;  // Retorna el nombre del usuario
    }
    
    throw new Error("No se pudo obtener el nombre del usuario");
};



// Desloguear usuario
export const logoutUser = async () => {
    return fetchData(URL + `logout/`, {
        method: "POST",
        credentials: "include"
    });
};

// user.service.js
export const getUserInfo = async () => {
    const response = await fetchData(URL + `session/`, {
        method: "GET",
        credentials: "include"
    });

    // Asegúrate de que la respuesta tenga el nombre del usuario y el email
    if (response && response.user) {
        return {
            userName: response.user.userName,
            email: response.user.email
        };  // Retorna un objeto con el nombre y el correo
    }
    
    throw new Error("No se pudo obtener la información del usuario");
};
