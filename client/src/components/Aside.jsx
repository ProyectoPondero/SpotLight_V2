import React from 'react'

export const Aside = () => {
    return (
        <>
            <aside className='pt-16 max-h-screen'>
                <div className='w-auto flex'>
                    <ul className='flex flex-col justify-center text-center gap-16 text-1xl'>
                        <li className="flex flex-col gap-1 font-semibold text-gray-200">
                            <i className="fa-solid fa-house text-yellow-500"></i>
                            <a href="/home">Home</a>
                        </li>
                        <li className="flex flex-col gap-1 font-semibold text-gray-200">
                            <i className="fa-regular fa-user text-yellow-500"></i>
                            <a href="/perfil">Perfil</a>
                        </li>
                        <li className="flex flex-col gap-1 font-semibold text-gray-200">
                            <i className="fa-regular fa-message text-yellow-500"></i>
                            <a href="/mensajes">Mensajes</a>
                        </li>
                        <li className="flex flex-col gap-1 font-semibold text-gray-200">
                            <i className="fa-regular fa-calendar-days text-yellow-500"></i>
                            <a href="/convocatorias">Convocatorias</a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}
