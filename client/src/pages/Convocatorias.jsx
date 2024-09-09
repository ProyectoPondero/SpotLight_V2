import React, { useEffect, useState } from 'react';

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
    <div className="p-32" id="convocatorias-container">
      {convocatorias.length > 0 ? (
        convocatorias.map((convocatoria, index) => (
          <article key={index} className="articuloCartas">
            <div className="contenedorCartas">
              <div className="contenidoCarta">
                <h2 className="tituloConvocatoria">{convocatoria.titulo}</h2>
                <p className="parrafoConvocatoria">{convocatoria.bajada}</p>
                <img
                  className="imagenConvocatoria"
                  src={convocatoria.imagen}
                  alt={convocatoria.titulo}
                />
              </div>
              <a
                className="linkConvocatoria"
                type="button"
                href={convocatoria.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Más información
              </a>
            </div>
          </article>
        ))
      ) : (
        <p>No hay convocatorias disponibles.</p>
      )}
    </div>
  );
};

export default Convocatorias;
