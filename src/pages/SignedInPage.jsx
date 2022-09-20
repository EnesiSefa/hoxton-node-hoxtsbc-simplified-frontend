import React from "react";

export function SignedInPage({ currentUser, signOut }) {
  return (
    <div>
      <h1>
        Welcome back, {currentUser.name}! your transactions are
        {currentUser?.transactions.price}
      </h1>
      <button onClick={signOut}>SIGN OUT</button>
    </div>
  );
}
