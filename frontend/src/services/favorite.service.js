import { API_URL } from "../config/env.config.js";

const URL = API_URL + "favorites/";

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

export const saveFavorite = async (publicationId) => {
    return fetchData(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ publicationId }),
        credentials: "include"
    });
};

