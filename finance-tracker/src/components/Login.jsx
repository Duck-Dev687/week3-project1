// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change here

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Change here

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, then navigate
    // For simplicity, we'll just navigate
    navigate('/'); // Change here
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
