import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header.jsx';
import { Footer } from '../../components/Footer.jsx';

export const Convocatorias = () => {
    const [convocatorias, setConvocatorias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchConvocatorias = async () => {
            try {
                const response = await fetch('/api.json');
                if (!response.ok) {
                    throw new Error('No se pudieron cargar las convocatorias');
                }
                const data = await response.json();
                if (data.results) {
                    setConvocatorias(data.results);
                } else {
                    throw new Error('Formato de datos inválido');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchConvocatorias();
    }, []);

    const renderContent = () => {
        if (loading) {
            return (
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
                </div>
            );
        }

        if (error) {
            return (
                <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg max-w-lg">
                        <p className="font-bold">Error</p>
                        <p>{error}</p>
                    </div>
                </div>
            );
        }

        if (convocatorias.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg max-w-lg">
                        <p className="font-bold">No hay convocatorias</p>
                        <p>En este momento no hay convocatorias disponibles. Por favor, vuelve más tarde.</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                {convocatorias.map((convocatoria, index) => (
                    <article
                        key={index}
                        className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                                src={convocatoria.imagen}
                                alt={convocatoria.titulo}
                                loading="lazy"
                            />
                        </div>

                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                                {convocatoria.titulo}
                            </h2>

                            <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                                {convocatoria.bajada}
                            </p>

                            <div className="flex justify-center">
                                <a
                                    href={convocatoria.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 rounded-lg bg-red-500 text-white font-semibold transition-all duration-200 hover:bg-red-600 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                >
                                    Más información
                                    <svg
                                        className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
            <Header />
            <main className="flex-grow pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Convocatorias
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Descubre las últimas oportunidades y participa en nuestras convocatorias abiertas.
                        </p>
                    </div>
                    {renderContent()}
                </div>
            </main>
            <Footer />
        </div>
    );
};