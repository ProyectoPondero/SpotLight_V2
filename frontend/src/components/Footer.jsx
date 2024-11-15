import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-t border-gray-300 dark:border-gray-700">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
                    {/* Brand Section */}
                    <div className="flex flex-col items-center sm:items-start space-y-2">
                        <div className="flex items-center space-x-3 group">
                            <img
                                className="h-12 w-12 object-contain transform group-hover:scale-105 transition-transform"
                                src="/spotlight.ico"
                                alt="Spotlight"
                            />
                            <h5 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                Equipo Spotlight
                            </h5>
                        </div>
                    </div>

                    {/* Sponsors Section */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex items-center space-x-8">
                            <img
                                className="h-12 w-auto object-contain hover:opacity-90 transition-opacity"
                                src="/src/assets/images/sponsor.png"
                                alt="Sponsor"
                            />
                            <img
                                className="h-12 w-auto object-contain hover:opacity-90 transition-opacity"
                                src="/src/assets/images/ipf.png"
                                alt="IPF"
                            />
                            <img
                                className="h-14 w-auto object-contain hover:opacity-90 transition-opacity"
                                src="/src/assets/images/linkedin.png"
                                alt="LinkedIn"
                            />
                        </div>
                        <span className="text-sm font-semibold tracking-wide text-gray-600 dark:text-gray-400">
                            SPONSORS DEL PROYECTO
                        </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                        <Link
                            to="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <i className="fab fa-facebook-f text-2xl text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 transition-colors"></i>
                        </Link>
                        <Link
                            to="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <i className="fab fa-twitter text-2xl text-cyan-600 hover:text-cyan-700 dark:text-cyan-500 dark:hover:text-cyan-400 transition-colors"></i>
                        </Link>
                        <Link
                            to="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <i className="fab fa-instagram text-2xl text-pink-600 hover:text-pink-700 dark:text-pink-500 dark:hover:text-pink-400 transition-colors"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
                .social-link {
                    padding: 0.75rem;
                    border-radius: 9999px;
                    transition: all 0.2s;
                }
                .social-link:hover {
                    transform: translateY(-2px);
                    background-color: rgba(255, 255, 255, 0.1);
                }
                .dark .social-link:hover {
                    background-color: rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </footer>
    );
};