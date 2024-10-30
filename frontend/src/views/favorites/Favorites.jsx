import React, { useEffect, useState } from "react";
import { getFavorites } from "../../services/favorite.service.js";
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
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) return <p>Cargando favoritos...</p>;



  return (
    <>
      <Header />
      <p>JAJAJAJAJAJ</p>
      <main className="w-full min-h-screen dark:bg-gray-800">
        <ul className="w-full min-h-screen flex justify-center flex-col items-center pt-24 " >
          {favorites.length === 0 ? (
            <p className="text-2xl text-white">No tienes publicaciones favoritas.</p>
          ) : (
            favorites.map((favorite, index) => (
              <article key={index} className="border w-5/12 border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-4 bg-white dark:bg-gray-800 shadow-md flex flex-col">
                <p className="dark:text-white font-bold text-xl">{"@" + favorite.publicationId.author}</p>
                <h3 className="break-words dark:text-white font-bold">{favorite.publicationId.title}</h3>
                <p className="break-words ">{favorite.publicationId.description}</p>
                <br />
                <img
                  src={favorite.publicationId.secure_url}
                  alt={favorite.publicationId.title}
                  className="favorite-image h-auto border border-gray-300 dark:border-gray-700 rounded-xl w-full"
                />
              </article>
            ))
          )}
        </ul>
        <Footer />
      </main>
    </>
  );
};
