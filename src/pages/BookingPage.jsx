import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingSession = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4" onClick={'PaymentButton'}>Book a Session</h1>
            <img
                src="./assets/booksession.png" // Replace with your image URL
                alt="Fitness Session"
                className="mb-4 rounded-lg shadow-md"
            />
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                dateFormat="MMMM d, yyyy"
            />
            {/* Add time selection logic here */}
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                Confirm Booking
            </button>
        </div>
    );
    
};
export default BookingSession;