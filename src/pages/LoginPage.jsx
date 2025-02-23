import React, { useContext, useState } from 'react';
import { AuthContext } from '../store/AuthContext';


const Login = () => {
  const { setAuthData } = useContext(AuthContext); // Assuming you have a method to set auth data in context
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null); // State to hold error messages
  const [loading, setLoading] = useState(false); // State to manage loading state

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    try {
      const response = await fetch('https://online-fitnes-app-backend-2.onrender.com/api/login', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      const data = await response.json();
      setAuthData(data); // Assuming you set the auth data in context
      console.log(data);
    } catch (error) {
      setError(error.message); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 bg-gray-200 rounded shadow-md">
      <h2 className="text-xl font-bold">Log In</h2>
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleChange}
        placeholder="Username"
        required
        className="border p-2 rounded"
      />
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        placeholder="Password"
        required
        className="border p-2 rounded"
      />
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'} {/* Change button text based on loading state */}
        
      </button>
    </form>
  );
};

export default Login;