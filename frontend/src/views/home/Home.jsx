import { Header } from '../../components/Header.jsx';
import { Aside } from '../../components/Aside.jsx';
import { ContenidoHome } from '../../components/ContenidoHome.jsx';

export const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-900">
            <Header />
            <div className="container mx-auto px-4 lg:px-8">
                <main className="pt-24">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
                        <Aside />
                        <ContenidoHome />
                    </div>
                </main>
            </div>
        </div>
    );
};