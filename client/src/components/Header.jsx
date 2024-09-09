import React from 'react'

export const Header = () => {
  return (
    <>
      <header className="flex w-screen bg-gray-900 px-4 h-24 z-1 fixed">
        <nav className='flex flex-row w-screen px-4 justify-around'>
          <div className='flex flex-row items-center gap-2 text-2xl relative right-14 font-semibold text-gray-100'>
            <img className='h-13 w-14 p-1' src="/src/assets/img/spot.png" alt="icon Spot" />
            <h1>Spotlight</h1>
          </div>
          <div className='flex w-auto h-28 p-2 relative right-10'>
            <ul className='flex gap-40 justify-between h-20 items-end font-semibold text-lg text-gray-100'>
              <li className=' rounded p-1 hover:bg-gray-800 hover:delay-100 hover:font-bold flex flex-col gap-1 text-center'>
                <i class="fa-solid fa-filter text-red-500"></i>
                <a href="/home">Descubrir</a>
              </li>
              <li className='rounded p-1 hover:bg-gray-800 hover:delay-100 hover:font-bold flex flex-col gap-1 text-center'>
                <i class="fa-solid fa-scale-balanced text-red-500"></i>
                <a href="/reglas">Reglas</a>
              </li>
              <li className='rounded p-1 hover:bg-gray-800 hover:delay-100 hover:font-bold flex flex-col gap-1 text-center'>
                <i class="fa-solid fa-user-group text-red-500"></i>
                <a href="/comunidad">Comunidad</a>
              </li>
              <li className='rounded p-1 hover:bg-gray-800 hover:delay-100 hover:font-bold flex flex-col gap-1 text-center'>
                <i class="fa-solid fa-headset text-red-500"></i>
                <a href="/soporte">Soporte</a>
              </li>
            </ul>
          </div>
          <div className='flex h-30 items-center gap-4'>
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded h-12'>
              Dark
            </button>
            <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded h-12'>
              Cerrar Sesion
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

