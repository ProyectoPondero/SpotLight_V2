import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center">

                    {/* Sección de opciones a la izquierda */}
                    <div className="mb-4 sm:mb-0">
                        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                            <li>
                                <a href="#!" className="hover:text-gray-400 transition duration-300">Inicio</a>
                            </li>
                            <li>
                                <a href="#!" className="hover:text-gray-400 transition duration-300">Perfil</a>
                            </li>
                            <li>
                                <a href="#!" className="hover:text-gray-400 transition duration-300">Convocatorias</a>
                            </li>
                        </ul>
                    </div>

                    {/* Sección del nombre del sitio en el centro */}
                    <div className="text-center mb-4 sm:mb-0">
                        <h5 className="text-xl font-semibold">Mi Sitio Web</h5>
                        <p>© 2024 Todos los derechos reservados.</p>
                    </div>

                    {/* Sección de redes sociales a la derecha */}
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                            <i className="fab fa-facebook-f text-xl"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
