// import './App.css'
// import { useReducer } from "react";
// import { UserContext } from './contexts/UserContext.jsx'
// import AppRouter from './pages/AppRouter.jsx'
// import { userReducer } from "./contexts/userReducer.js";


// function App() {
//   // Función para obtener el token del usuario desde localStorage
//   const obtenerToken = () =>
//     JSON.parse(localStorage.getItem("userData")) || { isLogged: false };

//   // useReducer para manejar el estado del usuario con el reducer y el estado inicial
//   const [state, stateDispatch] = useReducer(userReducer, {}, obtenerToken);
//   return (
//     <>
//       <UserContext.Provider value={{ state, stateDispatch }}>
//         <AppRouter />
//       </UserContext.Provider>
//     </>
//   )
// }

// export default App

import './App.css'
import FormUploadfile from './components/FormUploadfile'

function App() {

  return (
    <>
      <div className="App">
        <FormUploadfile />
      </div>
    </>
  )
}

export default App
