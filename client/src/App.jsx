import './App.css';
import AppRouter from './pages/AppRouter.jsx';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './contexts/UserContexProvider.jsx';

function App() {
  return (
    <>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <UserContextProvider>
        <AppRouter />
      </UserContextProvider>
    </>
  );
}

export default App;