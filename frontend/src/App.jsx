import './App.css';
import AppRouter from './pages/AppRouter.jsx';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './contexts/user/UserContexProvider.jsx';
import { ProfileProvider } from './contexts/profile/profileContext.jsx';
import { ChatContextProvider } from './contexts/chat/chatContextProvider.jsx';
import { SocketContextProvider } from './contexts/socket/socketContextProvider.jsx';

function App() {
  return (
    <>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <UserContextProvider>
        <ChatContextProvider>
          <SocketContextProvider>
            <ProfileProvider>
              <AppRouter />
            </ProfileProvider>
          </SocketContextProvider>
        </ChatContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;