import React, { useState } from 'react';
import axios from 'axios';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/register', { username, email, password });
            console.log(response.data);
            // Handle successful registration
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow bg-white">
            <h2 className="text-2xl font-bold text-center">Sign Up</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full p-2 border rounded mb-4"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border rounded mb-4"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-2 border rounded mb-4"
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUpPage;