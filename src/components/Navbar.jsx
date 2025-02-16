import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-2xl font-bold">Fitness Booking</h1>
                <div>
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/login" className="mr-4">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;