// src/pages/Home.jsx
import React, { useState } from 'react';
import FormUploadfile from '../../components/FormUploadfile.jsx';
import { Header } from '../../components/Header.jsx';
import { Aside } from '../../components/Aside.jsx';
import { usePublications } from '../../hooks/usePublications.js';
import { useUserInfo } from '../../hooks/useUserInfo.js'; // Importar el nuevo hook

export const Home = () => {
    const [refreshFlag, setRefreshFlag] = useState(false);
    const { publications: initialPublications, loading, error } = usePublications(refreshFlag);
    const { fotoPerfil } = useUserInfo(); // Usar el hook para obtener la foto de perfil

    const handleNewPublication = () => {
        setRefreshFlag(!refreshFlag);
    };

    return (
        <>
            <Header />
            <div className="flex justify-center h-screen">
                <main className="bg-slate-200 dark:bg-gray-600 w-screen">
                    <div className='mt-24 grid bg-slate-200 dark:bg-gray-600 grid-cols-6 w-full min-h-screen px-2'>
                        {/* Sidebar */}
                        <Aside />

                        {/* Contenido */}
                        <div className='flex justify-center flex-col gap-8 col-span-5 h-full items-center px-2'>
                            <FormUploadfile onNewPublication={handleNewPublication} />
                            <div className='w-7/12 h-auto flex flex-col-reverse'>
                                {loading ? (
                                    <p className="dark:text-gray-300">Cargando publicaciones...</p>
                                ) : error ? (
                                    <p className="dark:text-red-500">Error al cargar publicaciones: {error.message}</p>
                                ) : initialPublications.length > 0 ? (
                                    initialPublications.map((publication, index) => (
                                        <article key={index} className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-4 bg-white dark:bg-gray-800 shadow-md">
                                            <div className='flex justify-between items-center mb-4'>
                                                <div className='flex flex-col'>
                                                    <h2 className="text-xl font-semibold mb-2 dark:text-gray-300">{publication.title}</h2>
                                                    <p className="text-gray-700 dark:text-gray-400 mb-4">{publication.description}</p>
                                                </div>
                                                <div className='flex items-center'>
                                                    <h1 className='text-lg font-bold dark:text-gray-300 mr-4'>{"@" + publication.author}</h1>
                                                    <img className='w-12 h-12 rounded-full' src={fotoPerfil} alt="Foto de perfil" />
                                                </div>
                                            </div>
                                            <div className=''>
                                                <img
                                                    src={publication.secure_url}
                                                    alt={publication.title}
                                                    className="rounded-lg w-full"
                                                />
                                            </div>
                                        </article>
                                    ))
                                ) : (
                                    <p className="dark:text-gray-300">No hay publicaciones disponibles.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};
