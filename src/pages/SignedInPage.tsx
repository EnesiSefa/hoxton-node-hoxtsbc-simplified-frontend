import { User } from "../App";
type Props = {
  currentUser: User | null;
  signOut: () => void;
};

export function SignedInPage({ currentUser, signOut }: Props) {
  return (
    <div>
      <h1>Welcome back, {currentUser?.name}!</h1>
      <button onClick={signOut}>SIGN OUT</button>
    </div>
  );
}
