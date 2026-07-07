import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import { WalletProvider } from './context/WalletContext';
import { NotificationProvider } from './context/NotificationContext';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <WalletProvider>
            <NotificationProvider>
              <AppRouter />
              <Toaster
                position="top-right"
                toastOptions={{
                  style: {
                    background: 'rgba(24,24,27,0.95)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#e5e1e4',
                    backdropFilter: 'blur(12px)',
                    fontFamily: 'Inter, sans-serif',
                  },
                  success: { iconTheme: { primary: '#4cd7f6', secondary: '#003640' } },
                  error: { iconTheme: { primary: '#ffb4ab', secondary: '#690005' } },
                }}
              />
            </NotificationProvider>
          </WalletProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
