// src/components/AccountStatement.jsx
import React from 'react';
import jsPDF from 'jspdf';

const AccountStatement = ({ transactions, balance, userInfo }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Account Statement', 20, 20);

    // User Information
    doc.setFontSize(12);
    doc.text(`Name: ${userInfo.name}`, 20, 30);
    doc.text(`Country: ${userInfo.country}`, 20, 40);
    doc.text(`City: ${userInfo.city}`, 20, 50);
    doc.text(`Timezone: ${userInfo.timezone}`, 20, 60);
    doc.text(`Balance: $${balance.toFixed(2)}`, 20, 80);

    // Transactions
    doc.text('Transactions:', 20, 100);
    let yPosition = 110;

    transactions.forEach((transaction, index) => {
      const type = transaction.amount < 0 ? 'withdrawal' : 'deposit';
      const date = transaction.date || new Date().toLocaleDateString();
      const amount = Math.abs(transaction.amount).toFixed(2);
      const description = `${transaction.name} - $${amount} (${type}) on ${date}`;
      doc.text(description, 20, yPosition);
      yPosition += 10; // Increase y position for the next transaction
    });

    doc.save('account_statement.pdf');
  };

  return (
    <div>
      <button onClick={generatePDF}>Download Account Statement</button>
    </div>
  );
};

export default AccountStatement;
