export const fetchData = async (url, method, data) => {
    try {
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return response;
    } catch (error) {
        throw error;
    }
};