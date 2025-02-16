import React from 'react';
import fitnessImage1 from '../assets/fitness1.jpg'; // Replace with your actual image path
import fitnessImage2 from '../assets/fitness2.jpg'; // Replace with your actual image path
import fitnessImage3 from '../assets/fitness3.jpg'; // Replace with your actual image path

const HomePage = () => {
    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-3xl font-bold text-center">Welcome to the Fitness Booking Platform</h2>
            <p className="mt-4 text-center">Book personalized fitness classes with our expert trainers.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={fitnessImage1} alt="Fitness Class 1" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Yoga Classes</h3>
                        <p className="mt-2">Join our relaxing yoga sessions to improve flexibility and mindfulness.</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={fitnessImage2} alt="Fitness Class 2" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">HIIT Training</h3>
                        <p className="mt-2">Get fit fast with our high-intensity interval training classes.</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={fitnessImage3} alt="Fitness Class 3" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Personal Training</h3>
                        <p className="mt-2">Work one-on-one with our expert trainers to achieve your fitness goals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;