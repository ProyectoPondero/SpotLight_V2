// src/hooks/usePublications.js
import { useEffect, useState } from 'react';
import { getPublications } from '../services/publication.service.js'; // Ajusta la ruta según tu estructura

export const usePublications = () => {
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPublications = async () => {
            try {
                const data = await getPublications();
                setPublications(data);
            } catch (err) {
                console.error('Error al obtener publicaciones:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPublications();
    }, []);

    return { publications, loading, error };
};
