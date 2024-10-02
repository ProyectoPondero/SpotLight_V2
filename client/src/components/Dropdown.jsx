import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
    // Estado para controlar si el menú dropdown está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false);

    // Función para mostrar el menú cuando el mouse se coloca sobre el botón
    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    // Función para ocultar el menú cuando el mouse se retira del botón
    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div
            className="relative inline-block text-left"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Botón que controla el dropdown */}
            <button
                className="rounded px-2 flex items-end hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-yellow-500 hover:font-bold py-1 "
            >
                <p className="text-lg px-2 flex items-end w-24">Descubre</p>
                <svg
                    className="-mr-1 ml-2 h-5 w-5 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Menú dropdown */}
            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-0.5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1" role="none">
                        <Link
                            to="/convocations"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >
                            Convocatorias
                        </Link>
                        <Link
                            to="/comunidad"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >
                            Comunidad
                        </Link>
                        <Link
                            to="/about"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >
                            Sobre Nosotros
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;