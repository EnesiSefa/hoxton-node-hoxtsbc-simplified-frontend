import { User } from "../App";

type Props = {
  signIn: (user: User) => void;
};

export default function SignedOutPage({ signIn }: Props) {
  return (
    <div>
      <h1>Welcome</h1>
      <h2>Sign in or create a new account!</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("http://localhost:4000/sign-up", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // @ts-ignore
              name: e.target.name.value,
              // @ts-ignore
              pin: e.target.pin.value,
            }),
          })
            .then((resp) => resp.json())
            .then((data) => {
              // data = {user,token}
              if (data.error) {
                alert(data.error);
              } else {
                signIn(data);
                
              }
            });
        }}
      >
        <h2>Sign up</h2>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Pin:
          <input type="password" name="pin" required />
        </label>
        <button>SIGN UP</button>
      </form>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("http://localhost:4000/sign-in", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // @ts-ignore
              name: e.target.name.value,
              // @ts-ignore
              pin: e.target.pin.value,
            }),
          })
            .then((resp) => resp.json())
            .then((data) => {
              // data = {user,token}
              if (data.error) {
                alert(data.error);
              } else {
                signIn(data);
              }
            });
        }}
      >
        <h2>Sign in</h2>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Pin:
          <input type="password" name="pin" required />
        </label>
        <button>SIGN IN</button>
      </form>
    </div>
  );
}
