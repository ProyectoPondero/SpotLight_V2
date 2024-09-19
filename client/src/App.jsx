import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Perfil } from './pages/Perfil';
import Home from './pages/Home';
import { Header } from './components/Header';
import Footer from './components/Footer.jsx';


function App() {
    return (
        <Router>
            <Header />
            <div className="flex justify-center">
                <main className="flex justify-center bg-gray-200 min-h-screen w-screen">
                    <Routes>
                        <Route path="/perfil" element={<Perfil />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </div>
            {window.location.pathname !== '/home' && <Footer />}
        </Router>
    );
}

export default App;
// function App() {
//   return (
//     <Router>
//       <div className="flex justify-center">
//         <main className="flex justify-center bg-gray-200 min-h-screen w-screen">
//           <Routes>
//             <Route path="/perfil" element={<Perfil/>} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;
