import React from 'react';

const PaymentButton = () => {
    const handlePayment = async () => {
        const response = await fetch('http://localhost:5000/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 5000 }), // amount in smallest currency unit
        });

        const order = await response.json();

        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Your Razorpay key id
            amount: order.amount,
            currency: order.currency,
            name: 'Your Company Name',
            description: 'Payment for your order',
            order_id: order.id,
            handler: async (response) => {
                await fetch('http://localhost:5000/verify-payment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    }),
                });
                alert('Payment successful!');
            },
            prefill: {
                name: 'John Doe',
                email: 'john@example.com',
                contact: '9999999999',
            },
            theme: {
                color: '#3399cc',
            },
        };

        const rzpay = new window.Razorpay(options);
        rzpay.open();
    };

    return <button onClick={handlePayment}>Pay with Razorpay</button>;
};

export default PaymentButton;
// Compare this snippet from backend/routes/paymentRoutes.js:


// const express = require('express');
// const router = express.Router();
// const Razorpay = require('razorpay');
// const crypto = require('crypto');





