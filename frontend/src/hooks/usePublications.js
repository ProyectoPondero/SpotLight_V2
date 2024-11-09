// src/hooks/usePublications.js
import { useEffect, useState } from 'react';
import { getPublications } from '../services/publication.service.js';

export const usePublications = (refreshFlag, category) => {
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPublications = async () => {
            setLoading(true);
            try {
                const data = await getPublications();

                // Filtrar publicaciones por categoría si está definida
                const filteredData = category
                    ? data.filter(pub => pub.category === category)
                    : data;

                setPublications(filteredData);
            } catch (err) {
                console.error('Error al obtener publicaciones:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPublications();
    }, [refreshFlag, category]); // Incluir categoría en las dependencias para actualizar cuando cambie

    return { publications, loading, error };
};
