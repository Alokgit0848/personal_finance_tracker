import { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";

import "./App";
const App = () => {
  const [transactions, setTransactions] = useState([]);

  // Add a transaction
  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  // Delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="bg-gradient-to-r from-green-700 to-yellow-400 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h2 className="text-3xl font-bold">Finance Tracker</h2>
          <ul className="flex space-x-6 font-bold text-lg">
            <li>
              <a href="#home" className="hover:text-gray-200 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-gray-200 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-200 transition">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center p-5">
        <div className="max-w-7xl w-full bg-gradient-to-r from-green-50 to-yellow-50 shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-6">
            Personal Finance Tracker
          </h1>
          <Balance transactions={transactions} />
          <TransactionForm addTransaction={addTransaction} />

          <div className=" m-2 mx-8">
          <TransactionList
              transactions={transactions}
              deleteTransaction={deleteTransaction}
            />
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-green-700 to-yellow-400 text-white p-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p>&copy; 2024 Personal Finance Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
