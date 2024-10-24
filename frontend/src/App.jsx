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