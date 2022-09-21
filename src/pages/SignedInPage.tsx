import { User } from "../App";
type Props = {
  currentUser: User | null;
};

export function SignedInPage({ currentUser }: Props) {
  return (
    <div>
      <h1>Welcome back, {currentUser?.name}!</h1>
      
    </div>
  );
}
