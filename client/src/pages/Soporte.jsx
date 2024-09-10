import React, { useState } from 'react';

const FormularioSoporte = () => {
    const [asunto, setAsunto] = useState('');
    const [comentarios, setComentarios] = useState('');
    const [aceptarTerminos, setAceptarTerminos] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (aceptarTerminos) {
            // Aquí puedes manejar el envío del formulario
            console.log("Formulario enviado con los datos:", { asunto, comentarios, aceptarTerminos });
        } else {
            alert("Por favor, acepta los términos y condiciones.");
        }
    };

    return (
        <article className="formulario m-40 flex items-center bg-red-600">
            <div className="imagenFormulario"></div>
            <form id="formularioSoporte" className='p-4' onSubmit={handleSubmit}>
                <section className="asuntoSoporte">
                    <label htmlFor="Asunto">Asunto</label>
                    <select
                        className="selectSoporte"
                        name="Asunto"
                        value={asunto}
                        onChange={(e) => setAsunto(e.target.value)}
                    >
                        <option value="">Elige un Asunto...</option>
                        <option value="Errores del Sitio Web">Errores del Sitio Web</option>
                        <option value="Consultas">Consultas</option>
                        <option value="Sugerencias">Sugerencias</option>
                    </select>
                </section>
                <section className="seccionComentarios">
                    <label htmlFor="Comentarios">Comentarios</label>
                    <textarea
                        className="textoSoporte"
                        name="Comentarios"
                        value={comentarios}
                        onChange={(e) => setComentarios(e.target.value)}
                        required
                        minLength="25"
                    ></textarea>
                </section>
                <section>
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={aceptarTerminos}
                        onChange={() => setAceptarTerminos(!aceptarTerminos)}
                        required
                    />
                    <span>Acepta los términos y condiciones.</span>
                </section>
                <div className="botonSubmit">
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </article>
    );
};

export default FormularioSoporte;
