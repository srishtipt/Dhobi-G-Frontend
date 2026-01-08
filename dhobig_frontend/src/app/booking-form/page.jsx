'use client';
import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    customer_name: '',
    phone_number: '',
    pickup_date: '',
    delivery_date: '',
    address: '',
    service_type: '',
    status: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/api/book/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
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
        status: ''
      });
    } else {
      setMessage('❌ Failed to create booking. Please check your inputs.');
    }
  };

  // Map field keys to user-friendly labels
  const fieldLabels = {
    customer_name: 'Customer Name',
    phone_number: 'Phone Number',
    pickup_date: 'Pickup Date (YYYY-MM-DD)',
    delivery_date: 'Delivery Date (YYYY-MM-DD)',
    address: 'Address',
    service_type: 'Service Type',
    status: 'Status'
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>🧺 Create a Booking</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((field) => (
          <div key={field} style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              {fieldLabels[field]}
            </label>
            <input
              type={field.includes('date') ? 'date' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
            />
          </div>
        ))}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Submit Booking
        </button>
      </form>
      {message && (
        <p style={{ marginTop: '20px', textAlign: 'center', fontWeight: 'bold' }}>{message}</p>
      )}
    </div>
  );
}
