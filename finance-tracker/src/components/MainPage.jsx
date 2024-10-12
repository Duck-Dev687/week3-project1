// src/components/MainPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Welcome to Finance Tracker</h1>
      <p>
        Track your expenses and income easily with our user-friendly finance tracker. 
        Manage your transactions, view your balance, and stay on top of your financial goals.
      </p>
      <div className="buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
