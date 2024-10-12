import React, { useState } from 'react';
import useForm from '../hooks/useForm';

const AddTransactionForm = ({ addTransaction }) => {
  const { formData, handleChange, handleSubmit, errors } = useForm({
    initialValues: { name: '', amount: '' },
    onSubmit: (values) => {
      addTransaction({ name: values.name, amount: parseFloat(values.amount) });
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = 'Name is required';
      if (!values.amount || isNaN(values.amount)) errors.amount = 'Valid amount is required';
      return errors;
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Transaction Name" />
      {errors.name && <p>{errors.name}</p>}
      <input type="text" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" />
      {errors.amount && <p>{errors.amount}</p>}
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
