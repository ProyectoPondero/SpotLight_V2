import React from 'react'
import { Header } from '../../components/Header.jsx';
import { Footer } from '../../components/Footer.jsx';

export const Soporte = () => {
    return (
        <>
            <Header />
            <div className="flex justify-center">
                <main className="bg-slate-200 dark:bg-gray-400 min-h-screen w-screen">
                    <div className='pt-24 min-h-screen p-2 bg-hero-pattern bg-cover'>
                        <div className='mt-20 flex justify-center'>
                            <div className='flex border-3 rounded bg-gray-50 justify-center h-96 p-4 py-0 dark:bg-gray-700'>
                                <img className='rounded w-3/6 h-5/6 hidden md:block' src="/src/assets/images/soporte.png" alt="" />
                                <form className='flex flex-col  h-auto py-12 justify-around md:px-8 sm:p-4 lg:px-2' action="">
                                    <article className='flex flex-col gap-2 h-auto'>
                                        <label className='font-semibold text-lg dark:text-slate-100' for="asunto">¿Cuál es tu asunto?</label>
                                        <select className='p-2 lg:w-auto md:w-auto sm:w-auto border shadow border-gray-300' name="opciones" id="">
                                            <option value="1">Sugerencia</option>
                                            <option value="2">Reporte</option>
                                            <option value="3">Consultas</option>
                                        </select>
                                    </article>
                                    <article className='flex flex-col gap-2'>
                                        <label className='font-semibold text-lg dark:text-slate-200' for="mensaje">¿En qué piensas?</label>
                                        <textarea className='h-24 borded shadow-md p-2 border-gray-700 rounded' name="mensaje" id=""></textarea>
                                    </article>
                                    <article className='flex items-center gap-1'>
                                        <input type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                                        <label className='dark:text-slate-200' for="checkbox1">He leído y acepto los términos y condiciones</label>
                                    </article>
                                    <div>
                                        <button type="submit" className='bg-gray-700 hover:bg-gray-600 text-white w-full py-2 rounded font-bold dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-400'>Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
};