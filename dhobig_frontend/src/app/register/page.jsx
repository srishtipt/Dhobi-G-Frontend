'use client';
import { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: connect to register API
    setMessage('Registration functionality coming soon!');
  };

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['username', 'email', 'password'].map((field) => (
          <div key={field}>
            <label className="block font-medium">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              value={formData[field]}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              className="border p-2 w-full rounded"
              required
            />
          </div>
        ))}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </main>
  );
}
