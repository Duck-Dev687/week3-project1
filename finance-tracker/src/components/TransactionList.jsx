import React from 'react';

const TransactionList = ({ transactions }) => (
  <ul className="transaction-list">
    {transactions.map((transaction, index) => (
      <li key={index}>
        {transaction.name} - ${transaction.amount.toFixed(2)}
      </li>
    ))}
  </ul>
);

export default TransactionList;
