import { useState } from 'react';
import axios from 'axios';

export default function Login({ onLogin }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://drive-api.onrender.com/api/login', {
        id,
        password,
      });

      console.log(response.data);
      setId("")
      setPassword("")
      onLogin(); // Call the callback function to notify successful login
    } catch (error) {
      console.error(error);
    }
  };

  return (
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

      <button type="submit">Login</button>
    </form>
  );
}
