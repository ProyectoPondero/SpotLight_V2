import { useState, useEffect } from "react";
import { getFavorites, deleteFavorites } from "../../services/favorite.service.js";
import { Header } from "../../components/Header.jsx";
import { Footer } from "../../components/Footer.jsx";
import { useProfile } from "../../contexts/profile/profileContext.jsx";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state: { profile }, getProfileData } = useProfile();

  useEffect(() => {
    getProfileData();
  }, []);

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
      await deleteFavorites(publicationId);
      setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.publicationId._id !== publicationId));
    } catch (error) {
      console.log("Error al borrar la publicación:", error);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mis Favoritos
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Colección de publicaciones que te han inspirado
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
            </div>
          ) : favorites.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                No tienes publicaciones favoritas aún.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {favorites.map((favorite, index) => (
                <article
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl 
                    transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                >
                  <div className="p-6 space-y-6">
                    <div className="flex items-center space-x-4">
                      <img
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500"
                        src={profile?.avatar?.url || "https://via.placeholder.com/150"}
                        alt="Foto de perfil"
                      />
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        @{favorite.publicationId.author}
                      </h3>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {favorite.publicationId.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                        {favorite.publicationId.description}
                      </p>
                    </div>

                    <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                      {favorite.publicationId.secure_url.match(/\.(mp4|webm|ogg|ogv)$/i) ? (
                        <video
                          src={favorite.publicationId.secure_url}
                          controls
                          className="w-full h-64 object-cover"
                        >
                          Tu navegador no soporta el video.
                        </video>
                      ) : (
                        <img
                          src={favorite.publicationId.secure_url}
                          alt={favorite.publicationId.title}
                          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                        />
                      )}
                    </div>

                    <button
                      onClick={(e) => handleDeleteFavorite(e, favorite.publicationId._id)}
                      className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white font-medium 
                        rounded-lg transition-all duration-300 transform hover:scale-[1.02] 
                        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Eliminar de favoritos
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};