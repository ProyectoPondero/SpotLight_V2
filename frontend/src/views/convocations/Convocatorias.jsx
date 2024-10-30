import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header.jsx';
import { Footer } from '../../components/Footer.jsx';

export const Convocatorias = () => {
    const [convocatorias, setConvocatorias] = useState([]); // Estado para almacenar las convocatorias
    const [error, setError] = useState(null); // Estado para manejar errores de fetch

    useEffect(() => {
        fetch('/api.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.results) {
                    setConvocatorias(data.results);
                } else {
                    console.error('Data does not contain a "results" property:', data);
                }
            })
            .catch(error => {
                setError(error);
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <Header />
            <div className="flex justify-center">
                <main className="bg-slate-200 dark:bg-gray-700 min-h-screen w-full">
                    <div className="pt-24 pb-40 px-4 w-auto p-0 flex flex-wrap gap-4 bg-slate-200 dark:bg-gray-700 justify-center" id="convocatorias-container">
                        {convocatorias.length > 0 ? (
                            convocatorias.map((convocatoria, index) => (
                                <article key={index} className="articuloCartas">
                                    <div className="contenedorCartas w-80 shadow-xl p-3 dark:bg-gray-400 bg-gray-200 rounded h-auto">
                                        <div className="contenidoCarta h-auto flex items-center flex-col gap-4 p-4">
                                            <h2 className="tituloConvocatoria font-bold text-lg text-gray-700 dark:text-gray-900">{convocatoria.titulo}</h2>
                                            <p className="parrafoConvocatoria font-normal">{convocatoria.bajada}</p>
                                            <img
                                                className="imagenConvocatoria max-w-40 rounded"
                                                src={convocatoria.imagen}
                                                alt={convocatoria.titulo}
                                            />
                                        </div>
                                        <div className='flex justify-center'>
                                            <a
                                                className="linkConvocatoria bg-red-500 hover:bg-yellow-400 hover:text-blue-950 p-1 rounded text-white font-bold"
                                                type="button"
                                                href={convocatoria.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Más información
                                            </a>
                                        </div>
                                    </div>

                                </article>
                            ))
                        ) : (
                            <p>No hay convocatorias disponibles.</p>
                        )}
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};