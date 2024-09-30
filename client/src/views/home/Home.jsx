import React from 'react'
import FormUploadfile from '../../components/FormUploadfile.jsx';
import { Header } from '../../components/Header.jsx';

export const Home = () => {
    return (
        <>
            <Header />
            <div className="flex justify-center">
                <main className="bg-slate-200 dark:bg-gray-400 min-h-screen w-screen">
                    <div className='mt-24 p-3 grid grid-cols-6 w-full px-6'>
                        <div className='hidden sm:block min-h-screen shadow-2xl justify-center dark: dark:bg-gray-900 rounded'>
                            <ul className='h-screen flex flex-col font-bold text-gray-900 text-lg justify-evenly items-center dark:text-white'>
                                <a href="">
                                    <li><i class="fa-solid fa-box-archive"></i>Archivo</li>
                                </a>
                                <a href="">
                                    <li><i class="fa-solid fa-address-book"></i>Contactos</li>
                                </a>
                                <a href="">
                                    <li><i class="fa-solid fa-floppy-disk"></i>Guardados</li>
                                </a>
                                <a href="">
                                    <li><i class="fa-solid fa-star"></i>Favoritos</li>
                                </a>
                                <a href="">
                                    <li><i class="fa-solid fa-gear"></i>Configuraciones</li>
                                </a>
                                <a href="">
                                    <li><i class="fa-solid fa-book"></i>Políticas de privacidad</li>
                                </a>
                            </ul>
                        </div>
                        <div className='flex justify-center col-span-5 h-80'>
                            <FormUploadfile />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
};