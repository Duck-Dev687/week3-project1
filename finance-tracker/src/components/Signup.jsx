// src/components/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change here

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Change here

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here, then navigate
    // For simplicity, we'll just navigate
    navigate('/login'); // Change here
  };

  return (
    <div>
      <h2>Signup</h2>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
