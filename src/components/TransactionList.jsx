const TransactionList = ({ transactions, deleteTransaction }) => {
    return (
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="bg-gradient-to-r from-yellow-100 to-yellow-50 flex justify-between mb-3 p-1 border-t-2 rounded-xl border-b-2 space-y-2">
            <span className="text-xl text-center font-bold  ml-4 mt-2">{transaction.description}</span>
            <span>{transaction.type === 'Income' ? `+ $${transaction.amount}` : `- $${transaction.amount}`}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className=" text-white text-1xl text-black mr-3 rounded p-1 hover:bg-red-500">
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TransactionList;
  