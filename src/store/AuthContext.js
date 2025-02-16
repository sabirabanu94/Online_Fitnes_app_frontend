
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            const token = response.data.token;
            // Store token in localStorage
            localStorage.setItem('token', token);
            setUser ({ email }); // Store user info in state
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser (null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};