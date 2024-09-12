import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center">

                    {/* Sección de opciones a la izquierda */}
                    <div className="text-center mb-4 sm:mb-0 flex flex-col items-center gap-2 p-3">
                        <article className='flex items-center gap-3'>
                            <img className='h-12 w-12' src="src/assets/img/spot.png" alt="IconoSpot" />
                            <h5 className="text-xl font-semibold">Equipo SpotLight</h5>
                        </article>
                    </div>

                    <div className="flex flex-col gap-3 font-bold text-white p-2 items-center">
                        <div className='flex gap-24 items-center'>
                            <img className='w-12 h-12' src="/src/assets/img/sponsor.png" alt="" />
                            <img className='h-12 w-12' src="/src/assets/img/ipf.png" alt="" />
                            <img className='w-14 h-14' src="/src/assets/img/linkedin.png" alt="" />
                        </div>
                        <span className='font-sans box-border text-sm text-gray-200'>
                            SPONSORS DEL PROYECTO
                        </span>
                    </div>

                    {/* Sección del nombre del sitio en el centro */}

                    {/* Sección de redes sociales a la derecha */}
                    <div className="flex space-x-6 flex-row px-10 ">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                            <i className="fab fa-facebook-f text-3xl text-blue-500"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                            <i className="fab fa-twitter text-3xl text-cyan-500"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                            <i className="fab fa-instagram text-3xl text-rose-500"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
