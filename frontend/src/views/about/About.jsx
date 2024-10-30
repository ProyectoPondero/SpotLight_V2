import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const About = () => {
    return (
        <>
            <Header />
            <div className="flex justify-center items-center min-h-screen bg-slate-200 dark:bg-gray-600">
                <div className="w-full max-w-4xl p-4">
                    <section className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
                        <h1 className="font-bold text-4xl text-center mb-4">Un poco sobre nosotros...</h1>
                        <div className='flex justify-center'>
                            <div className='w-1/2'>
                                <p className='text-center text-lg mt-4'>
                                    Somos una empresa que se dedica a la creación de aplicaciones web y móviles, con el fin de facilitar la vida de las personas. Nuestro objetivo es que nuestros clientes tengan una experiencia agradable y sencilla al utilizar nuestras aplicaciones.
                                </p>
                            </div>
                        </div>
                        <h2 className="font-bold text-2xl text-center mt-8">Nuestro equipo</h2>
                        <div className='flex flex-row justify-center mt-8 space-x-4 lg:flex-col md:flex-col sm:flex-col'>

                            <img src="/src/assets/images/EMILIO.png" alt="Emilio" className="rounded-full w-32 h-32 object-cover" />
                            <div>
                                <img src="/src/assets/images/CRIS.png" alt="Cris" className="rounded-full w-32 h-32 object-cover" />
                                <p className='text-center'>cris peladin</p>
                            </div>


                            <img src="/src/assets/images/MARCE.png" alt="Other" className="rounded-full w-32 h-32 object-cover" />
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};
