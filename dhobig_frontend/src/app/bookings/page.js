'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    customer_name: '',
    phone_number: '',
    pickup_date: '',
    delivery_date: '',
    address: '',
    service_type: '',
    status: '',
  });

  const [message, setMessage] = useState('');
  const [bookings, setBookings] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fetchBookings = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/bookings/');
    const data = await res.json();
    setBookings(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/book/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setMessage('✅ Booking created successfully!');
      setFormData({
        customer_name: '',
        phone_number: '',
        pickup_date: '',
        delivery_date: '',
        address: '',
        service_type: '',
        status: '',
      });
      fetchBookings();
    } else {
      setMessage('❌ Failed to create booking.');
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Create Booking</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(formData).map((field) => (
            <input
              key={field}
              type={field.includes('date') ? 'date' : 'text'}
              name={field}
              placeholder={field.replace('_', ' ')}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-green-600">{message}</p>
        )}
      </div>

      {/* Booking List */}
      <div className="max-w-3xl mx-auto mt-10 bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">All Bookings</h2>
        {bookings.length === 0 ? (
          <p className="text-center text-gray-500">No bookings found.</p>
        ) : (
          <ul className="space-y-4">
            {bookings.map((booking) => (
              <li
                key={booking.id}
                className="p-4 border rounded shadow-sm bg-gray-50"
              >
                <p><strong>Name:</strong> {booking.customer_name}</p>
                <p><strong>Phone:</strong> {booking.phone_number}</p>
                <p><strong>Pickup:</strong> {booking.pickup_date}</p>
                <p><strong>Delivery:</strong> {booking.delivery_date}</p>
                <p><strong>Address:</strong> {booking.address}</p>
                <p><strong>Service:</strong> {booking.service_type}</p>
                <p><strong>Status:</strong> {booking.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
