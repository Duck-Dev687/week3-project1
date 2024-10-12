import React, { useState } from 'react';

const AddTransactionForm = ({ addTransaction }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('deposit'); // Default to deposit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;

    // Create transaction object
    const transaction = {
      name,
      amount: parseFloat(amount), // Ensure it's a number
      type, // Use the type selected
      date: new Date().toLocaleDateString(), // Current date
    };

    addTransaction(transaction);
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Transaction Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="deposit">Deposit</option>
        <option value="withdrawal">Withdrawal</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
