import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="dark:bg-gray-800 bg-slate-200 text-black dark:text-white py-4 border-t-2 border-gray-400 dark:border-none">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center">

                    {/* Sección de opciones a la izquierda */}
                    <div className="text-center mb-4 sm:mb-0 flex flex-col items-center gap-2 p-3">
                        <article className='flex items-center gap-3'>
                            <img className='h-12 w-12' src="/spotlight.ico" alt="IconoSpot" />
                            <h5 className="text-xl font-bold">Equipo SpotLight</h5>
                        </article>
                    </div>

                    <div className="flex flex-col w-auto gap-3 font-bold text-white p-2 items-center">
                        <div className='flex w-60 justify-around items-center'>
                            <img className='w-12 h-12' src="/src/assets/images/sponsor.png" alt="" />
                            <img className='h-12 w-12' src="/src/assets/images/ipf.png" alt="" />
                            <img className='w-14 h-14' src="/src/assets/images/linkedin.png" alt="" />
                        </div>
                        <span className=' box-border text-black dark:text-gray-200'>
                            SPONSORS DEL PROYECTO
                        </span>
                    </div>

                    {/* Sección del nombre del sitio en el centro */}

                    {/* Sección de redes sociales a la derecha */}
                    <div className="flex space-x-6 flex-row px-10 ">
                        <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                            <i className="fab fa-facebook-f text-3xl text-blue-500"></i>
                        </Link>
                        <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                            <i className="fab fa-twitter text-3xl text-cyan-500"></i>
                        </Link>
                        <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                            <i className="fab fa-instagram text-3xl text-rose-500"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </footer >
    );
};