import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Convocatorias from './pages/Convocatorias.Jsx';
import { Home } from './pages/Home.jsx';
import { Perfil } from './pages/Perfil.Jsx';
import { Header } from './components/Header.jsx';
import { Aside } from './components/Aside.jsx';


function App() {
  return (
    <Router>
      <Header />
      <div className="flex">
        <div className="w-2/12 bg-gray-900 min-h-screen flex justify-center fixed top-20">
          <Aside />
        </div>
        <main className="w-10/12 ml-80">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/Convocatorias" element={<Convocatorias />} />
          </Routes>
        </main>
      </div>
    </Router>

  );
}


export default App
