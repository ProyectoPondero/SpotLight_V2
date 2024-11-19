import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header.jsx';
import { Footer } from '../../components/Footer.jsx';
import emailjs from 'emailjs-com';
import { getUserInfo } from '../../services/auth.service.js';

export const Soporte = () => {
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [terminos, setTerminos] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setUsername] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const { userName, email } = await getUserInfo();
                setEmail(email);
                setUsername(userName);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserInfo();
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
            from_name: email || "Usuario Anónimo",
            to_name: name,
        };

        emailjs.send("service_4msaut8", "template_sf5usqw", templateParams, "vK2lTVRTUDOgwkfQE")
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
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-900">
                <div className="animate-pulse text-xl font-semibold text-gray-700 dark:text-gray-300">
                    Cargando información del usuario...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-900">
                <div className="text-red-600 dark:text-red-400 text-xl font-semibold">
                    Error al obtener la información: {error}
                </div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 pt-24">
                    <div className="max-w-4xl mx-auto mt-12">
                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="relative hidden md:block">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                                    <img
                                        className="h-full w-full object-cover"
                                        src="/src/assets/images/soporte.png"
                                        alt="Soporte"
                                    />
                                </div>

                                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        ¿Cómo podemos ayudarte?
                                    </h2>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            ¿Cuál es tu asunto?
                                        </label>
                                        <select
                                            value={asunto}
                                            onChange={(e) => setAsunto(e.target.value)}
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                        >
                                            <option value="">Seleccionar...</option>
                                            <option value="Sugerencia">Sugerencia</option>
                                            <option value="Reporte">Reporte</option>
                                            <option value="Consultas">Consultas</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            ¿En qué piensas?
                                        </label>
                                        <textarea
                                            value={mensaje}
                                            onChange={(e) => setMensaje(e.target.value)}
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200 min-h-[120px] resize-none"
                                            placeholder="Escribe tu mensaje aquí..."
                                        />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            id="terminos"
                                            checked={terminos}
                                            onChange={() => setTerminos(!terminos)}
                                            required
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-400 dark:border-gray-600"
                                        />
                                        <label htmlFor="terminos" className="text-sm text-gray-600 dark:text-gray-400">
                                            He leído y acepto los términos y condiciones
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 transition-all duration-200 transform hover:scale-[1.02]"
                                    >
                                        Enviar mensaje
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};