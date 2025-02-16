import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot for React 18
import App from './App';
import { AuthProvider } from './store/AuthContext';
import './index.css'; // Import your CSS files here

const container = document.getElementById('root');
const root = createRoot(container); // Create a root

root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
);