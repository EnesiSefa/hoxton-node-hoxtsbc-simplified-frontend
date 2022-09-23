import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignedOutPage from "./pages/SignedOutPage";
import SignedInPage from "./pages/SignedInPage";

export type User = {
  id: number;
  name: string;
  pin: string;
  transactions: Transaction[];
};

export type Transaction = {
  id: number;
  amount: number;
  currency: string;
  userId: number;
};

function App() {
  const [currentUser, setCurrentUser] = useState<null | User>(null);

  function signIn(data: any) {
    setCurrentUser(data.user);
    localStorage.token = data.token;
  }
  function addTransaction(data: any) {
    setCurrentUser(data.transactions);
  }
  function signOut() {
    setCurrentUser(null);
    localStorage.removeItem("token");
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
        <SignedInPage
          signOut={signOut}
          currentUser={currentUser}
          addTransaction={addTransaction}
        />
      ) : (
        <SignedOutPage signIn={signIn} />
      )}
    </div>
  );
}

export default App;
