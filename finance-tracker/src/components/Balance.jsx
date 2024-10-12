import React, { useState, useEffect } from 'react';

const Balance = ({ transactions }) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (transactions && Array.isArray(transactions)) {
      const totalBalance = transactions.reduce((acc, transaction) => {
        // Add amount for deposits, subtract for withdrawals
        return acc + (transaction.amount || 0);
      }, 0);
      setBalance(totalBalance);
    } else {
      setBalance(0); // Reset balance if there are no transactions
    }
  }, [transactions]);

  return (
    <div className="balance">
      <h2>Balance: ${balance.toFixed(2)}</h2>
    </div>
  );
};

export default Balance;
