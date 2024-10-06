// src/pages/Home.jsx
import { Header } from '../../components/Header.jsx';
import { Aside } from '../../components/Aside.jsx';
import { ContenidoHome } from '../../components/contenidoHome.jsx';

export const Home = () => {


    return (
        <>
            <Header />
            <div className="flex justify-center h-screen">
                <main className="bg-slate-200 dark:bg-gray-600 w-screen">
                    <div className='mt-24 grid bg-slate-200 dark:bg-gray-600 grid-cols-6 w-full min-h-screen px-2'>
                        {/* Sidebar */}
                        <Aside />                        
                        <ContenidoHome/>
                    </div>
                </main>
            </div>
        </>
    );
};
