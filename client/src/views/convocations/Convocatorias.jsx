import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header.jsx';
import { Footer } from '../../components/Footer.jsx';

const Convocatorias = () => {
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
                <main className="bg-slate-200 dark:bg-gray-400 min-h-screen w-screen">
                    <div className="pt-24 pb-40 px-40 w-auto p-0 flex flex-wrap gap-4 bg-gray-100 justify-center" id="convocatorias-container">
                        {convocatorias.length > 0 ? (
                            convocatorias.map((convocatoria, index) => (
                                <article key={index} className="articuloCartas">
                                    <div className="contenedorCartas w-96 bg-gradient-to-b dark:from-violet-200 rounded from-slate-400">
                                        <div className="contenidoCarta flex items-center flex-col gap-4 p-4">
                                            <h2 className="tituloConvocatoria font-bold text-lg text-gray-900 dark:text-black">{convocatoria.titulo}</h2>
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

export default Convocatorias;