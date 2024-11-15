import { saveFavorite, deleteFavorites } from "../services/favorite.service.js";
import React, { useState, useEffect } from 'react';
import FormUploadfile from './FormUploadfile.jsx';
import { usePublications } from '../hooks/usePublications.js';
import { useProfile } from "../contexts/profile/profileContext.jsx";

export const ContenidoHome = () => {
    const [refreshFlag, setRefreshFlag] = useState(false);
    const { publications: initialPublications, loading, error } = usePublications(refreshFlag);
    const { state: { profile }, getProfileData } = useProfile();

    useEffect(() => {
        getProfileData();
    }, []);

    const handleNewPublication = () => {
        setRefreshFlag(!refreshFlag);
    };

    const handleSaveFavorite = async (e, publicationId) => {
        e.preventDefault();
        try {
            const response = await saveFavorite(publicationId);
            console.log("Respuesta del servidor:", response);
        } catch (error) {
            console.error("Error al guardar la publicación en favoritos:", error);
        }
    };

    return (
        <div className="lg:col-span-5 space-y-6">
            <div className="max-w-3xl mx-auto">
                <FormUploadfile onNewPublication={handleNewPublication} />

                <div className="mt-8 space-y-6 flex flex-col-reverse">
                    {loading ? (
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
                            <div className="flex items-center justify-center space-x-3">
                                <div className="animate-spin w-6 h-6 border-3 border-t-blue-500 border-blue-500/20 rounded-full" />
                                <span className="text-gray-600 dark:text-gray-300 font-medium">
                                    Cargando publicaciones...
                                </span>
                            </div>
                        </div>
                    ) : error ? (
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-100 dark:border-red-800">
                            <p className="text-red-600 dark:text-red-400 text-center font-medium">
                                Error al cargar publicaciones: {error.message}
                            </p>
                        </div>
                    ) : initialPublications.length > 0 ? (
                        initialPublications.map((publication, index) => (
                            <article
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col-reverse"
                            >
                                <div className="p-6 ">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="relative">
                                            <img
                                                className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-700"
                                                src={profile?.avatar ? profile.avatar.url : "https://via.placeholder.com/150"}
                                                alt="Foto de perfil"
                                            />
                                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                                                {"@" + publication.author}
                                            </h3>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                                            </span> 
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                        {publication.title}
                                    </h2>

                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {publication.description}
                                    </p>

                                    <div className="mt-6 -mx-6 mb-6">
                                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4">
                                            {publication.secure_url.match(/\.(mp4|webm|ogg|ogv)$/i) ? (
                                                <video
                                                    src={publication.secure_url}
                                                    controls
                                                    className="w-full rounded-lg shadow-sm max-h-[500px] object-contain"
                                                >
                                                    Tu navegador no soporta el video.
                                                </video>
                                            ) : (
                                                <img
                                                    src={publication.secure_url}
                                                    alt={publication.title}
                                                    className="w-full rounded-lg shadow-sm max-h-[500px] object-contain"
                                                />
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                Categoria:
                                            </span>
                                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-red-500 to-red-600 text-white shadow-sm">
                                                {publication.category}
                                            </span>
                                        </div>

                                        <button
                                            onClick={(e) => handleSaveFavorite(e, publication._id)}
                                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 group"
                                            aria-label="Guardar en favoritos"
                                        >
                                            <i className="fa-solid fa-star text-xl text-yellow-500 group-hover:scale-110 transform transition-transform duration-200" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-12 text-center shadow-sm">
                            <div className="text-gray-400 dark:text-gray-500 mb-4">
                                <i className="fa-solid fa-inbox text-4xl" />
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                                No hay publicaciones disponibles.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};