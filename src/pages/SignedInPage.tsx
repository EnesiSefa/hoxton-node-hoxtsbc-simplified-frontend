import { useEffect, useState } from "react";
import { User, Transaction } from "../App";
type Props = {
  currentUser: User | null;
  signOut: () => void;
  addTransaction: (transaction: any) => void;
};

export default function SignedInPage({
  addTransaction,
  currentUser,
  signOut,
}: Props) {
  console.log(currentUser);

  return (
    <div>
      <h1>Welcome back, {currentUser?.name}!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("http://localhost:4000/add-transaction", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // @ts-ignore
              currency: e.target.currency.value,
              // @ts-ignore
              amount: e.target.amount.value,
              // @ts-ignore
              userId: currentUser?.id,
            }),
          })
            .then((resp) => resp.json())
            .then((data) => {
              if (data.error) {
                console.log(data.error);
              } else {
                addTransaction(data);
                console.log(addTransaction(data))
              }
            });
        }}
      >
        <h2>transactions</h2>
        <div>
          {currentUser?.transactions.map((transaction) => (
            <li>
              <h3>{transaction.currency}</h3>
              <p>{transaction.amount}</p>
            </li>
          ))}
        </div>
        <label>
          Currency:
          <input type="text" name="currency" required />
        </label>
        <label>
          Amount:
          <input type="text" name="amount" required />
        </label>
        
        <button>Add a transaction</button>
      </form>
      <button onClick={signOut}>SIGN OUT</button>
    </div>
  );
}
