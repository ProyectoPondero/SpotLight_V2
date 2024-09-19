import React, { useState } from "react";
import Dropdown from "./buttons/Botones.jsx";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="flex w-full bg-gray-900 px-4 h-16 z-50 fixed border-b-2 border-red-400">
        <nav className="flex justify-evenly items-center px-4 w-screen gap-9">
          <div className="flex items-center font-semibold text-gray-100">
            <img
              className="h-10 md:h-12 p-1"
              src="/src/assets/img/spot.png"
              alt="icon Spot"
            />
            <h1 className="p-2 pl-2 md:text-2xl sm:text-xl">Spotlight</h1>
          </div>

          {/* Botón de menú hamburguesa para pantallas pequeñas */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <i
                className={`fa-solid ${
                  menuOpen ? "fa-times" : "fa-bars"
                } text-white text-3xl`}
              ></i>
            </button>
          </div>

          {/* Menú principal en pantallas grandes */}
          <div className="hidden md:flex w-4/5 justify-between md:items-end">
            <ul className="flex text-lg text-gray-100">
              <li className="rounded px-2 flex items-end hover:bg-gray-800 hover:text-yellow-500 hover:font-bold">
                <a href="/home">Home</a>
              </li>
              <li className="rounded px-2 flex items-end hover:bg-gray-800 hover:text-yellow-500 hover:font-bold">
                <a href="/comunidad">Mensajes</a>
              </li>
              <li className="rounded px-2 flex items-end hover:bg-gray-800 hover:text-yellow-500 hover:font-bold">
                <a href="/soporte">Soporte</a>
              </li>
              <li>
                <Dropdown />
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <button className="border border-red-600 px-2 rounded-full h-8 flex items-center">
                <a href="/perfil">
                  <i className="fa-solid fa-user text-red-600"></i>
                </a>
              </button>
              <button className="bg-red-600 hover:bg-red-500 text-gray-300 font-bold py-2 px-4 rounded h-10">
                Logout
              </button>
            </div>
          </div>
        </nav>

        {/* Menú desplegable para pantallas pequeñas */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900 w-full text-gray-100 pr-40">
            <ul className="flex flex-col items-center text-lg gap-4 p-4 bg-gray-900 rounded">
              <li className="rounded p-2">
                <button className="border border-red-600 px-2 rounded-full h-8 flex items-center">
                  <a href="/perfil">
                    <i className="fa-solid fa-user text-red-600"></i>
                  </a>
                </button>
              </li>
              <li className="rounded p-2 hover:bg-gray-800 hover:text-yellow-500 hover:font-bold">
                <a href="/home">Home</a>
              </li>
              <li className="rounded p-2 hover:bg-gray-800 hover:text-yellow-500 hover:font-bold">
                <a href="/soporte">Soporte</a>
              </li>
              <li className="rounded p-2 hover:bg-gray-800 hover:text-yellow-500 hover:font-bold">
                <a href="/comunidad">Mensajes</a>
              </li>
              <li className="rounded p-2">
                <Dropdown />
              </li>
              <li className="rounded p-2">
                <button className="bg-red-600 hover:bg-red-500 text-gray-300 font-bold py-2 px-4 rounded">
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
