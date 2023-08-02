import { useState } from 'react';
import axios from 'axios';
import "./login.css"

export default function Login({ onLogin }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Show the loader when the form is submitted

      const response = await axios.post('https://drive-api.onrender.com/api/login', {
        id,
        password,
      });

      console.log(response.data);

      setId('')
      setPassword('')
      onLogin(); // Call the callback function to notify successful login

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Hide the loader regardless of success or error
    }
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label>
          Username:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {loading && <div className="loader"></div>}
      </form>
    </>
  );
}
