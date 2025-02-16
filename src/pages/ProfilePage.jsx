import React from 'react';
import userProfileImage from '../assets/user-profile.jpg'; // Replace with your actual image path

const ProfilePage = () => {
    // Sample user data
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        bookings: [
            { id: 1, class: "Yoga Class", date: "2023-10-01" },
            { id: 2, class: "HIIT Training", date: "2023-10-05" },
            { id: 3, class: "Personal Training", date: "2023-10-10" },
        ],
    };

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-3xl font-bold">User  Profile</h2>
            <div className="flex items-center mt-6">
                <img
                    src={userProfileImage}
                    alt="User  Profile"
                    className="w-24 h-24 rounded-full border-2 border-blue-600"
                />
                <div className="ml-4">
                    <h3 className="text-xl font-semibold">{user.name}</h3>
                    <p className="text-gray-600">{user.email}</p>
                </div>
            </div>

            <h3 className="text-2xl font-bold mt-8">Booking History</h3>
            <div className="mt-4">
                {user.bookings.length > 0 ? (
                    <ul className="list-disc pl-5">
                        {user.bookings.map((booking) => (
                            <li key={booking.id} className="mt-2">
                                {booking.class} - {booking.date}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No bookings found.</p>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;