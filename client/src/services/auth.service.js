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
export const registerUser = async ({ userName, email, password, repeatPassword }) => {
    return fetchData(URL + `register/`, {
        method: "POST",
        body: JSON.stringify({ userName, email, password, repeatPassword }),
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

// Desloguear usuario
export const logoutUser = async () => {
    return fetchData(URL + `logout/`, {
        method: "POST",
        credentials: "include"
    });
};