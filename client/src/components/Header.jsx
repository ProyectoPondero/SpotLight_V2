import React from 'react'
import Dropdown from './buttons/botones';



export const  Header = () => {
return (
    <>
    <header className="flex w-screen bg-gray-900 px-4 h-16 z-1 fixed border-b-2 border-red-400">
        <nav className='flex flex-row w-screen px-4 gap-16'>
        <div className='flex flex-row items-center text-3xl relative font-semibold text-gray-100 w-auto gap-2'>
            <img className='h-12 w-12 p-1' src="/src/assets/img/spot.png" alt="icon Spot" />
            <h1>Spotlight</h1>
        </div>
        <div className='flex w-auto h-auto  relative right-10 ml-4'>
            <ul className='flex  justify-between h-auto mt-2 items-center text-lg text-gray-100 gap-8'>
            <li className=' rounded p-1 hover:bg-gray-800 hover:text-yellow-500 hover:font-bold hover:delay-100 flex flex-col gap-1 text-center'>
                <a href="/home">Home</a>
            </li>
            <li className='rounded p-1 hover:bg-gray-800 hover:delay-100 hover:text-yellow-500 hover:font-bold  flex flex-col gap-1 text-center'>
                <a href="/comunidad">Mensajes</a>
            </li>
            <li className='rounded p-1 hover:bg-gray-800 hover:delay-100 hover:text-yellow-500 hover:font-bold flex flex-col gap-1 text-center'>
                <a href="/soporte">Soporte</a>
            </li>
            <li>
                <Dropdown />
            </li>
            </ul>
        </div>
        <div className='flex items-center gap-4 ml-96 w-auto relative left-32'>
            <button className='border border-red-600 px-2 rounded-full h-8 flex items-center'>
            <a href="/perfil">
                <i class="fa-solid fa-user text-red-600"></i>
            </a>

            </button>
            <button className='bg-red-600 hover:bg-red-500 hover:text-gray-800 text-gray-300 font-bold py-2 px-4 rounded h-10'>
            Cerrar Sesion
            </button>
        </div>
        </nav>
    </header>
    </>
);
};