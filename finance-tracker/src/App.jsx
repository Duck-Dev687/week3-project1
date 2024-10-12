import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import AccountStatement from './components/AccountStatement'; // Import the new component
import { useTheme } from './contexts/ThemeContext';
import './SCSS/styles.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

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
  const [userInfo, setUserInfo] = useState({
    name: 'User Name', // Replace with user input or fetch from a user profile
    country: 'USA', // Replace with user input
    city: 'New York', // Replace with user input
    timezone: 'GMT-5', // Replace with user input or fetch the user's timezone
  });

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    setBalance(totalBalance);
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Balance transactions={transactions} />
      <TransactionList transactions={transactions} />
      <AddTransactionForm addTransaction={addTransaction} />
      <AccountStatement transactions={transactions} balance={balance} userInfo={userInfo} />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
