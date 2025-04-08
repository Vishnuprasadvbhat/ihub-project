import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css';
import { AuthProvider } from './auth/context/Authcontext.jsx';
import {GoogleOAuthProvider} from "@react-oauth/google"

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID

createRoot(document.getElementById('root')).render(
<AuthProvider>
    <BrowserRouter>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
        <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
</AuthProvider>
)
