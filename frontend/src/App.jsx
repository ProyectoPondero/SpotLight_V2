import './App.css';
import AppRouter from './pages/AppRouter.jsx';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './contexts/UserContexProvider.jsx';
import { ProfileProvider } from './contexts/profile/profileContext.jsx';

function App() {
  return (
    <>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <UserContextProvider>
        <ProfileProvider>
          <AppRouter />
        </ProfileProvider>
      </UserContextProvider>
    </>
  );
}

export default App;