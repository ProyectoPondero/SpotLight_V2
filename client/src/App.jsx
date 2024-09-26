import './App.css';
import AppRouter from './pages/AppRouter.jsx';
import { UserContextProvider } from './contexts/UserContexProvider.jsx';

function App() {
  return (
    // Proveedor de contexto de usuario
    <UserContextProvider>
      <AppRouter />
    </UserContextProvider>
  );
}

export default App;

// import './App.css'
// import FormUploadfile from './components/FormUploadfile'

// function App() {

//   return (
//     <>
//       <div className="App">
//         <FormUploadfile />
//       </div>
//     </>
//   )
// }

// export default App
