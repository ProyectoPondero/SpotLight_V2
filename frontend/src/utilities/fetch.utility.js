// Función asíncrona para realizar una solicitud HTTP
export const fetchData = async (url, method, data) => {
    try {
        const response = await fetch(url, {
            method: method, // Método HTTP (GET, POST, etc.)
            body: JSON.stringify(data), // Convierte los datos en JSON
            headers: {
                "Content-Type": "application/json", // Especifica el tipo de contenido como JSON
            },
            credentials: "include" // Incluye las credenciales (cookies) en la solicitud
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return response;
    } catch (error) {
        console.error("Error en la solicitud:", error);
        throw error;
    }
};