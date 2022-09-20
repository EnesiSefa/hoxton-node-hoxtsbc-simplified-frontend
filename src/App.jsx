import React, { useEffect, useState } from "react";
import "./App.css";
import { SignedInPage } from "./pages/SignedInPage";
import { SignedOutPage } from "./pages/SignedOutPage";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [transactions, setTransactions] = useState([]);

  function signIn(data) {
    setCurrentUser(data.user);
    localStorage.token = data.token;
  }

  function signOut() {
    setCurrentUser(null);
    localStorage.removeItem("token");
  }
function usersTransactions(){


}
  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:4000/validate", {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            signIn(data);
          }
        });
    }
  }, []);

  return (
    <div className="App">
      {currentUser ? (
        <SignedInPage currentUser={currentUser} signOut={signOut} />
      ) : (
        <SignedOutPage signIn={signIn} />
      )}
    </div>
  );
}
