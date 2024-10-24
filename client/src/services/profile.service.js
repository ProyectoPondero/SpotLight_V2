import { API_URL } from "../config/env.config.js";

const URL = API_URL + `profile/`;

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

// Obtener perfil
export const getProfile = async () => {
    return fetchData(URL, {
        method: "GET",
        credentials: "include"
    });
};

// Modificar perfil
export const modifyProfile = async (formData) => {
    return fetchData(URL, {
        method: "PUT",
        body: formData,
        credentials: "include",
    });
};

// Eliminar perfil
export const deleteProfile = async () => {
    return fetchData(URL, {
        method: "DELETE",
        credentials: "include"
    });
};

// Obtener publicaciones del perfil
export const getPublications = async () => {
    return fetchData(URL + `publications/`, {
        method: "GET",
        credentials: "include"
    });
};