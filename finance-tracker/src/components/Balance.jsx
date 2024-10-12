import React, { useState, useEffect } from 'react';

const Balance = ({ transactions }) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    setBalance(totalBalance);
  }, [transactions]);

  return (
    <div className="balance">
      <h2>Balance: ${balance.toFixed(2)}</h2>
    </div>
  );
};

export default Balance;
