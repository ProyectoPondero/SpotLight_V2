import { useState, useEffect } from "react";
import { getFavorites, deleteFavorites } from "../../services/favorite.service.js";
import { Header } from "../../components/Header.jsx";
import { Footer } from "../../components/Footer.jsx";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await getFavorites();
        setFavorites(data);
      } catch (error) {
        console.log("Error al obtener favoritos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleDeleteFavorite = async (e, publicationId) => {
    e.preventDefault();
    try {
      await deleteFavorites(publicationId); // Llama al servicio de eliminación
      setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.publicationId._id !== publicationId)); // Actualiza el estado local
      console.log("Publicación eliminada de favoritos:", publicationId);
    } catch (error) {
      console.log("Error al borrar la publicación:", error);
    }
  };

  if (loading) return <p>Cargando favoritos...</p>;

  return (
    <>
      <Header />
      <main className="w-full min-h-screen dark:bg-gray-800">
        <ul className="w-full min-h-screen flex justify-center flex-col items-center pt-24">
          {favorites.length === 0 ? (
            <p className="text-2xl text-white">No tienes publicaciones favoritas.</p>
          ) : (
            favorites.map((favorite, index) => (
              <article key={index} className="border w-5/12 border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-4 bg-white dark:bg-gray-800 shadow-md flex flex-col">
                <p className="dark:text-white font-bold text-xl">{"@" + favorite.publicationId.author}</p>
                <h3 className="break-words dark:text-white font-bold">{favorite.publicationId.title}</h3>
                <p className="break-words">{favorite.publicationId.description}</p>
                <br />
                <div className='w-full flex justify-center'>
                  {/* Verificación para cargar video o imagen */}
                  {favorite.publicationId.secure_url.match(/\.(mp4|webm|ogg|ogv)$/i) ? (
                    <video src={favorite.publicationId.secure_url} controls className="rounded-lg w-full">
                      Tu navegador no soporta el video.
                    </video>
                  ) : (
                    <img
                      src={favorite.publicationId.secure_url}
                      alt={favorite.publicationId.title}
                      className="rounded-lg w-full"
                    />
                  )}
                </div>
                <button
                  onClick={(e) => handleDeleteFavorite(e, favorite.publicationId._id)}
                  className="mt-4 text-red-500 hover:text-red-700">
                  Eliminar de favoritos
                </button>
              </article>
            ))
          )}
        </ul>
        <Footer />
      </main>
    </>
  );
};
