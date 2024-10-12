// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import ThemeProvider from './components/ThemeProvider';
import './SCSS/styles.scss';

const App = () => {
  const [transactions, setTransactions] = useState([]);

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

  // Load transactions from local storage
  const [storedTransactions, setStoredTransactions] = useLocalStorage('transactions', []);
  
  useEffect(() => {
    setTransactions(storedTransactions);
  }, [storedTransactions]);

  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Balance transactions={transactions} />
        <TransactionList transactions={transactions} />
        <AddTransactionForm setTransactions={setStoredTransactions} />
      </div>
    </ThemeProvider>
  );
};

export default App;
