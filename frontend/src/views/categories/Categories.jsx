import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { getPublications } from '../../services/publication.service';

export const Categories = () => {
    const [category, setCategory] = useState(''); // Estado para almacenar la categoría seleccionada
    const [publications, setPublications] = useState([]); // Estado para almacenar las publicaciones
    const [loading, setLoading] = useState(true); // Estado de carga

    useEffect(() => {
        const fetchPublications = async () => {
            setLoading(true);
            try {
                // Obtener publicaciones y filtrar por la categoría seleccionada
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
    }, [category]); // Actualizar publicaciones cuando cambia la categoría

    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    return (
        <>
            <Header />
            <main className="w-full min-h-screen dark:bg-gray-800">
                <div className="pt-24 px-4">
                    <h1 className="text-white font-bold text-2xl mb-4">Selecciona una Categoría</h1>

                    {/* Botones de categorías */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <button onClick={() => handleCategoryClick('')} className="py-2 px-4 bg-gray-500 text-white rounded">Todas</button>
                        <button onClick={() => handleCategoryClick('Tecnología')} className="py-2 px-4 bg-blue-500 text-white rounded">Tecnología</button>
                        <button onClick={() => handleCategoryClick('Deportes')} className="py-2 px-4 bg-blue-500 text-white rounded">Deportes</button>
                        <button onClick={() => handleCategoryClick('Educación')} className="py-2 px-4 bg-blue-500 text-white rounded">Educación</button>
                        <button onClick={() => handleCategoryClick('Gaming')} className="py-2 px-4 bg-blue-500 text-white rounded">Gaming</button>
                        <button onClick={() => handleCategoryClick('Ciencias')} className="py-2 px-4 bg-blue-500 text-white rounded">Ciencias</button>
                        <button onClick={() => handleCategoryClick('Música')} className="py-2 px-4 bg-blue-500 text-white rounded">Música</button>
                        <button onClick={() => handleCategoryClick('Sociales')} className="py-2 px-4 bg-blue-500 text-white rounded">Sociales</button>
                    </div>

                    {/* Mostrar publicaciones filtradas */}
                    <ul className="w-full flex flex-col items-center pt-8">
                        {loading ? (
                            <p className="text-white">Cargando publicaciones...</p>
                        ) : publications.length > 0 ? (
                            publications.map((publication, index) => (
                                <li key={index} className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-4 bg-white dark:bg-gray-800 shadow-md w-3/4">
                                    <h1>{publication.author}</h1>
                                    <h2 className="text-xl font-semibold mb-2 dark:text-gray-300">{publication.title}</h2>
                                    <p className="text-gray-700 dark:text-gray-400 mb-4">{publication.description}</p>
                                    <div className='w-full flex justify-center'>
                                        {publication.secure_url.match(/\.(mp4|webm|ogg|ogv)$/i) ? (
                                            <video src={publication.secure_url} controls className="rounded-lg w-full">
                                                Tu navegador no soporta el video.
                                            </video>
                                        ) : (
                                            <img src={publication.secure_url} alt={publication.title} className="rounded-lg w-full" />
                                        )}
                                    </div>
                                    <p className="text-green-700 font-bold">Categoría: {publication.category}</p>
                                </li>
                            ))
                        ) : (
                            <p className="text-white">No hay publicaciones disponibles para esta categoría.</p>
                        )}
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    );
};
