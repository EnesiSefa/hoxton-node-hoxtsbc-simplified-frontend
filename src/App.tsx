import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignedOutPage from "./pages/SignedOutPage";
import { SignedInPage } from "./pages/SignedInPage";

export type User = {
  id: number;
  name: string;
  pin: string;
};

function App() {
  const [currentUser, setCurrentUser] = useState<null | User>(null);
 
  function signIn(user: User) {
    setCurrentUser(user);
  }

  function signOut() {
    setCurrentUser(null);
  }

  return (
    <div className="App">
      {currentUser ? (
        <SignedInPage currentUser={currentUser} />
      ) : (
        <SignedOutPage signIn={signIn} />
      )}
    </div>
  );
}

export default App;
