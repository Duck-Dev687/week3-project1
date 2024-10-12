// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import { useTheme } from './contexts/ThemeContext'; // useTheme imported from ThemeContext
import './SCSS/styles.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  // Custom hook for managing local storage
  const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
  };

  const [transactions, setTransactions] = useLocalStorage('transactions', []);
  
  const addTransaction = (transaction) => {
    // Ensure the amount is negative for withdrawals
    if (transaction.type === 'withdrawal') {
      transaction.amount = -Math.abs(transaction.amount);
    } else {
      transaction.amount = Math.abs(transaction.amount);
    }
    setTransactions([...transactions, transaction]);
  };
  // const addTransaction = (transaction) => {
  //   setTransactions([...transactions, transaction]);
  // };

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Balance transactions={transactions} />
      <TransactionList transactions={transactions} />
      <AddTransactionForm addTransaction={addTransaction} />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
