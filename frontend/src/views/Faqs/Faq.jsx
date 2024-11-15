import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header.jsx';
import { Footer } from '../../components/Footer.jsx';

export const Faq = () => {
    const [contenido, setContenido] = useState('');
    const [activeDetail, setActiveDetail] = useState(null);

    const mostrarContenido = (id) => {
        setActiveDetail(id);
        const parrafos = {
            1: ["Editar información del perfil", "1) Debes dirigirte hacia tu perfil presionando el ícono de arriba a la derecha", "2) Al ingresar a tu perfil encontrarás un botón que dice *Editar Perfil*", "3) Al presionarlo se desplegará un modal en el cual podrás ingresar la nueva información que quieres que se visualice en tu perfíl"],
            2: ["Cómo contactarte con otro usuario", "1) Para iniciar una conversación con otros usuarios de la plataforma se habilitará un apartado de mensajes donde se podrá conversar en un chat general con personas de distintas partes del país.", "2) Puedes dirigirte al perfil de un usuario y decidir mandarle un mensaje privado para entablar una conversación y compartir intereses."],
            3: ["Crear una convocatoria", "1) Para crear una nueva convocatoria debes dirigirte al apartado *Descubre* en la barra de navegación y luego seleccionar Convocatorias.", "2) Debes completar el formulario e ingresar un flyer de tu evento para llamar más la atención", "3) Publica tu convocatoria y se mostrará junto a todas las demás."],
            4: ["Contacto con el soporte técnico", "1) Para contactarte con nuestro equipo debes dirigirte al apartado de soporte en la barra de navegación", "2) Selecciona que tipo de reporte quieres hacer:", "A) Sugerencia: Si tienes algun idea para mejorar la experiencia de usuario de la plataforma nos encantaría saber tu opinión!", "B) Reporte: Si tienes algún tipo de inquietud y deseas ayuda de los administradores", "C) Consulta: Si tienes alguna otra duda que te gustaría saber", "La respuesta de los administradores la recibirás a través de tu correo electrónico registrado en la plataforma."],
            5: ["En desarrollo.."],
            6: ["En desarrollo.."],
        };
        setContenido(parrafos[id]);
    };

    const faqItems = [
        { id: 1, question: "¿Cómo puedo cambiar la información de mi perfíl?" },
        { id: 2, question: "¿Cómo me puedo contactar con otro usuario?" },
        { id: 3, question: "¿Cómo puedo crear una convocatoria?" },
        { id: 4, question: "¿Cómo puedo reportar un problema?" },
        { id: 5, question: "¿Cómo puedo cambiar mi contraseña?" },
        { id: 6, question: "¿Cómo puedo darme de baja de la plataforma?" }
    ];

    return (
        <>
            <Header />
            <div className="flex justify-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-800 dark:to-gray-900 p-10">
                <main className="w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                            Preguntas Frecuentes
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Encuentra respuestas a las preguntas más comunes
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 space-y-4">
                            {faqItems.map((item) => (
                                <details
                                    key={item.id}
                                    open={activeDetail === item.id}
                                    className="group rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        mostrarContenido(item.id);
                                    }}
                                >
                                    <summary className="cursor-pointer px-4 py-6 flex items-center justify-between">
                                        <span className="font-medium text-gray-900 dark:text-white">
                                            {item.question}
                                        </span>
                                        <span className="ml-6 flex-shrink-0">
                                            <div className={`h-6 w-6 rounded-full flex items-center justify-center border-2 transition-transform duration-200 ${activeDetail === item.id ? 'rotate-180 border-indigo-600 dark:border-indigo-400' : 'border-gray-300 dark:border-gray-600'}`}>
                                                <div className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                                            </div>
                                        </span>
                                    </summary>
                                </details>
                            ))}
                        </div>

                        <div className="lg:col-span-2">
                            <div className="h-full rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 shadow-lg">
                                {contenido ? (
                                    <div className="space-y-6">
                                        {Array.isArray(contenido) && contenido.map((p, idx) => (
                                            <div key={idx} className={`${idx === 0 ? 'text-xl font-semibold text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                                                {p}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                                        Selecciona una pregunta para ver la respuesta
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-600 dark:text-gray-300">
                            ¿No encontraste lo que buscabas? Visita nuestro{' '}
                            <Link 
                                to="/support" 
                                className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium hover:underline transition-colors"
                            >
                                centro de soporte
                            </Link>
                        </p>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Faq;