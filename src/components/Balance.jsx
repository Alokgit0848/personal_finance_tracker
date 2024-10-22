const Balance = ({ transactions }) => {
    // Calculate total balance
    const totalBalance = transactions.reduce((acc, transaction) => {
      return transaction.type === 'Income' ? acc + transaction.amount : acc - transaction.amount;
    }, 0);
  
    return (
      <div className="text-center mb-5">
        <h2 className="text-2xl font-bold">Total Balance: ${totalBalance.toFixed(2)}</h2>
      </div>
    );
  };
  
  export default Balance;
  