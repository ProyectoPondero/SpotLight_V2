import React, { useEffect, useState } from "react";
import { getFavorites } from "../../services/favorite.service.js";
import { Header } from "../../components/Header.jsx";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await getFavorites(); // Obtener los favoritos desde el servicio
        setFavorites(data); // Guardar los favoritos en el estado
      } catch (error) {
        setError(error); // Manejar errores
      } finally {
        setLoading(false); // Detener el estado de carga
      }
    };

    fetchFavorites(); // Llamar a la función al montar el componente
  }, []);

  if (loading) return <p>Cargando favoritos...</p>;
  if (error) return <p>Error al cargar favoritos: {error.message}</p>;

  return (
    <>
    <Header/>
    <div>
      <h2>Tus favoritos</h2>
      <ul>
        {favorites.length === 0 ? (
          <p>No tienes publicaciones favoritas.</p>
        ) : (
          favorites.map((favorite, index) => (
            <li key={index} className="favorite-item">
              <h3>{favorite.publicationId.title}</h3>
              <p>{favorite.publicationId.description}</p>
              <img
                src={favorite.publicationId.secure_url}
                alt={favorite.publicationId.title}
                className="favorite-image"
              />
              <p>Autor: {favorite.publicationId.author}</p>
            </li>
          ))
        )}
      </ul>
    </div>
    </>
  );
};
