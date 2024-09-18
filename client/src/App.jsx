import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Convocatorias from './pages/Convocatorias.Jsx';
import { Home } from './pages/Home.jsx';
import { Perfil } from './pages/Perfil.Jsx';
import { Header } from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Soporte } from './pages/Soporte.jsx';
import './styles/app.css'

function App() {
  return (
    <Router>
      <Header />
      <div className="flex justify-center">
        <main className="bg-gray-200 min-h-screen w-screen">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/Convocatorias" element={<Convocatorias />} />
            <Route path="/soporte" element={<Soporte />} />
          </Routes>
        </main>
      </div>
      {window.location.pathname !== '/home' && <Footer />}

    </Router>
  );
}


export default App
