// src/pages/Home.jsx
import React from 'react';
import FormUploadfile from '../../components/FormUploadfile.jsx';
import { Header } from '../../components/Header.jsx';
import { usePublications } from '../../hooks/hook.getPublications.js';
import { Aside } from '../../components/Aside.jsx';

export const Home = () => {
    const { publications, loading, error } = usePublications(); // Usar el hook

    return (
        <>
            <Header />
            <div className="flex justify-center h-screen"> {/* Cambiado a h-screen */}
                <main className="bg-slate-200 dark:bg-gray-600  w-screen"> {/* Cambiado a h-screen */}
                    <div className='mt-24 grid bg-slate-200 dark:bg-gray-600 grid-cols-6 w-full  min-h-screen px-2'> {/* Asegúrate de que el contenedor sea también h-full */}
                        {/* Sidebar */}
                        <Aside />

                        <div className='flex justify-center flex-col gap-8 col-span-5 h-full items-center px-2'> {/* Cambiado a h-full */}
                            <FormUploadfile />
                            <div className='w-full p-6 h-auto flex flex-col-reverse'>
                                {loading ? (
                                    <p>Cargando publicaciones...</p>
                                ) : error ? (
                                    <p>Error al cargar publicaciones: {error.message}</p>
                                ) : publications.length > 0 ? (
                                    publications.map((publication, index) => (
                                        <article key={index} className="mb-6 p-6 bg-gray-200 dark:bg-gray-900 rounded-lg flex flex-col shadow-xl ">
                                            <div className=' p-2 flex flex-row items-center gap-2 rounded-sm'>
                                                <img className='w-10' src="/spotlight.ico" alt="" />
                                                <h1 className='font-bold text-black text-lg dark:text-gray-200'>{"@" + publication.author}</h1>
                                            </div>
                                            <h2 className="text-2xl font-bold mb-2 h-auto px-6 break-words text-black dark:text-gray-200 ">{publication.title}</h2>
                                            <p className="text-gray-700 dark:text-gray-200 mb-4 h-auto px-6 break-words">{publication.description}</p>
                                            <div className='w-full flex justify-center'>
                                                <img
                                                    src={publication.secure_url}
                                                    alt={publication.title}
                                                    className=" rounded-lg w-2/6"
                                                />
                                            </div>
                                        </article>
                                    ))
                                ) : (
                                    <p>No hay publicaciones disponibles.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};