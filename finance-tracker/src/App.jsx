// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import { ThemeProvider } from './contexts/ThemeContext'; // Only import ThemeProvider here
import './SCSS/styles.scss';

const App = () => {
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
    setTransactions([...transactions, transaction]);
  };

  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Balance transactions={transactions} />
        <TransactionList transactions={transactions} />
        <AddTransactionForm addTransaction={addTransaction} />
      </div>
    </ThemeProvider>
  );
};

export default App;
