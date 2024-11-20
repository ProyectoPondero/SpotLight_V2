import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { getPublications } from '../../services/publication.service';
import { useProfile } from '../../contexts/profile/profileContext';

const CATEGORIES = [
    { id: '', label: 'Todas', color: 'bg-emerald-600 hover:bg-emerald-700' },
    { id: 'Tecnología', label: 'Tecnología', color: 'bg-blue-600 hover:bg-blue-700' },
    { id: 'Deportes', label: 'Deportes', color: 'bg-red-600 hover:bg-red-700' },
    { id: 'Educación', label: 'Educación', color: 'bg-slate-600 hover:bg-slate-700' },
    { id: 'Gaming', label: 'Gaming', color: 'bg-violet-600 hover:bg-violet-700' },
    { id: 'Arte', label: 'Arte', color: 'bg-cyan-600 hover:bg-cyan-700' },
    { id: 'Música', label: 'Música', color: 'bg-pink-600 hover:bg-pink-700' },
    { id: 'Teatro', label: 'Teatro', color: 'bg-amber-600 hover:bg-amber-700' }
];

export const Categories = () => {
    const [category, setCategory] = useState('');
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);
    const { state: { profile }, getProfileData } = useProfile();

    useEffect(() => {
        getProfileData();
    }, []);

    useEffect(() => {
        const fetchPublications = async () => {
            setLoading(true);
            try {
                const data = await getPublications();
                const filteredData = category ? data.filter(pub => pub.category === category) : data;
                setPublications(filteredData);
            } catch (error) {
                console.error("Error al obtener publicaciones:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPublications();
    }, [category]);

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Explora por Categoría
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Descubre contenido increíble filtrado por tus intereses
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setCategory(cat.id)}
                                className={`
                                    ${cat.color} px-6 py-2.5 rounded-full text-white font-medium
                                    transform transition-all duration-300 ease-in-out
                                    hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2
                                    ${category === cat.id ? 'scale-105 shadow-lg' : 'hover:scale-105'}
                                `}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-8">
                        {loading ? (
                            <div className="flex justify-center items-center py-20">
                                <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
                            </div>
                        ) : publications.length > 0 ? (
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {publications.map((publication, index) => (
                                    <article key={index}
                                        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl 
                                        transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                                        <div className="p-6 space-y-6">
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500"
                                                    src={publication.avatar ? publication.avatar : "https://via.placeholder.com/150"}
                                                    alt="Foto de perfil"
                                                />
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 dark:text-white">
                                                        @{publication.author}
                                                    </h3>
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm 
                                                        font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                                                        {publication.category}
                                                    </span>
                                                </div>
                                            </div>

                                            <div>
                                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                    {publication.title}
                                                </h2>
                                                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                                                    {publication.description}
                                                </p>
                                            </div>

                                            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                                                {publication.secure_url.match(/\.(mp4|webm|ogg|ogv)$/i) ? (
                                                    <video
                                                        src={publication.secure_url}
                                                        controls
                                                        className="w-full h-64 object-cover"
                                                    >
                                                        Tu navegador no soporta el video.
                                                    </video>
                                                ) : (
                                                    <img
                                                        src={publication.secure_url}
                                                        alt={publication.title}
                                                        className="w-full h-64 object-cover transition-transform duration-300 
                                                        hover:scale-105"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                                <p className="text-xl text-gray-600 dark:text-gray-300">
                                    No hay publicaciones disponibles para esta categoría.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};