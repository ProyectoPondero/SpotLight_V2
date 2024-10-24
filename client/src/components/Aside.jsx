import React from 'react';
import { Link } from 'react-router-dom';

export const Aside = () => {
    return (
        <>
            <div className='sticky top-28 h-80 w-11/12 col-span-1 shadow-2xl dark:bg-gray-900 rounded bg-gray-200'>
                <ul className='h-full flex flex-col font-bold text-gray-900 text-lg md:text-lg sm:text-xl justify-evenly items-center dark:text-white md:items-center lg:items-start px-2'>
                    <Link to="/faq" className='flex justify-center items-center gap-2 hover:text-xl hover:bg-gray-300 p-1 dark:hover:bg-gray-800 rounded'>
                        <i className="fa-solid fa-box-archive text-red-500"></i>
                        <li className='hidden lg:block'>Faq</li>
                    </Link>
                    <Link to="/favoritos" className='flex justify-center items-center gap-2 hover:text-xl hover:bg-gray-300 p-1 dark:hover:bg-gray-800 rounded'>
                        <i className="fa-solid fa-star text-red-500"></i>
                        <li className='hidden lg:block'>Favoritos</li>
                    </Link>
                    <Link to="/contactos" className='flex justify-center items-center gap-2 hover:text-xl hover:bg-gray-300 p-1 dark:hover:bg-gray-800 rounded'>
                        <i className="fa-solid fa-address-book text-red-500"></i>
                        <li className='hidden lg:block'>Contactos</li>
                    </Link>
                    <Link to="/privacidad" className='flex justify-center items-center gap-2 hover:text-xl hover:bg-gray-300 p-1 dark:hover:bg-gray-800 rounded'>
                        <i className="fa-solid fa-book text-red-500"></i>
                        <li className='hidden lg:block'>Privacidad</li>
                    </Link>
                    <Link to="/configuraciones" className='flex justify-center items-center gap-2 hover:text-xl hover:bg-gray-300 p-1 dark:hover:bg-gray-800 rounded'>
                        <i className="fa-solid fa-gear text-red-500"></i>
                        <li className='hidden lg:block'>Configuraciones</li>
                    </Link>
                </ul>
                <div className='flex flex-col items-center'>
                    <img className='relative w-20 top-14 xl:left-2 animate-bounce contrast-150' src="/src/assets/images/lampara_Pixar.png" alt="" />
                    <h1 className='relative top-12 font-bold text-2xl text-gray-900 dark:text-gray-200'>S P O T L I G HT</h1>
                </div>
            </div>
        </>
    );
};
