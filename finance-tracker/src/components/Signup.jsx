import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Mock function to check if email already exists (replace with actual implementation)
  const checkEmailExists = (email) => {
    // Here you should check against your data store
    // This is a mock; replace with actual API call or data check
    const existingEmails = ['test@example.com']; // Replace with actual data
    return existingEmails.includes(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user is 18 or older
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (age < 18 || (age === 18 && monthDifference < 0)) {
      setErrorMessage('You must be at least 18 years old to sign up.');
      return;
    }

    // Check if the email already exists
    if (checkEmailExists(email)) {
      setErrorMessage('This email is already registered. Please use a different email.');
      return;
    }

    // If all validations pass, proceed with account creation
    // This is where you would typically send a request to your server/API

    // Redirect to home page on successful sign-up
    navigate('/'); // Redirecting to the home page
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <label htmlFor="birthDate">Birth Date</label>
      <input
        type="date"
        id="birthDate"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        required
      />
      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button type="submit">Create Account</button>
    </form>
  );
};

export default Signup;
