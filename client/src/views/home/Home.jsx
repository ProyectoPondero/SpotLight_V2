// src/pages/Home.jsx
import React from 'react';
import FormUploadfile from '../../components/FormUploadfile.jsx';
import { Header } from '../../components/Header.jsx';
import { usePublications } from '../../hooks/hook.getPublications.js';

export const Home = () => {
    const { publications, loading, error } = usePublications(); // Usar el hook

    return (
        <>
            <Header />
            <div className="flex justify-center h-screen"> {/* Cambiado a h-screen */}
                <main className="bg-slate-200 dark:bg-gray-600  w-screen"> {/* Cambiado a h-screen */}
                    <div className='mt-24 grid bg-slate-200 dark:bg-gray-600 grid-cols-6 w-full  min-h-screen px-2'> {/* Asegúrate de que el contenedor sea también h-full */}
                        {/* Sidebar */}
                        <div className='sticky top-28 h-80 w-11/12 col-span-1 shadow-2xl dark:bg-gray-900 rounded bg-gray-200'>
                            <ul className='h-full flex flex-col font-bold text-gray-900 text-lg md:text-lg sm:text-xl justify-evenly items-center dark:text-white'>
                                <a href="" className='flex justify-center items-center gap-2 hover:text-xl hover:bg-gray-300 p-1 dark:hover:bg-gray-800 rounded'>
                                    <i className="fa-solid fa-box-archive text-red-500"></i>
                                    <li className='hidden lg:block'>Archivo</li>
                                </a>
                                <a href="" className='flex justify-center items-center gap-2 hover:text-xl hover:bg-gray-300 p-1 dark:hover:bg-gray-800 rounded'>
                                    <i className="fa-solid fa-address-book text-red-500"></i>
                                    <li className='hidden lg:block'>Contactos</li>
                                </a>
                                <a href="" className='flex justify-center items-center gap-2 hover:text-xl hover:bg-gray-300 p-1 dark:hover:bg-gray-800 rounded'>
                                    <i className="fa-solid fa-floppy-disk text-red-500"></i>
                                    <li className='hidden lg:block'>Guardados</li>
                                </a>
                                <a href="" className='flex justify-center items-center gap-2 hover:text-xl hover:bg-gray-300 p-1 dark:hover:bg-gray-800 rounded'>
                                    <i className="fa-solid fa-star text-red-500"></i>
                                    <li className='hidden lg:block'>Favoritos</li>
                                </a>
                                <a href="" className='flex justify-center items-center gap-2 hover:text-xl hover:bg-gray-300 p-1 dark:hover:bg-gray-800 rounded'>
                                    <i className="fa-solid fa-book text-red-500"></i>
                                    <li className='hidden lg:block'>Privacidad</li>
                                </a>
                                <a href="" className='flex justify-center items-center gap-2 hover:text-xl hover:bg-gray-300 p-1 dark:hover:bg-gray-800 rounded'>
                                    <i className="fa-solid fa-gear text-red-500"></i>
                                    <li className='hidden lg:block'>Configuraciones</li>
                                </a>
                            </ul>
                            <div className='flex flex-col items-center'>
                                <img className='relative w-20 top-14 xl:left-2 animate-bounce contrast-150' src="/src/assets/images/lampara_Pixar.png" alt="" />
                                <h1 className='relative top-12 font-bold text-2xl text-gray-900 dark:text-gray-200'>S P O T L I G HT</h1>
                            </div>
                        </div>

                        <div className='flex justify-center flex-col gap-8 col-span-5 h-full items-center px-2'> {/* Cambiado a h-full */}
                            <FormUploadfile />
                            <div className='w-full p-6 h-auto'>
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
