'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // TODO: connect to login API
    setMessage('Login functionality coming soon!');
  };

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        {['username', 'password'].map((field) => (
          <div key={field}>
            <label className="block font-medium">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              value={credentials[field]}
              onChange={(e) => setCredentials({ ...credentials, [field]: e.target.value })}
              className="border p-2 w-full rounded"
              required
            />
          </div>
        ))}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </main>
  );
}
