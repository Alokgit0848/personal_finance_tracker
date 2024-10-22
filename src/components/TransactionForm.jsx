import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Income');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
    };
    addTransaction(newTransaction);
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border-b-2 border-gray-300 rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          className="w-full p-2 border-b-2 border-gray-300 rounded"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <select
          className="w-full p-2 border-b-2 border-gray-300 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-green-600 to-green-300 hover:bg-opacity-75 text-white py-2 rounded"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
