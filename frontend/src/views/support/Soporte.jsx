import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header.jsx';
import { Footer } from '../../components/Footer.jsx';
import emailjs from 'emailjs-com'; // Importar EmailJS
import { getUserInfo } from '../../services/auth.service.js';

export const Soporte = () => {
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [terminos, setTerminos] = useState(false);
    const [email, setEmail] = useState(''); // Estado para el correo del usuario
    const [name, setUsername] = useState('');
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Estado de error

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const { userName, email } = await getUserInfo(); // Llama a la función para obtener el nombre y el correo
                setEmail(email); // Establece el correo del usuario en el estado
                setUsername(userName); // Establece el nombre del usuario en el estado
            } catch (err) {
                console.error(err);
                setError(err.message); // Maneja el error
            } finally {
                setLoading(false); // Cambia el estado de carga
            }
        };

        fetchUserInfo(); // Llama a la función al montar el componente
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!terminos) {
            alert('Debes aceptar los términos y condiciones');
            return;
        }

        const templateParams = {
            subject: asunto,  
            message: mensaje,
            from_name: email || "Usuario Anónimo",  // Usa el correo del usuario o un valor por defecto
            to_name: name,  
        };

        emailjs.send("service_yi0vspu", "template_j952r6v", templateParams, "011krJV2xhHHrPVQb") 
            .then((response) => {
                console.log('Correo enviado con éxito!', response.status, response.text);
                setAsunto('');
                setMensaje('');
                setTerminos(false);
            }, (err) => {
                console.error('Error al enviar correo:', err);
            });
        };
        
        if (loading) {
            return <p>Cargando información del usuario...</p>; // Mensaje mientras se carga
    }

    if (error) {
        return <p>Error al obtener la información: {error}</p>; // Muestra el error si ocurre
    }

    return (
        <>
            <Header />
            <div className="flex justify-center">
                <main className="bg-slate-200 dark:bg-gray-400 min-h-screen w-screen">
                    <div className='pt-24 min-h-screen p-2 bg-hero-pattern bg-cover'>
                        <div className='mt-20 flex justify-center'>
                            <div className='flex border-3 rounded bg-gray-50 justify-center h-96 p-4 py-0 dark:bg-gray-700'>
                                <img className='rounded w-3/6 h-5/6 hidden md:block' src="/src/assets/images/soporte.png" alt="" />
                                <form className='flex flex-col h-auto py-12 justify-around md:px-8 sm:p-4 lg:px-2' onSubmit={handleSubmit}>
                                    <article className='flex flex-col gap-2 h-auto'>
                                        <label className='font-semibold text-lg dark:text-slate-100' htmlFor="asunto">¿Cuál es tu asunto?</label>
                                        <select 
                                            className='p-2 lg:w-auto md:w-auto sm:w-auto border shadow border-gray-300' 
                                            value={asunto} 
                                            onChange={(e) => setAsunto(e.target.value)} 
                                            required
                                        >
                                            <option value="">Seleccionar...</option>
                                            <option value="Sugerencia">Sugerencia</option>
                                            <option value="Reporte">Reporte</option>
                                            <option value="Consultas">Consultas</option>
                                        </select>
                                    </article>
                                    <article className='flex flex-col gap-2'>
                                        <label className='font-semibold text-lg dark:text-slate-200' htmlFor="mensaje">¿En qué piensas?</label>
                                        <textarea 
                                            className='h-24 border shadow-md p-2 border-gray-700 rounded' 
                                            value={mensaje} 
                                            onChange={(e) => setMensaje(e.target.value)} 
                                            required
                                        />
                                    </article>
                                    <article className='flex items-center gap-1'>
                                        <input 
                                            type="checkbox" 
                                            id="checkbox1" 
                                            name="checkbox1" 
                                            checked={terminos} 
                                            onChange={() => setTerminos(!terminos)} 
                                            required
                                        />
                                        <label className='dark:text-slate-200' htmlFor="checkbox1">He leído y acepto los términos y condiciones</label>
                                    </article>
                                    <div>
                                        <button 
                                            type="submit" 
                                            className='bg-gray-700 hover:bg-gray-600 text-white w-full py-2 rounded font-bold dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-400'
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};
