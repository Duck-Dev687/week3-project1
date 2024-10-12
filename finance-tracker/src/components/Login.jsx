// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../SCSS/styles.scss'

const Login = () => {
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!/\S+@\S+\.\S+/.test(useremail)) {
      setError('Please enter a valid email.');
      return;
    }

    // Password validation
    if (password.length < 8) {
      setError('Password should be at least 8 characters.');
      return;
    }

    // Clear error if validation passes
    setError('');

    // Simulate login logic, then navigate to dashboard
    // In a real app, replace this with API call and handle success/failure
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type={passwordVisible ? 'text' : 'password'}
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
            id='showOrHidePassword'
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? 'Hide' : 'Show'} Password 👁️
        </button>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
