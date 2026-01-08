'use client';

import { useState } from 'react';

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    address: '',
    pickup_date: '',
    pickup_time: '',
    service_type: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/bookings/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('✅ Booking successful!');
        setFormData({
          name: '',
          phone_number: '',
          address: '',
          pickup_date: '',
          pickup_time: '',
          service_type: '',
        });
      } else {
        setMessage('❌ Booking failed.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setMessage('⚠️ Error submitting booking.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Book Your Laundry</h1>
      {message && <div className="mb-4 text-center text-red-500">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="phone_number"
          placeholder="Phone Number"
          value={formData.phone_number}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="pickup_date"
          value={formData.pickup_date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="time"
          name="pickup_time"
          value={formData.pickup_time}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="service_type"
          value={formData.service_type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Service</option>
          <option value="Washing">Washing</option>
          <option value="Dry Cleaning">Dry Cleaning</option>
          <option value="Ironing">Ironing</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
