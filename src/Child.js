import React, { useContext, useState } from "react";
import { Transactioncontext } from "./transactionContext";

export default function Child() {
  let [Newdes, setdes] = useState("");
  let [Newamount, setAmount] = useState(0);

  let transaction = useContext(Transactioncontext);
  let allTransaction = transaction.transactions;
  // transaction.id = 1;
  // add function
  const handleAddition = (event) => {
    event.preventDefault();
    transaction.addtransaction({
      amount: parseInt(Newamount),
      des: Newdes,
    });
    console.log(Newdes);
    console.log(Newamount);
  };

  // delete function
  // console.log(allTransaction)
  const handleDelete = (index) => {
    console.log(index, '====')
    // let result = allTransaction.splice(index,1)
    transaction.deleteTransaction({index})
    console.log("alltransaction",allTransaction);
  };
  // income function
  const getincome = () => {
    let income = 0;
    for (let i = 0; i < allTransaction.length; i++) {
      if (allTransaction[i].amount > 0) {
        income += allTransaction[i].amount
      }
    }
    return income;
  };
  // expense function
  const getexpense = () => {
    let expense = 0;
    for (let i = 0; i < allTransaction.length; i++) {
      if (allTransaction[i].amount < 0) {
        expense += allTransaction[i].amount;
      }
    }
    return expense;
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">Expense Tracker</h1>

        <h3>
          Your Balance <br /> ${getincome() + getexpense()}
        </h3>

        <div className="expese-container">
          <h3>
            Income
            <br />${getincome()}
          </h3>
          <h3>
            Expense <br />${getexpense()}
          </h3>
        </div>
        <h3>History</h3>
        <hr />
        {allTransaction.length !== 0 ? (
          <ul className="transaction-list">
            {allTransaction.map((items, ind) => {
              return (
                <li key={ind}>
                  <span>{items.des}</span>
                  <span>{items.amount}</span>
                  <button onClick={()=>handleDelete(ind)}>Delete</button>
                </li>
              );
            })}
          </ul>
        ) : (
          "no history availaible"
        )}

        <h3>Add New Transaction</h3>
        <hr />

        <form className="Transaction-form" onSubmit={handleAddition}>
          <label>
            Enter Description <br />
            <input
              required
              type="text"
              placeholder="enter description"
              onChange={(ev) => setdes(ev.target.value)}
            />
          </label>
          <br />
          <label>
            Enter Amount
            <br />
            <input
              required
              type="number"
              placeholder="enter Amount"
              onChange={(ev) => setAmount(ev.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
