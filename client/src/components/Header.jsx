import React, { useState, useEffect } from 'react';
import Dropdown from './buttons/Botones.jsx';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  // Obtener el tema de localStorage cuando se monta el componente
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    setTheme(savedTheme);
  }, []);

  // Función para alternar el tema
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark');
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="flex w-full bg-slate-200 px-4 h-20 z-1 fixed border-b-1 dark:border-red-400 shadow-lg dark:shadow-none  dark:bg-gray-900">
        <nav className='flex justify-evenly items-center px-4 w-screen gap-9'>
          <div className='flex items-center font-bold text-black dark:text-gray-100'>
            <img className='h-10 md:h-12 p-1' src="/src/assets/img/spot.png" alt="icon Spot" />
            <h1 className='p-2 pl-2 md:text-2xl sm:text-xl'>Spotlight</h1>
          </div>

          {/* Botón de menú hamburguesa para pantallas pequeñas */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <i className={`fa-solid ${menuOpen ? 'fa-times' : 'fa-bars'} text-white text-3xl`}></i>
            </button>
          </div>

          {/* Menú principal en pantallas grandes */}
          <div className='hidden md:flex w-4/5 justify-between md:items-end'>
            <ul className='flex text-lg gap-1 font-bold dark:text-gray-100 relative top-1'>
              <li className='rounded px-2 flex items-end hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-yellow-500 hover:font-bold py-1'>
                <a href="/home">Home</a>
              </li>
              <li className='rounded px-2 flex items-end hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-yellow-500 hover:font-bold py-1'>
                <a href="/comunidad">Mensajes</a>
              </li>
              <li className='rounded px-2 flex items-end hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-yellow-500 hover:font-bold py-1'>
                <a href="/soporte">Soporte</a>
              </li>
              <li>
                <Dropdown />
              </li>
            </ul>

            <div className='flex items-center gap-4'>
              <button className='px-2 rounded-full h-8 flex items-center'>
                <a href="/perfil">
                  <i className="fa-solid fa-user text-gray-500 hover:text-black dark:hover:text-white text-2xl"></i>
                </a>
              </button>
              <button className='bg-gray-800 hover:bg-red-500 text-gray-100 font-bold py-2 px-4 rounded border-1 border-red-800'>
                Logout
              </button>
              <a onClick={toggleTheme} className='py-1 px-2 bg-slate-200 dark:bg-gray-900 rounded-full'>
                {theme === 'dark' ? <i class="fa-solid fa-sun text-2xl text-white font-semibold hover:text-yellow-500"></i> : <i class="fa-solid fa-moon text-2xl font-semibold text-black hover:text-blue-900 "></i>}
              </a>
            </div>
          </div>
        </nav>

        {/* Menú desplegable para pantallas pequeñas */}
        {menuOpen && (
          <div className="md:hidden dark:bg-gray-900 w-full dark:text-gray-100 pt-20">
            <ul className='flex flex-col items-center text-lg gap-4 p-4 shadow-lg bg-slate-200 dark:bg-gray-900 rounded'>
              <li className='rounded p-2'>
                <button className='border border-red-600 px-2 rounded-full h-8 flex items-center'>
                  <a href="/perfil">
                    <i className="fa-solid fa-user text-red-600"></i>
                  </a>
                </button>
              </li>
              <li className='rounded px-2 flex items-end hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-yellow-500 font-bold py-1'>
                <a href="/home">Home</a>
              </li>
              <li className='rounded px-2 flex items-end hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-yellow-500 font-bold py-1'>
                <a href="/soporte">Soporte</a>
              </li>
              <li className='rounded px-2 flex items-end hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-yellow-500 font-bold py-1'>
                <a href="/comunidad">Mensajes</a>
              </li>
              <li className='rounded p-2 font-bold'>
                <Dropdown />
              </li>
              <li className='rounded p-2'>
                <a onClick={toggleTheme} className='py-1 px-2 bg-black dark:bg-white rounded-full'>
                  {theme === 'dark' ? <i class="fa-solid fa-sun text-1xl text-black font-semibold"></i> : <i class="fa-solid fa-moon text-1xl font-semibold text-white"></i>}
                </a>
              </li>
              <li className='rounded p-2'>
                <button className='bg-red-600 hover:bg-red-500 text-gray-300 font-bold py-2 px-4 rounded'>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};
