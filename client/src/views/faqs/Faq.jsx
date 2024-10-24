import React, { useState } from 'react';
import { Header } from '../../components/Header.jsx';
import { Footer } from '../../components/Footer.jsx';

export const Faq = () => {
    const [contenido, setContenido] = useState('');

    const mostrarContenido = (id) => {
        const parrafos = {
          1:["Editar información del perfil", "1) Debes dirigirte hacia tu perfil presionando el ícono de arriba a la derecha", "2) Al ingresar a tu perfil encontrarás un botón que dice *Editar Perfil*", "3) Al presionarlo se desplegará un modal en el cual podrás ingresar la nueva información que quieres que se visualice en tu perfíl"],
          2:["Cómo contactarte con otro usuario", "1) Para iniciar una conversación con otros usuarios de la plataforma se habilitará un apartado de mensajes donde se podrá conversar en un chat general con personas de distintas partes del país.", "2) Puedes dirigirte al perfil de un usuario y decidir mandarle un mensaje privado para entablar una conversación y compartir intereses."],
          3:["Crear una convocatoria", "1) Para crear una nueva convocatoria debes dirigirte al apartado *Descubre* en la barra de navegación y luego seleccionar Convocatorias.", "2) Debes completar el formulario e ingresar un flyer de tu evento para llamar más la atención", "3) Publica tu convocatoria y se mostrará junto a todas las demás."],
          4:["Contacto con el soporte técnico", "1) Para contactarte con nuestro equipo debes dirigirte al apartado de soporte en la barra de navegación", "2) Selecciona que tipo de reporte quieres hacer:", "A) Sugerencia: Si tienes algun idea para mejorar la experiencia de usuario de la plataforma nos encantaría saber tu opinión!", "B) Reporte: Si tienes algún tipo de inquietud y deseas ayuda de los administradores", "C) Consulta: Si tienes alguna otra duda que te gustaría saber", "La respuesta de los administradores la recibirás a través de tu correo electrónico registrado en la plataforma."],
          5:["En desarrollo.."],
          6:["En desarrollo.."],
        };
        setContenido(parrafos[id]);
    };

    return (
        <>
            <Header />
            <div className="flex justify-center">
                <main className="bg-slate-200 dark:bg-gray-600 w-screen min-h-screen">
                    <div className='mt-24 py-4 bg-slate-200 dark:bg-gray-600 min-h-screen'>
                        <div className='shadow-md bg-gray-50 mb-3 mx-8 p-2 rounded-xl'>
                            <p className='w-full flex justify-center font-semibold text-red-500 text-lg'>FAQS</p>
                            <p className='w-full flex justify-center font-bold'>¿Qué deseas saber?</p>
                            <section className='flex w-full justify-around mt-4'>
                                <div className='p-1'>
                                    <p className='font-semibold text-md'>Escoge lo que deseas saber</p>
                                </div>
                                <div className='p-1'>
                                    <p className='font-semibold text-md'>Tu respuesta la visualizarás aquí</p>
                                </div>
                            </section>
                        </div>
                        <div className=' px-10 flex flex-row justify-center'>
                            <div className='w-auto lg:grid grid-cols-2 gap-8 sm:flex sm:flex-col'>
                                <details name='faq' className='mt-4' onClick={() => mostrarContenido(1)}>
                                    <summary className='shadow-md rounded-md p-2 flex justify-center items-center bg-gray-100 h-full'>¿Cómo puedo cambiar la información de mi perfíl?</summary>
                                </details>
                                <details name='faq' className='mt-4' onClick={() => mostrarContenido(2)}>
                                    <summary className='shadow-md rounded-md p-2 flex justify-center items-center bg-gray-100 h-full'>¿Cómo me puedo contactar con otro usuario?</summary>
                                </details>
                                <details name='faq' className='mt-4' onClick={() => mostrarContenido(3)}>
                                    <summary className='shadow-md rounded-md p-2 flex justify-center items-center bg-gray-100 h-full'>¿Cómo puedo crear una convocatoria?</summary>
                                </details>
                                <details name='faq' className='mt-4' onClick={() => mostrarContenido(4)}>
                                    <summary className='shadow-md rounded-md p-2 flex justify-center items-center bg-gray-100 h-full'>¿Cómo puedo reportar un problema?</summary>
                                </details>
                                <details name='faq' className='mt-4' onClick={() => mostrarContenido(5)}>
                                    <summary className='shadow-md rounded-md p-2 flex justify-center items-center bg-gray-100 h-full'>¿Cómo puedo cambiar mi contraseña?</summary>
                                </details>
                                <details name='faq' className='mt-4' onClick={() => mostrarContenido(6)}>
                                    <summary className='shadow-md rounded-md p-2 flex justify-center items-center bg-gray-100 h-full'>¿Cómo puedo darme de baja de la plataforma?</summary>
                                </details>

                            </div>

                            <div className='w-3/4 ml-10 bg-white p-4 rounded shadow'>
                                <div className='text-gray-700 font-medium leading-relaxed'>
                                    {Array.isArray(contenido) ? contenido.map((p, idx) => (
                                        <p key={idx} className="mb-4 flex items-center">{p}</p>
                                    )) : <p>{contenido}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};