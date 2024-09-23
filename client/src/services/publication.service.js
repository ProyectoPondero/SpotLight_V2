import { API_URL } from "../config/env.config.js";

const URL = API_URL + `/publication`;

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

// Subir publicación
export const uploadPublication = async (formData) => {
    return fetchData(URL + `/`, {
        method: "POST",
        body: formData,
        credentials: "include"
    });
};

// Eliminar una publicación
export const deletePublication = async (id) => {
    return fetchData(URL + `/${id}`, {
        method: "DELETE",
        credentials: "include"
    });
};