import React from 'react';
import { Link } from 'react-router-dom';

export const Aside = () => {
    return (
        <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <nav className="p-4">
                    <ul className="space-y-2">
                        <li>
                            <Link
                                to="/faq"
                                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
                            >
                                <i className="fa-solid fa-circle-question text-red-500 text-lg group-hover:scale-110 transition-transform duration-200" />
                                <span className="hidden lg:block font-medium text-gray-700 dark:text-gray-200">
                                    FAQ
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/favorites"
                                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
                            >
                                <i className="fa-solid fa-star text-red-500 text-lg group-hover:scale-110 transition-transform duration-200" />
                                <span className="hidden lg:block font-medium text-gray-700 dark:text-gray-200">
                                    Favoritos
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/categories"
                                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
                            >
                                <i className="fa-solid fa-list text-red-500 text-lg group-hover:scale-110 transition-transform duration-200" />
                                <span className="hidden lg:block font-medium text-gray-700 dark:text-gray-200">
                                    Categorias
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>


            </div>
        </div>
    );
};