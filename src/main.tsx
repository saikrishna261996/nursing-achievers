import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { PaymentProvider } from './context/PaymentContext';
import App from './App';
import './index.css';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '366238340019-fj6m92e7sv4o3fk7uqjp0ojf0mbmd70m.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <AuthProvider>
          <PaymentProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </PaymentProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);