import './styles/App.css';
import React from 'react'
import { AppRouter } from "./routes/AppRouter.jsx"

function App() {
  return <AppRouter/>

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
