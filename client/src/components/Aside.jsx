import React from 'react';
import { Link } from 'react-router-dom';

export const Aside = () => {
    return (
        <>
            <aside className='pt-16 max-h-screen'>
                <div className='w-auto flex'>
                    <ul className='flex flex-col justify-center text-center gap-16 text-lg'>
                        <li className="flex flex-col gap-1 font-semibold text-gray-200">
                            <i className="fa-solid fa-house text-yellow-500"></i>
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="flex flex-col gap-1 font-semibold text-gray-200">
                            <i className="fa-regular fa-user text-yellow-500"></i>
                            <Link to="/perfil">Perfil</Link>
                        </li>
                        <li className="flex flex-col gap-1 font-semibold text-gray-200">
                            <i className="fa-solid fa-message text-yellow-500"></i>
                            <Link to="/mensajes">Mensajes</Link>
                        </li>
                        <li className="flex flex-col gap-1 font-semibold text-gray-200">
                            <i className="fa-regular fa-calendar-days text-yellow-500"></i>
                            <Link to="/convocatorias">Convocatorias</Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};