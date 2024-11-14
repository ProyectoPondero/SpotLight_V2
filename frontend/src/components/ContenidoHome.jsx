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
        <>
            <div className='flex justify-center flex-col gap-8 col-span-5 h-full items-center px-2'>
                <FormUploadfile onNewPublication={handleNewPublication} />
                <div className='w-9/12 h-auto flex flex-col-reverse'>
                    {loading ? (
                        <p className="dark:text-gray-300">Cargando publicaciones...</p>
                    ) : error ? (
                        <p className="dark:text-red-500">Error al cargar publicaciones: {error.message}</p>
                    ) : initialPublications.length > 0 ? (
                        initialPublications.map((publication, index) => (
                            <article key={index} className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-4 bg-white dark:bg-gray-800 shadow-md">
                                <div className='p-2 flex flex-row items-center gap-2 rounded-sm'>
                                    <img className='w-12 h-12 rounded-full -' src={
                                        profile?.avatar
                                            ? profile.avatar.url
                                            : "https://via.placeholder.com/150"
                                    } alt="Foto de perfil" />
                                    <h1 className='font-bold text-black text-lg dark:text-gray-200'>{"@" + profile.name}</h1>
                                </div>
                                <h2 className="text-xl font-semibold mb-2 dark:text-gray-300 break-words">{publication.title}</h2>
                                <p className="text-gray-700 dark:text-gray-400 mb-4 break-words">{publication.description}</p>
                                <div className='w-full flex justify-center'>
                                    {publication.secure_url.match(/\.(mp4|webm|ogg|ogv)$/i) ? (
                                        <video src={publication.secure_url} controls className="rounded-lg w-full">
                                            Tu navegador no soporta el video.
                                        </video>
                                    ) : (
                                        <img src={publication.secure_url} alt={publication.title} className="rounded-lg max-h-96s h-96" />
                                    )}
                                </div>
                                <form action="" className='p-2'>
                                    <article className='w-full flex justify-between items-center'>
                                        <p className="text-red-500 font-bold">Categoria: <span className="text-green-700 dark:text-white">{publication.category}</span></p>
                                        <button onClick={(e) => handleSaveFavorite(e, publication._id)}>
                                            <i className="fa-solid fa-star text-xl text-yellow-500"></i>
                                        </button>
                                    </article>
                                </form>
                            </article>
                        ))
                    ) : (
                        <p className="dark:text-gray-300">No hay publicaciones disponibles.</p>
                    )}
                </div>
            </div>
        </>
    );
};
